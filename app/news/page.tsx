"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPosts, getCategories, WordPressPost, WordPressCategory } from "@/lib/wordpress";

const NewsPage = () => {
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [categories, setCategories] = useState<WordPressCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingPosts, setLoadingPosts] = useState(false);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        loadCategories();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingPosts(true);
            try {
                const data = await getPosts(12, selectedCategory || undefined);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
                setLoadingPosts(false);
            }
        };

        fetchPosts();
    }, [selectedCategory]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <main className="min-h-screen bg-[#fbfbfb]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saku-dark"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Globe size={400} className="text-gray-500 animate-[spin_120s_linear_infinite]" />
                    </div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-overline">Updates</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-4 sm:mb-6 leading-tight">
                            LATEST NEWS & <span className="text-saku-red">EVENTS</span>
                        </h1>
                        <p className="text-body text-gray-300 font-sans leading-relaxed mb-8">
                            Stay up to date with the latest happenings, cultural events, and academic updates at Saku Japanese Language School.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-white border-b border-slate-100 py-6 sticky top-[72px] lg:top-[80px] z-40">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${selectedCategory === null
                                ? "bg-saku-red text-white shadow-lg shadow-saku-red/20"
                                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                }`}
                        >
                            All Posts
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${selectedCategory === cat.id
                                    ? "bg-saku-dark text-white shadow-lg"
                                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                    }`}
                            >
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 md:py-20 bg-white min-h-[600px]">
                <div className="container mx-auto px-6">
                    {loading || loadingPosts ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm animate-pulse">
                                    <div className="h-64 bg-slate-200 w-full" />
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 bg-slate-200 rounded w-1/4" />
                                        <div className="h-6 bg-slate-200 rounded w-3/4" />
                                        <div className="space-y-2">
                                            <div className="h-3 bg-slate-200 rounded w-full" />
                                            <div className="h-3 bg-slate-200 rounded w-full" />
                                            <div className="h-3 bg-slate-200 rounded w-2/3" />
                                        </div>
                                        <div className="pt-4 flex flex-col gap-2">
                                            <div className="h-10 bg-slate-100 rounded-lg w-full" />
                                            <div className="h-10 bg-slate-100 rounded-lg w-full" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post, index) => {
                                const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/student/ff-saku.jpg";
                                const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").substring(0, 150) + "...";

                                return (
                                    <motion.article
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden"
                                    >
                                        <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                                            <Image
                                                src={imageUrl}
                                                alt={post.title.rendered}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="bg-saku-red text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded">
                                                        News
                                                    </span>
                                                    <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">
                                                        {formatDate(post.date)}
                                                    </span>
                                                </div>
                                                <h2
                                                    className="font-display text-subheading font-bold text-white leading-tight line-clamp-2"
                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div
                                                className="text-body text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-3"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />
                                            <div className="flex flex-col gap-2 mt-auto">
                                                <Link
                                                    href={`/news/${post.slug}`}
                                                    className="w-full bg-slate-50 border border-slate-200 text-saku-dark text-center py-2.5 font-bold tracking-wider text-xs hover:border-saku-red hover:text-saku-red transition-all uppercase rounded-lg"
                                                >
                                                    Read Full Story
                                                </Link>

                                            </div>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default NewsPage;
