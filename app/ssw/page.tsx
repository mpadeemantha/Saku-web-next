"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Activity, CheckCircle2, Globe, ArrowLeft, ArrowRight, Wrench, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sswData = {
    ssw1: {
        id: 'ssw1',
        title: 'Special Skilled Worker (SSW I)',
        icon: BriefcaseBusiness,
        description: 'Designed for foreign nationals with a considerable degree of knowledge or experience belonging to specific industry fields. Allows working in Japan for up to 5 years.',
        items: [

            { id: 'transport', title: 'Truck Driving Skill Course', description: 'Professional driving and logistics operations for moving goods and people across Japan.', image: '/visa/transport.webp' },

        ]
    },
    ssw2: {
        id: 'ssw2',
        title: 'Special Skilled Worker (SSW II)',
        icon: Wrench,
        description: 'For individuals with proficient skills belonging to specific industry fields. Offers the possibility of bringing family members and unlimited visa renewals leading to permanent residency.',
        items: [

            { id: 'food-service-2', title: 'SSW Food Service Skill Course (Category II)', description: 'Advanced management and specialized skills for the Japanese food service industry, leading to long-term residency.', image: '/visa/food service.webp' },
            { id: 'food-manufacturing-2', title: 'SSW Food Manufacturing Skill Course (Category II)', description: 'Professional leadership and technical mastery in food production lines and manufacturing management.', image: '/visa/food and bev.webp' }
        ]
    }
};

export default function SSWPage() {
    const [activeTab, setActiveTab] = useState<'ssw1' | 'ssw2'>('ssw1');
    const activeData = sswData[activeTab];

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-white">
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
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm sm:text-xs">SSW Programs</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                            Build Your Career.<br />
                            <span className="text-gray-400">In Japan.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-sans leading-relaxed mb-8">
                            Explore dynamic opportunities through the Specified Skilled Worker (SSW) programs and secure a prosperous future.
                        </p>
                    </div>
                </div>
            </section>

            {/* SSW Content Section */}
            <section className="py-16 md:py-24 bg-white min-h-[600px]">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                    {/* Main Category Cards (Neobrutalism Style) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        <button
                            onClick={() => setActiveTab('ssw1')}
                            className={`relative flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 border-2 text-left group overflow-hidden ${
                                activeTab === 'ssw1' 
                                    ? 'border-saku-dark bg-white shadow-[10px_10px_0px_#000000] translate-x-[-4px] translate-y-[-4px]' 
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'
                            }`}
                        >
                            {activeTab === 'ssw1' && (
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <CheckCircle2 className="text-saku-red" size={24} />
                                </motion.div>
                            )}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                                activeTab === 'ssw1' 
                                    ? 'bg-saku-red text-white rotate-3 shadow-lg shadow-saku-red/30' 
                                    : 'bg-black text-white group-hover:bg-saku-red'
                            }`}>
                                <BriefcaseBusiness size={36} />
                            </div>
                            <div>
                                <h3 className={`font-display text-2xl font-bold mb-1 ${activeTab === 'ssw1' ? 'text-saku-dark' : 'text-black'}`}>
                                    SSW Type I
                                </h3>
                                <p className={`text-xs font-bold tracking-widest uppercase ${activeTab === 'ssw1' ? 'text-saku-red' : 'text-slate-400'}`}>
                                    Skilled Worker
                                </p>
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveTab('ssw2')}
                            className={`relative flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 border-2 text-left group overflow-hidden ${
                                activeTab === 'ssw2' 
                                    ? 'border-saku-dark bg-white shadow-[10px_10px_0px_#000000] translate-x-[-4px] translate-y-[-4px]' 
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'
                            }`}
                        >
                            {activeTab === 'ssw2' && (
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <CheckCircle2 className="text-saku-red" size={24} />
                                </motion.div>
                            )}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                                activeTab === 'ssw2' 
                                    ? 'bg-saku-red text-white rotate-3 shadow-lg shadow-saku-red/30' 
                                    : 'bg-black text-white group-hover:bg-saku-red'
                            }`}>
                                <Wrench size={36} />
                            </div>
                            <div>
                                <h3 className={`font-display text-2xl font-bold mb-1 ${activeTab === 'ssw2' ? 'text-saku-dark' : 'text-black'}`}>
                                    SSW Type II
                                </h3>
                                <p className={`text-xs font-bold tracking-widest uppercase ${activeTab === 'ssw2' ? 'text-saku-red' : 'text-slate-400'}`}>
                                    Expert Level
                                </p>
                            </div>
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Main Category Header */}
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="w-10 h-1 bg-saku-red"></div>
                                    <span className="text-saku-red font-bold tracking-[0.2em] uppercase text-xs">Specified Skilled Worker</span>
                                </div>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold text-saku-dark mb-4 lowercase first-letter:uppercase">{activeData.title}</h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {activeData.description}
                                </p>
                            </div>

                            {/* Sub Categories & Items Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {activeData.items.map((item: { id: string; title: string; description: string; image: string }, idx: number) => (
                                    <div key={idx} className="bg-white border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500 rounded-none h-full overflow-hidden">
                                        <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                                            <h3 className="absolute bottom-6 left-6 right-6 font-display text-xl font-bold text-white z-10 leading-tight">{item.title}</h3>
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow bg-white">
                                            <p className="text-slate-500 leading-relaxed mb-8 flex-grow text-base md:text-lg font-medium">
                                                {item.description}
                                            </p>
                                            <div className="mt-auto flex flex-col gap-3">
                                                <Link href={`/visa/details/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="w-full bg-slate-50 border border-slate-200 text-saku-dark text-center py-3.5 font-bold tracking-widest text-xs hover:border-saku-red hover:text-saku-red transition-all uppercase">
                                                    VIEW REQUIREMENTS
                                                </Link>
                                                <Link href="/contact" className="w-full bg-saku-red text-white text-center py-3.5 font-bold tracking-widest text-xs hover:bg-saku-dark transition-all active:scale-[0.98] uppercase">
                                                    ENROLL NOW
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Ready to secure your career in Japan?</h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
                        Our expert consultants are here to guide you through the SSW program, from exam preparation to job placement.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-saku-red px-6 sm:px-10 py-3 sm:py-4 font-bold tracking-widest text-sm sm:text-sm hover:bg-saku-dark hover:text-white transition-all active:scale-[0.98]">
                        BOOK A FREE CONSULTATION
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
