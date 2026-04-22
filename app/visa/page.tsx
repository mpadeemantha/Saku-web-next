"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const visaData = {
    student: {
        id: 'student visa',
        subCategories: [
            {
                id: 'scholarship',
                title: 'Scholarship Programs',
                description: 'Fully or partially funded opportunities for outstanding students.',
                items: [
                    { title: 'Scholarship', description: 'Full tuition coverage plus living allowance while training as a certified caregiver in Japan.', image: '/visa/scholarship.webp' },
                ]
            },
        ]
    },
    work: {
        id: 'work visa',
        subCategories: [
            {
                id: 'ssw',
                title: 'SSW Visa',
                description: 'Specified Skilled Worker (SSW). For skilled workers passing technical and language exams in specific industries.',
                items: [
                    { title: 'Caregiver', description: 'Work in specialized nursing facilities, providing essential care and support for the elderly in Japan.', image: '/visa/caregiver.webp' },
                    { title: 'Food Service', description: 'Opportunities in the dynamic Japanese restaurant, catering, and food preparation sectors.', image: '/visa/food service.webp' },
                    { title: 'Agriculture', description: 'Engage in general crop farming and livestock agriculture across various regions of Japan.', image: '/visa/agriculture.webp' },
                    { title: 'Building Cleaning', description: 'Professional interior building cleaning management for commercial and hotel properties.', image: '/visa/cleaning.webp' },
                    { title: 'Food & Beverage Manufacturing', description: 'Work in food production plants, processing facilities, and quality control lines.', image: '/visa/food and bev.webp' },
                    { title: 'Airport Ground Handling', description: 'Support airport operations through baggage handling, cargo management, and ground services.', image: '/visa/airport g.webp' },
                    { title: 'Accommodation', description: 'Provide hospitality and management services in Japanese hotels, traditional inns, and resorts.', image: '/visa/acommodation.webp' },
                    { title: 'Transportation', description: 'Professional driving and logistics operations for moving goods and people across Japan.', image: '/visa/transport.webp' },
                    { title: 'Construction', description: 'Skilled roles in civil engineering, architecture, and specialized construction machinery operation.', image: '/visa/construct.webp' },
                    { title: 'Automobile Mechanic', description: 'Specialized maintenance and repair services for vehicles in certified Japanese workshops.', image: '/visa/automobile m.webp' }
                ]
            },
            {
                id: 'titp',
                title: 'Trainees Visa',
                description: 'Technical Intern Training (TITP). Learn Japanese advanced skills through practical employment.',
                items: [
                    { title: 'Construction Intern', description: 'Learn advanced Japanese civil engineering and building techniques.', image: '/visa/construct tr.jpg' }
                ]
            },
            {
                id: 'highlySkilled',
                title: 'Engineer / Humanities',
                description: 'For IT engineers, researchers, and specialized degree-holding professionals.',
                items: [
                    { title: 'Engineer, Humanities, International Services', description: 'For certified software developers, data scientists, and infrastructure engineers.', image: '/visa/it visa.jpg' },
                ]
            }
        ]
    }
};

export default function VisaPage() {
    const [activeTab, setActiveTab] = useState<'student' | 'work'>('work');
    const [activeSubTab, setActiveSubTab] = useState<string>('ssw');

    const handleTabChange = (tab: 'student' | 'work') => {
        setActiveTab(tab);
        setActiveSubTab(visaData[tab].subCategories[0].id);
    };

    const activeData = visaData[activeTab];
    const currentSubCategory = activeData.subCategories.find(sub => sub.id === activeSubTab) || activeData.subCategories[0];

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
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-overline">Visa Services</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-4 sm:mb-6 leading-tight">
                            JAPAN VISA TYPES
                        </h1>
                        <p className="text-body text-gray-300 font-sans leading-relaxed mb-8">
                            Each visa has specific requirements, and the application process involves securing a job offer, obtaining a Certificate of Eligibility (COE), and applying for the visa at a Japanese embassy or consulate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visa Content Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                    {/* Step 1: Main Visa Type Tabs */}
                    <div className="mb-12">
                        <p className="text-center text-overline text-slate-400 mb-6">Step 1 — Choose Your Visa Type</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <button
                                onClick={() => handleTabChange('work')}
                                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                    activeTab === 'work'
                                        ? 'border-saku-red bg-saku-red text-white shadow-lg shadow-saku-red/20'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeTab === 'work' ? 'bg-white/20' : 'bg-slate-100'}`}>
                                    <Briefcase size={22} className={activeTab === 'work' ? 'text-white' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="font-bold text-subheading">Work Visa</div>
                                    <div className={`text-label ${activeTab === 'work' ? 'text-white/70' : 'text-slate-400'}`}>SSW · Trainees · Engineer</div>
                                </div>
                                {activeTab === 'work' && <ChevronRight size={18} className="ml-auto text-white/70" />}
                            </button>

                            <button
                                onClick={() => handleTabChange('student')}
                                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                    activeTab === 'student'
                                        ? 'border-saku-red bg-saku-red text-white shadow-lg shadow-saku-red/20'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeTab === 'student' ? 'bg-white/20' : 'bg-slate-100'}`}>
                                    <GraduationCap size={22} className={activeTab === 'student' ? 'text-white' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="font-bold text-subheading">Student Visa</div>
                                    <div className={`text-label ${activeTab === 'student' ? 'text-white/70' : 'text-slate-400'}`}>Scholarship · Academic</div>
                                </div>
                                {activeTab === 'student' && <ChevronRight size={18} className="ml-auto text-white/70" />}
                            </button>
                        </div>
                    </div>

                    {/* Step 2: Sub-category sidebar + Items grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col lg:flex-row gap-8"
                        >
                            {/* LEFT: Sub-category Selector */}
                            <div className="lg:w-72 xl:w-80 flex-shrink-0">
                                <p className="text-overline text-slate-400 mb-4">Step 2 — Select Program</p>
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

                            {/* RIGHT: Items Grid */}
                            <div className="flex-1 min-w-0">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSubTab}
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -16 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {/* Sub-category Header */}
                                        <div className="mb-8 pb-6 border-b border-slate-100">
                                            <div className="mb-2">
                                                <h2 className="font-display text-heading font-bold text-saku-dark">{currentSubCategory.title}</h2>
                                            </div>
                                            <p className="text-body text-slate-500 leading-relaxed">{currentSubCategory.description}</p>
                                        </div>

                                        {/* Items Grid */}
                                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {currentSubCategory.items.map((item: { title: string; description: string; image: string }, idx: number) => (
                                                <div key={idx} className="bg-white border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                                                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
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

            {/* Quick CTA */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-section-title font-bold mb-4 sm:mb-6 leading-tight">Need expert guidance for your visa application?</h2>
                    <p className="text-body text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
                        Navigating Japanese immigration can be complicated. Let our experienced teams ensure your application process is smooth and successful.
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
