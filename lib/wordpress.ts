export interface WordPressPost {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    featured_media: number;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

export interface WordPressCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
    parent: number;
}

const WP_API_URL = "https://cms.sakujls.lk/wp-json/wp/v2";

export async function getPosts(limit: number = 10, categoryId?: number | string): Promise<WordPressPost[]> {
    const allPosts: WordPressPost[] = [];
    const perPage = 100; // WordPress max per page
    const pagesToFetch = Math.ceil(limit / perPage);

    try {
        for (let page = 1; page <= pagesToFetch; page++) {
            let url = `${WP_API_URL}/posts?_embed&per_page=${perPage}&page=${page}`;
            if (categoryId) {
                url += `&categories=${categoryId}`;
            }

            const res = await fetch(url, {
                next: { revalidate: 60 },
            });

            if (!res.ok) break;

            const data = await res.json();
            if (data.length === 0) break;

            allPosts.push(...data);
            if (allPosts.length >= limit) break;
        }
    } catch (error) {
        console.error("Error in getPosts:", error);
    }

    return allPosts.slice(0, limit);
}

export async function getCategories(): Promise<WordPressCategory[]> {
    const res = await fetch(`${WP_API_URL}/categories?per_page=100&hide_empty=false`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
    const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
}
