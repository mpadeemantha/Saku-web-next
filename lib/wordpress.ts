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
    count: number;
    parent: number;
}

const WP_API_URL = "https://cms.sakujls.lk/wp-json/wp/v2";

export async function getPosts(limit: number = 10, categoryId?: number): Promise<WordPressPost[]> {
    let url = `${WP_API_URL}/posts?_embed&per_page=${limit}`;
    if (categoryId) {
        url += `&categories=${categoryId}`;
    }
    
    console.log(`Fetching posts from: ${url}`);
    const res = await fetch(url, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
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
