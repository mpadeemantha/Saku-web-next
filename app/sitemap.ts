import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/wordpress';

const BASE_URL = 'https://sakujls.lk';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/courses`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/news`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/visa`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/ssw`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Dynamic routes from WordPress
    try {
        const posts = await getPosts(100); // Fetch up to 100 posts for the sitemap

        const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => {
            // Determine the prefix based on categories or content if needed
            // For now, we'll check if it's a course or news post
            // In this specific setup, both often go to /news or /courses
            // However, the [slug] pages are defined in app/news/[slug] and app/courses/[slug]
            // We'll add both to be safe, or try to distinguish if possible.
            // Since we don't have category info directly here easily without more fetches,
            // we'll provide news and courses based on standard usage.
            
            // Note: If a post is in multiple places, this might create duplicates.
            // But usually, posts are either news or courses.
            
            return {
                url: `${BASE_URL}/news/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'weekly',
                priority: 0.6,
            };
        });

        // Add course routes specifically if they are different
        const courseRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
            url: `${BASE_URL}/courses/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly',
            priority: 0.6,
        }));

        return [...staticRoutes, ...dynamicRoutes, ...courseRoutes];
    } catch (error) {
        console.error('Error generating dynamic sitemap routes:', error);
        return staticRoutes;
    }
}
