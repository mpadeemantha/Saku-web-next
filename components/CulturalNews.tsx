"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getPosts, WordPressPost } from "@/lib/wordpress";

const CulturalNews = () => {
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts(2);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <section className="py-24 bg-[#fbfbfb] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Community</span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-saku-dark">Recent News & Events</h2>
                    </div>
                    <Link href="/news" className="text-sm font-bold tracking-widest border-b-2 border-saku-red pb-1 hover:text-saku-red transition-colors">
                        VIEW ALL ARCHIVES
                    </Link>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-sm border border-gray-100 rounded-2xl animate-pulse h-64 sm:h-auto">
                                <div className="w-full sm:w-1/2 h-48 sm:h-auto bg-slate-200" />
                                <div className="p-8 sm:w-1/2 flex flex-col justify-center space-y-4">
                                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                                    <div className="h-6 bg-slate-200 rounded w-3/4" />
                                    <div className="space-y-2">
                                        <div className="h-3 bg-slate-200 rounded w-full" />
                                        <div className="h-3 bg-slate-200 rounded w-5/6" />
                                    </div>
                                    <div className="h-3 bg-slate-100 rounded w-1/4 mt-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {posts.map((post, index) => {
                            const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/student/ff-saku.jpg";
                            const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").substring(0, 120) + "...";

                            return (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 border border-gray-100 rounded-2xl"
                                >
                                    <div className="relative w-full sm:w-1/2 h-48 sm:h-auto overflow-hidden">
                                        <Image
                                            src={imageUrl}
                                            alt={post.title.rendered}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                                        <span className="text-sm font-bold text-saku-red uppercase mb-2">News</span>
                                        <Link href={`/news/${post.slug}`}>
                                            <h3 
                                                className="font-display text-xl font-bold mb-3 line-clamp-2 hover:text-saku-red transition-colors cursor-pointer"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                        </Link>
                                        <p className="text-gray-500 text-body mb-4 leading-relaxed line-clamp-3">
                                            {excerpt}
                                        </p>
                                        <span className="text-label text-gray-400 font-sans uppercase tracking-wider">{formatDate(post.date)}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}


                {/* <div className="mt-24">
                    <div className="mb-12">
                        <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Cultural Festivals</span>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 text-saku-dark">Japanese Traditions</h2>
                    </div>

                    <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x">
                        {festivals.map((festival, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-72 h-96 relative group snap-center cursor-pointer"
                                whileHover={{ y: -10 }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                <Image
                                    src={festival.image}
                                    alt={festival.name}
                                    fill
                                    className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h4 className="font-display text-2xl font-bold text-white tracking-wide">
                                        {festival.name}
                                    </h4>
                                    <div className="w-8 h-1 bg-saku-red mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div> */}
            </div>


        </section>
    );
};

export default CulturalNews;
