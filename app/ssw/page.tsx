"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BriefcaseBusiness, Wrench, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sswData = {
    ssw1: {
        id: 'ssw1',
        label: 'SSW Type I',
        sublabel: 'Skilled Worker · Up to 5 Years',
        subCategories: [
            {
                id: 'driving',
                title: 'Driving & Logistics',
                description: 'Professional driving and logistics operations for moving goods and people across Japan.',
                items: [
                    { id: 'transport', title: 'Truck Driving Skill Course', description: 'Professional driving and logistics operations for moving goods and people across Japan.', image: '/visa/transport.webp' },
                ]
            },
        ]
    },
    ssw2: {
        id: 'ssw2',
        label: 'SSW Type II',
        sublabel: 'Expert Level · Permanent Path',
        subCategories: [
            {
                id: 'food',
                title: 'Food Industry',
                description: 'Advanced specialized skills in food service and manufacturing management for long-term residency.',
                items: [
                    { id: 'food-service-2', title: 'SSW Food Service Skill Course (Category II)', description: 'Advanced management and specialized skills for the Japanese food service industry, leading to long-term residency.', image: '/visa/food service.webp' },
                    { id: 'food-manufacturing-2', title: 'SSW Food Manufacturing Skill Course (Category II)', description: 'Professional leadership and technical mastery in food production lines and manufacturing management.', image: '/visa/food and bev.webp' }
                ]
            },
        ]
    }
};

export default function SSWPage() {
    const [activeTab, setActiveTab] = useState<'ssw1' | 'ssw2'>('ssw1');
    const [activeSubTab, setActiveSubTab] = useState<string>('driving');

    const handleTabChange = (tab: 'ssw1' | 'ssw2') => {
        setActiveTab(tab);
        setActiveSubTab(sswData[tab].subCategories[0].id);
    };

    const activeData = sswData[activeTab];
    const currentSubCategory = activeData.subCategories.find(sub => sub.id === activeSubTab) || activeData.subCategories[0];

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero */}
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
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-overline">SSW Programs</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-4 sm:mb-6 leading-tight">
                            Build Your Career.<br />
                            <span className="text-gray-400">In Japan.</span>
                        </h1>
                        <p className="text-body text-gray-300 font-sans leading-relaxed mb-8">
                            Explore dynamic opportunities through the Specified Skilled Worker (SSW) programs and secure a prosperous future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                    {/* Step 1 */}
                    <div className="mb-12">
                        <p className="text-center text-overline text-slate-400 mb-6">Step 1 — Choose Your SSW Type</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <button
                                onClick={() => handleTabChange('ssw1')}
                                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                    activeTab === 'ssw1'
                                        ? 'border-saku-red bg-saku-red text-white shadow-lg shadow-saku-red/20'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeTab === 'ssw1' ? 'bg-white/20' : 'bg-slate-100'}`}>
                                    <BriefcaseBusiness size={22} className={activeTab === 'ssw1' ? 'text-white' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="font-bold text-subheading">{sswData.ssw1.label}</div>
                                    <div className={`text-label ${activeTab === 'ssw1' ? 'text-white/70' : 'text-slate-400'}`}>{sswData.ssw1.sublabel}</div>
                                </div>
                                {activeTab === 'ssw1' && <ChevronRight size={18} className="ml-auto text-white/70" />}
                            </button>

                            <button
                                onClick={() => handleTabChange('ssw2')}
                                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                    activeTab === 'ssw2'
                                        ? 'border-saku-red bg-saku-red text-white shadow-lg shadow-saku-red/20'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeTab === 'ssw2' ? 'bg-white/20' : 'bg-slate-100'}`}>
                                    <Wrench size={22} className={activeTab === 'ssw2' ? 'text-white' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="font-bold text-subheading">{sswData.ssw2.label}</div>
                                    <div className={`text-label ${activeTab === 'ssw2' ? 'text-white/70' : 'text-slate-400'}`}>{sswData.ssw2.sublabel}</div>
                                </div>
                                {activeTab === 'ssw2' && <ChevronRight size={18} className="ml-auto text-white/70" />}
                            </button>
                        </div>
                    </div>

                    {/* Step 2: Sidebar + Items */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col lg:flex-row gap-8"
                        >
                            {/* Sidebar */}
                            <div className="lg:w-72 xl:w-80 flex-shrink-0">
                                <p className="text-overline text-slate-400 mb-4">Step 2 — Select Industry</p>
                                <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                                    {activeData.subCategories.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() => setActiveSubTab(sub.id)}
                                            className={`flex-shrink-0 lg:flex-shrink text-left p-4 rounded-2xl border-2 transition-all duration-300 w-52 lg:w-full ${
                                                activeSubTab === sub.id
                                                    ? 'border-saku-dark bg-saku-dark text-white shadow-lg'
                                                    : 'border-slate-100 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-200 hover:shadow-md'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="min-w-0">
                                                    <div className={`font-bold text-label leading-tight ${activeSubTab === sub.id ? 'text-white' : 'text-slate-800'}`}>{sub.title}</div>
                                                    <div className={`text-label mt-0.5 ${activeSubTab === sub.id ? 'text-white/60' : 'text-slate-400'}`}>{sub.items.length} program{sub.items.length !== 1 ? 's' : ''}</div>
                                                </div>
                                                {activeSubTab === sub.id && <ChevronRight size={16} className="flex-shrink-0 text-white/70" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Items */}
                            <div className="flex-1 min-w-0">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSubTab}
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -16 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="mb-8 pb-6 border-b border-slate-100">
                                            <h2 className="font-display text-heading font-bold text-saku-dark mb-1">{currentSubCategory.title}</h2>
                                            <p className="text-body text-slate-500 leading-relaxed">{currentSubCategory.description}</p>
                                        </div>

                                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {currentSubCategory.items.map((item: { id: string; title: string; description: string; image: string }, idx: number) => (
                                                <div key={idx} className="bg-white border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                                                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                                        <h3 className="absolute bottom-4 left-4 right-4 font-display text-label font-bold text-white z-10 leading-tight">{item.title}</h3>
                                                    </div>
                                                    <div className="p-5 flex flex-col flex-grow">
                                                        <p className="text-body text-slate-500 leading-relaxed mb-5 flex-grow">{item.description}</p>
                                                        <div className="flex flex-col gap-2 mt-auto">
                                                            <Link href={`/visa/details/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="w-full bg-slate-50 border border-slate-200 text-saku-dark text-center py-2.5 font-bold tracking-wider text-xs hover:border-saku-red hover:text-saku-red transition-all uppercase rounded-lg">
                                                                VIEW REQUIREMENTS
                                                            </Link>
                                                            <Link href="/contact" className="w-full bg-saku-red text-white text-center py-2.5 font-bold tracking-wider text-xs hover:bg-saku-dark transition-all active:scale-[0.98] uppercase rounded-lg">
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-section-title font-bold mb-4 sm:mb-6 leading-tight">Ready to secure your career in Japan?</h2>
                    <p className="text-body text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
                        Our expert consultants are here to guide you through the SSW program, from exam preparation to job placement.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-saku-red px-6 sm:px-10 py-3 sm:py-4 font-bold tracking-widest text-sm hover:bg-saku-dark hover:text-white transition-all active:scale-[0.98]">
                        BOOK A FREE CONSULTATION
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
