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
            { id: 'nursing', title: 'Nursing Care', description: 'Work in specialized nursing facilities, providing essential care and support for the elderly in Japan.', image: '/class.webp' },
            { id: 'food', title: 'Food Service Industry', description: 'Opportunities in the dynamic Japanese restaurant, catering, and food preparation sectors.', image: '/consult.webp' },
            { id: 'agriculture', title: 'Agriculture', description: 'Engage in general crop farming and livestock agriculture across various regions of Japan.', image: '/visa.png' },
            { id: 'building', title: 'Building Cleaning', description: 'Professional interior building cleaning management for commercial and hotel properties.', image: '/consult.webp' },
            { id: 'manufacturing', title: 'Manufacturing', description: 'Work within machine parts tooling, industrial machinery, or electrical/electronic information industries.', image: '/class.webp' }
        ]
    },
    ssw2: {
        id: 'ssw2',
        title: 'Special Skilled Worker (SSW II)',
        icon: Wrench,
        description: 'For individuals with proficient skills belonging to specific industry fields. Offers the possibility of bringing family members and unlimited visa renewals leading to permanent residency.',
        items: [
            { id: 'construction', title: 'Construction', description: 'Advanced roles in civil engineering, architecture, and specialized construction machinery operation.', image: '/class.webp' },
            { id: 'shipbuilding', title: 'Shipbuilding & Marine', description: 'Highly skilled welding, painting, and machining within the Japanese shipbuilding industry.', image: '/consult.webp' },
            { id: 'aviation', title: 'Aviation', description: 'Airport ground handling and aircraft maintenance support operations.', image: '/visa.png' }
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
                    
                    {/* Tab Switcher */}
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex bg-gray-50 border border-gray-200 p-1.5 w-full sm:w-auto max-w-md rounded-none shadow-sm">
                            <button 
                                onClick={() => setActiveTab('ssw1')}
                                className={`flex-1 sm:flex-none sm:w-48 px-4 py-4 font-bold tracking-widest text-sm sm:text-xs uppercase transition-all duration-300 flex justify-center items-center gap-2 ${activeTab === 'ssw1' ? 'bg-saku-dark text-white shadow-md' : 'text-gray-500 hover:text-saku-dark hover:bg-white'}`}
                            >
                                <BriefcaseBusiness size={16} /> <span className="sm:inline">SSW I</span>
                            </button>
                            <button 
                                onClick={() => setActiveTab('ssw2')}
                                className={`flex-1 sm:flex-none sm:w-48 px-4 py-4 font-bold tracking-widest text-sm sm:text-xs uppercase transition-all duration-300 flex justify-center items-center gap-2 ${activeTab === 'ssw2' ? 'bg-saku-dark text-white shadow-md' : 'text-gray-500 hover:text-saku-dark hover:bg-white'}`}
                            >
                                <Wrench size={16} /> <span className="sm:inline">SSW II</span>
                            </button>
                        </div>
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
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-saku-dark mb-4">{activeData.title}</h2>
                                <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto leading-relaxed">
                                    {activeData.description}
                                </p>
                            </div>

                            {/* Sub Categories & Items Linear List */}
                            <div className="flex flex-col gap-16 sm:gap-24">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {activeData.items.map((item: any, idx: number) => (
                                        <div key={idx} className="bg-white border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl transition-all h-full">
                                            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    fill 
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                                <h3 className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 font-display text-lg sm:text-xl leading-tight font-bold text-white z-10">{item.title}</h3>
                                            </div>
                                            <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white">
                                                <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow text-base md:text-lg">
                                                    {item.description}
                                                </p>
                                                <Link href="/contact" className="w-full bg-gray-50 border border-gray-200 text-saku-dark text-center py-3 sm:py-4 font-bold tracking-widest text-sm sm:text-xs hover:bg-saku-red hover:text-white hover:border-saku-red transition-all mt-auto active:scale-[0.98]">
                                                    ENROLL NOW
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
