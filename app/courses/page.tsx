"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Mic, Globe, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const courseData = {
    jlpt: {
        id: 'jlpt',
        title: 'JLPT Preparation (N5/N4)',
        icon: BookOpen,
        description: 'Intensive preparation courses designed to help you successfully pass the Japanese Language Proficiency Test (JLPT) N5 and N4. These are foundational levels required for student and work visas.',
        items: [
            { id: 'n5', title: 'JLPT N5 Course', description: 'The absolute foundational level testing your grasp of basic vocabulary, hiragana, katakana, simple kanji, and basic grammar structures.', image: '/class.webp' },
            { id: 'n4', title: 'JLPT N4 Course', description: 'An intermediate-beginner level focusing on understanding basic Japanese used in daily life. This level is a core requirement for many work visa categories.', image: '/class.webp' }
        ]
    },
    spoken: {
        id: 'spoken',
        title: 'Spoken Japanese',
        icon: Mic,
        description: 'Focus purely on conversational Japanese. Perfect for travelers, business professionals, or anyone who wants to confidently speak and understand everyday Japanese.',
        items: [
            { id: 'spoken-course', title: 'Japanese Spoken Course', description: 'Our flagship conversational program designed to take you from basic greetings to fluent daily interactions including active listening and sentence structures.', image: '/consult.webp' },

        ]
    }
};

export default function CoursesPage() {
    const [activeTab, setActiveTab] = useState<'jlpt' | 'spoken'>('jlpt');
    const activeData = courseData[activeTab];

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
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm sm:text-xs">Language School</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                            Master Japanese.<br />
                            <span className="text-gray-400">Unlock your future.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-sans leading-relaxed mb-8">
                            We offer specialized language training tailored for academic exams and everyday conversation in Japan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Course Content Section */}
            <section className="py-16 md:py-24 bg-white min-h-[600px]">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                    {/* Main Category Cards (Neobrutalism Style) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        <button
                            onClick={() => setActiveTab('jlpt')}
                            className={`relative flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 border-2 text-left group overflow-hidden ${activeTab === 'jlpt'
                                    ? 'border-saku-dark bg-white shadow-[10px_10px_0px_#000000] translate-x-[-4px] translate-y-[-4px]'
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'
                                }`}
                        >
                            {activeTab === 'jlpt' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <CheckCircle2 className="text-saku-red" size={24} />
                                </motion.div>
                            )}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 ${activeTab === 'jlpt'
                                    ? 'bg-saku-red text-white rotate-3 shadow-lg shadow-saku-red/30'
                                    : 'bg-black text-white group-hover:bg-saku-red'
                                }`}>
                                <BookOpen size={36} />
                            </div>
                            <div>
                                <h3 className={`font-display text-2xl font-bold mb-1 ${activeTab === 'jlpt' ? 'text-saku-dark' : 'text-black'}`}>
                                    JLPT/NAT-TEST
                                </h3>
                                <p className={`text-xs font-bold tracking-widest uppercase ${activeTab === 'jlpt' ? 'text-saku-red' : 'text-slate-400'}`}>
                                    Exam Success
                                </p>
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveTab('spoken')}
                            className={`relative flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 border-2 text-left group overflow-hidden ${activeTab === 'spoken'
                                    ? 'border-saku-dark bg-white shadow-[10px_10px_0px_#000000] translate-x-[-4px] translate-y-[-4px]'
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'
                                }`}
                        >
                            {activeTab === 'spoken' && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-6 right-6"
                                >
                                    <CheckCircle2 className="text-saku-red" size={24} />
                                </motion.div>
                            )}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500 ${activeTab === 'spoken'
                                    ? 'bg-saku-red text-white rotate-3 shadow-lg shadow-saku-red/30'
                                    : 'bg-black text-white group-hover:bg-saku-red'
                                }`}>
                                <Mic size={36} />
                            </div>
                            <div>
                                <h3 className={`font-display text-2xl font-bold mb-1 ${activeTab === 'spoken' ? 'text-saku-dark' : 'text-black'}`}>
                                    Spoken Japanese
                                </h3>
                                <p className={`text-xs font-bold tracking-widest uppercase ${activeTab === 'spoken' ? 'text-saku-red' : 'text-slate-400'}`}>
                                    Native Fluency
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
                                    <span className="text-saku-red font-bold tracking-[0.2em] uppercase text-xs">Professional language school</span>
                                </div>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold text-saku-dark mb-4 lowercase first-letter:uppercase">{activeData.title}</h2>
                                <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto leading-relaxed">
                                    {activeData.description}
                                </p>
                            </div>

                            {/* Sub Categories & Items Linear List */}
                            <div className="flex flex-col gap-16 sm:gap-24">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
                                    {activeData.items.map((item: { id: string; title: string; description: string; image: string }, idx: number) => (
                                        <div key={idx} className="bg-white border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl transition-all h-full max-w-md mx-auto w-full">
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
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Not sure which course is right for you?</h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
                        Our student counselors are ready to help you plan your educational journey in Japan based on your qualifications and goals.
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
