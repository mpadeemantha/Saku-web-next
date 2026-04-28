"use client";
// Force type refresh

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { WordPressPost } from "@/lib/wordpress";

const PostContent = ({ post, latestPosts }: { post: WordPressPost; latestPosts?: WordPressPost[] }) => {
    // ... same formatDate and extractImages functions ...
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // 1. Try to get featured image from _embedded
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    let imageUrl = (featuredMedia as any)?.source_url;
    
    // 2. Fallback: Extract first image from content if featured image is missing/forbidden
    if (!imageUrl || (featuredMedia as any)?.code === 'rest_forbidden') {
        const content = post.content.rendered;
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
        }
    }

    // 3. Final Fallback: Saku default
    if (!imageUrl) {
        imageUrl = "/student/ff-saku.jpg";
    }

    const extractImages = (html: string) => {
        const imgRegExp = /<img[^>]+src="([^">]+)"/g;
        const images = [];
        let match;
        while ((match = imgRegExp.exec(html)) !== null) {
            if (match[1] !== imageUrl) {
                images.push(match[1]);
            }
        }
        return images;
    };

    const galleryImages = extractImages(post.content.rendered);

    const sanitizedContent = post.content.rendered
        .replace(/<figure[^>]*>[\s\S]*?<\/figure>/g, "")
        .replace(/<img[^>]*>/g, "");

    return (
        <div className="bg-slate-50 selection:bg-saku-red selection:text-white min-h-screen">
            {/* Top progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full bg-saku-red origin-left"
                />
            </div>

            {/* Hero Section - Matching Visa Page Style Exactly */}
            <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saku-dark"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <Globe size={400} className="text-gray-500 animate-[spin_120s_linear_infinite]" />
                        </div>
                    </div>
                    
                    <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                        <div className="max-w-4xl">
                            {/* Back Link */}
                            <Link 
                                href="/news" 
                                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-12 transition-colors group"
                            >
                                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
                                BACK TO NEWS
                            </Link>

                            {/* Label with Red Lines */}
                            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                                <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                                <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">
                                    Official Update • {formatDate(post.date)}
                                </span>
                                <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                            </div>

                            {/* Title with matching scale */}
                            <h1 
                                className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-sm"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />

                            {/* Decorative line */}
                            <div className="h-1.5 w-20 bg-saku-red mx-auto rounded-full opacity-80"></div>
                        </div>
                    </div>
                </section>

                {/* Page Body */}
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* ── MAIN CONTENT ── */}
                        <article className="flex-1 min-w-0 space-y-8">
                            {/* Card 1: Featured Image */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                            >
                                {/* Featured Image inside the card */}
                                <div className="relative h-64 md:h-[400px] w-full bg-slate-100 border-b border-slate-50">
                                    <Image
                                        src={imageUrl}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Featured Media</span>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 rounded-full bg-saku-red"></div>
                                        <div className="w-1 h-1 rounded-full bg-saku-red/40"></div>
                                        <div className="w-1 h-1 rounded-full bg-saku-red/20"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Main Article Text */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm"
                            >
                                <div 
                                    className="prose-saku max-w-none"
                                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                                />
                            </motion.div>

                            {/* Card 3: Article Gallery */}
                            {galleryImages.length > 0 && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="h-6 w-1 bg-saku-red rounded-full"></div>
                                        <h3 className="font-display text-2xl font-bold text-saku-dark uppercase tracking-wider">Article Gallery</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {galleryImages.map((img, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-slate-100"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Gallery image ${i + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Author/Footer Section */}
                            <div className="bg-saku-dark text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-saku-red flex items-center justify-center text-white font-bold text-xl border border-white/20">
                                        S
                                    </div>
                                    <div>
                                        <p className="font-bold text-white uppercase tracking-widest text-xs">Published By</p>
                                        <p className="text-white/60 font-medium italic text-sm">Saku Academic & News Team</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl transition-all text-xs font-bold uppercase tracking-widest group">
                                    <Share2 size={16} className="group-hover:scale-110 transition-transform" />
                                    Share This Post
                                </button>
                            </div>
                        </article>

                        {/* ── SIDEBAR ── */}
                        <aside className="lg:w-80 flex-shrink-0">
                            <div className="sticky top-28 space-y-6">
                                {/* Latest Posts Section */}
                                {latestPosts && latestPosts.length > 0 && (
                                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6">
                                        <h3 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Latest Updates</h3>
                                        <div className="space-y-6">
                                            {latestPosts.filter(p => p.id !== post.id).slice(0, 4).map((lp) => {
                                                const lpMedia = lp._embedded?.["wp:featuredmedia"]?.[0];
                                                let lpImage = (lpMedia as any)?.source_url;

                                                if (!lpImage || (lpMedia as any)?.code === 'rest_forbidden') {
                                                    const content = lp.content.rendered;
                                                    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                                                    if (imgMatch && imgMatch[1]) {
                                                        lpImage = imgMatch[1];
                                                    }
                                                }

                                                if (!lpImage) {
                                                    lpImage = "/student/ff-saku.jpg";
                                                }
                                                return (
                                                    <Link key={lp.id} href={`/news/${lp.slug}`} className="flex gap-4 group cursor-pointer">
                                                        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-slate-100">
                                                            <Image
                                                                src={lpImage}
                                                                alt={lp.title.rendered}
                                                                fill
                                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-center min-w-0">
                                                            <p className="text-[10px] text-saku-red font-bold uppercase tracking-wider mb-1">{new Date(lp.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                                            <h4
                                                                className="font-bold text-saku-dark text-sm leading-snug line-clamp-2 group-hover:text-saku-red transition-colors"
                                                                dangerouslySetInnerHTML={{ __html: lp.title.rendered }}
                                                            />
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                        <Link href="/news" className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-saku-red transition-colors uppercase tracking-widest border-t border-slate-50 pt-4 group">
                                            View All News <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                )}

                                {/* Inquiry CTA */}
                                <div className="bg-white rounded-3xl border-2 border-saku-dark p-6 shadow-[8px_8px_0px_#000000]">
                                    <h3 className="font-display text-lg font-bold text-saku-dark mb-2">Have Questions?</h3>
                                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                        Learn more about our courses and enrollment process by contacting our support team.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center gap-2 w-full bg-saku-red text-white py-4 rounded-2xl font-bold text-sm hover:bg-saku-dark transition-all group uppercase tracking-widest"
                                    >
                                        Enquire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Post Stats */}
                                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6">
                                    <h3 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-4">Post Details</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                                                <Calendar size={14} className="text-saku-red" />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Posted On</p>
                                                <p className="text-saku-dark font-bold">{formatDate(post.date)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                                                <User size={14} className="text-saku-red" />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Category</p>
                                                <p className="text-saku-dark font-bold">Campus News</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                                                <Clock size={14} className="text-saku-red" />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Read Time</p>
                                                <p className="text-saku-dark font-bold">~ 3 Mins</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                </div>
            </div>
        </div>
    );
};

export default PostContent;
