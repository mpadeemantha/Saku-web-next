import React from "react";
import { getPostBySlug, getPosts } from "@/lib/wordpress";
import CourseDetailsContent from "./CourseDetailsContent";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const dynamic = 'force-static';
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
    try {
        const posts = await getPosts(500);
        const params = posts.map((post) => ({
            slug: post.slug,
        }));

        if (params.length === 0) {
            return [{ slug: 'sample-course' }, { slug: 'test' }];
        }

        // Add common test slugs to avoid dev errors
        params.push({ slug: 'test' });
        params.push({ slug: 'sample-course' });

        return params;
    } catch (error) {
        console.error("Error generating static params for course details:", error);
        return [{ slug: 'sample-course' }];
    }
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    try {
        const post = await getPostBySlug(slug);

        if (!post) {
            return (
                <div className="min-h-screen bg-white flex flex-col">
                    <Navbar />
                    <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl font-bold text-saku-dark mb-4">Course Not Found</h1>
                        <p className="text-slate-500 mb-8">The educational program you are looking for might have been moved or removed.</p>
                        <Link href="/courses" className="inline-block bg-saku-red text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all hover:bg-saku-dark">
                            Back to Courses
                        </Link>
                    </div>
                </div>
            );
        }

        // Smart Image Extraction Fallback
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
        let imageUrl = (featuredMedia as any)?.source_url;

        if (!imageUrl || (featuredMedia as any)?.code === 'rest_forbidden') {
            const content = post.content.rendered;
            const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch && imgMatch[1]) {
                imageUrl = imgMatch[1];
            }
        }

        if (!imageUrl) {
            imageUrl = "/student/ff-saku.jpg";
        }

        // Inject the found image into the post object
        const enrichedPost = {
            ...post,
            _embedded: {
                ...post._embedded,
                'wp:featuredmedia': [{ source_url: imageUrl } as any]
            }
        };

        return <CourseDetailsContent post={enrichedPost} />;
    } catch (error) {
        console.error("Error rendering course details page:", error);
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl font-bold text-saku-dark mb-4">Server Error</h1>
                    <p className="text-slate-500 mb-8">An error occurred while fetching the course details.</p>
                    <Link href="/courses" className="inline-block bg-saku-red text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all hover:bg-saku-dark">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }
}
