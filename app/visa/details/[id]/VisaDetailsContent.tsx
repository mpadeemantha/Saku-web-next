"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Clock, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { WordPressPost } from "@/lib/wordpress";

export default function VisaDetailsContent({ post }: { post: WordPressPost }) {
    const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/student/ff-saku.jpg";
    const sanitizedContent = post.content.rendered;

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-saku-red selection:text-white">
            <Navbar />

            {/* Hero Section - Matching Post Style */}
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
                            href="/visa" 
                            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-12 transition-colors group"
                        >
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
                            BACK TO VISA GUIDE
                        </Link>

                        {/* Label with Red Lines */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">
                                Visa Program Details
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
                            {/* Card 1: Featured Image / Media */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                            >
                                <div className="relative h-64 md:h-[450px] w-full bg-slate-100">
                                    <Image
                                        src={imageUrl}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Visa Program Media</span>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 rounded-full bg-saku-red"></div>
                                        <div className="w-1 h-1 rounded-full bg-saku-red/40"></div>
                                        <div className="w-1 h-1 rounded-full bg-saku-red/20"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Main Content */}
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
                        </article>

                        {/* ── SIDEBAR ── */}
                        <aside className="lg:w-72 xl:w-80 flex-shrink-0">
                            <div className="sticky top-28 space-y-6">
                                {/* CTA Card */}
                                <div className="bg-saku-dark text-white rounded-3xl p-8 border-2 border-saku-dark shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-saku-red/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>
                                    <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Start Your Journey</h3>
                                    <p className="text-white/60 text-sm mb-8 leading-relaxed relative z-10">Our expert team will help you with every step of the Japanese visa application process.</p>
                                    <Link href="/contact" className="flex items-center justify-center gap-3 w-full bg-saku-red text-white py-4 rounded-2xl font-bold text-sm hover:bg-white hover:text-saku-dark transition-all duration-300 group/btn relative z-10 shadow-lg shadow-saku-red/20 uppercase tracking-widest">
                                        Apply Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Quick Info */}
                                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                                        <h3 className="font-bold text-xs text-slate-400 uppercase tracking-widest">Quick Information</h3>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-saku-red border border-slate-100">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Processing Time</p>
                                                <p className="text-slate-700 font-bold">3–6 Months</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-amber-500 border border-slate-100">
                                                <TrendingUp size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Global Demand</p>
                                                <p className="text-slate-700 font-bold">Very High</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Back link */}
                                <Link href="/visa" className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-saku-red text-xs font-bold transition-all py-4 group uppercase tracking-widest">
                                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Browse All Visas
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            <Footer />
        </main>
    );
}
