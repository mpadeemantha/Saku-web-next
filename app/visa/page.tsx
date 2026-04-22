"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Briefcase, GraduationCap, CheckCircle2, Globe, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const visaData = {
    student: {
        id: 'student visa',
        title: '',
        description: '',
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
        title: '',
        description: '',
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
                title: 'Engineer, Humanities, International',
                description: 'For IT engineers, researchers, and specialized degree-holding professionals.',
                items: [
                    { title: 'Engineer,Humanities,International Services', description: 'For certified software developers, data scientists, and infrastructure engineers.', image: '/visa/it visa.jpg' },

                ]
            }
        ]
    }
};

export default function VisaPage() {
    const [activeTab, setActiveTab] = useState<'student' | 'work' | null>(null);
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

    const handleTabChange = (tab: 'student' | 'work') => {
        setActiveTab(tab);
        setActiveSubTab(null); // Reset sub-tab when main tab changes
    };

    const activeData = activeTab ? visaData[activeTab] : null;
    const currentSubCategory = (activeTab && activeSubTab) ? visaData[activeTab].subCategories.find(sub => sub.id === activeSubTab) : null;

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
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm sm:text-xs">Visa Services</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                            JAPAN VISA TYPES<br />
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-sans leading-relaxed mb-8">
                            Each visa has specific requirements, and the application process involves securing a job offer, obtaining a Certificate of Eligibility (COE), and applying for the visa at a Japanese embassy or consulate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visa Content Section */}
            <section className="py-16 md:py-24 bg-white min-h-[600px]">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                    {/* Main Category Cards (Neobrutalism Style) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        <button
                            onClick={() => handleTabChange('work')}
                            className={`relative flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 border-2 text-left group overflow-hidden ${
                                activeTab === 'work' 
                                    ? 'border-saku-dark bg-white shadow-[10px_10px_0px_#000000] translate-x-[-4px] translate-y-[-4px]' 
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'
                            }`}
                        >
                            {activeTab === 'work' && (
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <CheckCircle2 className="text-saku-red" size={24} />
                                </motion.div>
                            )}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                                activeTab === 'work' 
                                    ? 'bg-saku-red text-white rotate-3 shadow-lg shadow-saku-red/30' 
                                    : 'bg-black text-white group-hover:bg-saku-red'
                            }`}>
                                <Briefcase size={36} />
                            </div>
                            <div>
                                <h3 className={`font-display text-2xl font-bold mb-1 ${activeTab === 'work' ? 'text-saku-dark' : 'text-black'}`}>
                                    Work Visa
                                </h3>
                                <p className={`text-xs font-bold tracking-widest uppercase ${activeTab === 'work' ? 'text-saku-red' : 'text-slate-400'}`}>
                                    Skilled Employment
                                </p>
                            </div>
                        </button>

                        <button
                            onClick={() => handleTabChange('student')}
                            className={`relative flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 border-2 text-left group overflow-hidden ${
                                activeTab === 'student' 
                                    ? 'border-saku-dark bg-white shadow-[10px_10px_0px_#000000] translate-x-[-4px] translate-y-[-4px]' 
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'
                            }`}
                        >
                            {activeTab === 'student' && (
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <CheckCircle2 className="text-saku-red" size={24} />
                                </motion.div>
                            )}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                                activeTab === 'student' 
                                    ? 'bg-saku-red text-white rotate-3 shadow-lg shadow-saku-red/30' 
                                    : 'bg-black text-white group-hover:bg-saku-red'
                            }`}>
                                <GraduationCap size={36} />
                            </div>
                            <div>
                                <h3 className={`font-display text-2xl font-bold mb-1 ${activeTab === 'student' ? 'text-saku-dark' : 'text-black'}`}>
                                    Student Visa
                                </h3>
                                <p className={`text-xs font-bold tracking-widest uppercase ${activeTab === 'student' ? 'text-saku-red' : 'text-slate-400'}`}>
                                    Higher Education
                                </p>
                            </div>
                        </button>
                    </div>

                    {/* Sub Category Pills */}
                    {activeTab && activeData && (
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {activeData.subCategories.map((sub) => (
                                <button
                                    key={sub.id}
                                    onClick={() => setActiveSubTab(sub.id)}
                                    className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeSubTab === sub.id
                                        ? 'bg-saku-dark text-white shadow-lg'
                                        : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-saku-dark'
                                        }`}
                                >
                                    {sub.title}
                                </button>
                            ))}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {currentSubCategory ? (
                            <motion.div
                                key={`${activeTab}-${activeSubTab}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Current Sub Category Info */}
                                <div className="mb-12 text-center max-w-3xl mx-auto">
                                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-saku-dark mb-4">{currentSubCategory.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{currentSubCategory.description}</p>
                                </div>

                                {/* Items Grid */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {currentSubCategory.items.map((item: { title: string; description: string; image: string }, idx: number) => (
                                        <div key={idx} className="bg-white border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl transition-all h-full">
                                            <div className="relative h-64 w-full overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                                                <h3 className="absolute bottom-6 left-6 right-6 font-display text-xl font-bold text-white z-10 leading-tight">
                                                    {item.title}
                                                </h3>
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
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 bg-gray-50 border-2 border-dashed border-gray-200"
                            >
                                <p className="text-gray-400 font-medium text-lg">
                                    {!activeTab ? "Please select a visa category above to get started." : "Great! Now select a specific program to see details."}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>


            {/* Quick CTA */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Need expert guidance for your visa application?</h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
                        Navigating Japanese immigration can be complicated. Let our experienced teams ensure your application process is smooth and successful.
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
