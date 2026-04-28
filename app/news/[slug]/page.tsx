import React from "react";
// Force type refresh
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPosts, getPostBySlug } from "@/lib/wordpress";
import PostContent from "./PostContent";

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const posts = await getPosts(100); 
        
        if (!posts || posts.length === 0) {
            console.warn("No news posts found for static params, using fallback.");
            return [{ slug: 'sample-post' }, { slug: 'test' }];
        }

        const params = posts.map((post) => ({
            slug: post.slug,
        }));
        
        // Add common test slugs to avoid dev errors
        params.push({ slug: 'test' });
        params.push({ slug: 'sample-post' });
        
        return params;
    } catch (error) {
        console.error("Error generating static params for news:", error);
        return [{ slug: 'sample-post' }];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    
    if (!post) return { title: "Post Not Found" };
    
    return {
        title: `${post.title.rendered.replace(/<[^>]+>/g, "")} | Saku News`,
        description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
    };
}

const SinglePostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const latestPosts = await getPosts(5); // Fetch 5 latest posts for the sidebar

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center pt-20">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                        <a href="/news" className="text-saku-red font-bold hover:underline font-sans uppercase tracking-widest text-sm">
                            Back to News
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PostContent post={post} latestPosts={latestPosts} />
            <Footer />
        </main>
    );
};

export default SinglePostPage;
