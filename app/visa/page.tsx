"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { getPosts, getCategories, WordPressPost, WordPressCategory } from "@/lib/wordpress";

export default function VisaPage() {
    const [activeTab, setActiveTab] = useState<'student' | 'work'>('work');
    const [activeSubTab, setActiveSubTab] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [visaData, setVisaData] = useState<any>(null);

    React.useEffect(() => {
        const loadVisaData = async () => {
            setLoading(true);
            try {
                const categories = await getCategories();
                
                // Find main categories (Work: 8, Student: 9)
                const workVisaCat = categories.find(c => 
                    c.id === 8 || 
                    c.slug.toLowerCase() === 'work-visa' || 
                    c.name.toLowerCase().includes('work visa')
                );
                const studentVisaCat = categories.find(c => 
                    c.id === 9 || 
                    c.slug.toLowerCase() === 'student-visa' || 
                    c.name.toLowerCase().includes('student visa')
                );

                const result: any = {
                    work: { id: 'work', subCategories: [] },
                    student: { id: 'student', subCategories: [] }
                };

                // Helper to process subcategories
                const processMainCat = async (mainCat: WordPressCategory, key: 'work' | 'student') => {
                    if (!mainCat) return;
                    // Find children of the main category
                    const subCats = categories.filter(c => c.parent === mainCat.id);
                    
                    for (const subCat of subCats) {
                        const posts = await getPosts(50, subCat.id);
                        if (posts.length > 0) {
                            result[key].subCategories.push({
                                id: subCat.slug,
                                title: subCat.name,
                                description: subCat.slug.includes('ssw') 
                                    ? "Specified Skilled Worker (SSW). For skilled workers passing technical and language exams."
                                    : subCat.slug.includes('titp')
                                    ? "Technical Intern Training (TITP). Learn Japanese skills through practical employment."
                                    : subCat.slug.includes('scholarship')
                                    ? "Fully or partially funded opportunities for outstanding students."
                                    : `Opportunities and requirements for ${subCat.name} in Japan.`,
                                items: posts.map(post => ({
                                    title: post.title.rendered,
                                    slug: post.slug,
                                    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
                                    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/student/ff-saku.jpg"
                                }))
                            });
                        }
                    }
                };

                const promises = [];
                if (workVisaCat) promises.push(processMainCat(workVisaCat, 'work'));
                if (studentVisaCat) promises.push(processMainCat(studentVisaCat, 'student'));

                await Promise.all(promises);

                // Sort subcategories to keep SSW first if it exists
                result.work.subCategories.sort((a: any, b: any) => 
                    a.id.includes('ssw') ? -1 : b.id.includes('ssw') ? 1 : 0
                );

                setVisaData(result);
                
                // Set initial active subtab based on activeTab
                const initialKey = activeTab;
                if (result[initialKey].subCategories.length > 0) {
                    setActiveSubTab(result[initialKey].subCategories[0].id);
                }
            } catch (error) {
                console.error("Error loading visa data from WordPress:", error);
            } finally {
                setLoading(false);
            }
        };

        loadVisaData();
    }, []);

    const handleTabChange = (tab: 'student' | 'work') => {
        if (!visaData || !visaData[tab]) return;
        setLoading(true);
        setActiveTab(tab);
        if (visaData[tab].subCategories.length > 0) {
            setActiveSubTab(visaData[tab].subCategories[0].id);
        }
        setTimeout(() => setLoading(false), 600);
    };

    const handleSubTabChange = (id: string) => {
        setLoading(true);
        setActiveSubTab(id);
        setTimeout(() => setLoading(false), 400);
    };

    const activeData = visaData ? visaData[activeTab] : null;
    const currentSubCategory = activeData?.subCategories.find((sub: any) => sub.id === activeSubTab) || activeData?.subCategories[0];

    const VisaCardSkeleton = () => (
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm animate-pulse">
            <div className="h-48 bg-slate-100 w-full" />
            <div className="p-5 space-y-4">
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="space-y-2">
                    <div className="h-3 bg-slate-50 rounded w-full" />
                    <div className="h-3 bg-slate-50 rounded w-full" />
                    <div className="h-3 bg-slate-50 rounded w-2/3" />
                </div>
                <div className="pt-4 flex flex-col gap-2">
                    <div className="h-10 bg-slate-50 rounded-lg w-full" />
                    <div className="h-10 bg-slate-50 rounded-lg w-full" />
                </div>
            </div>
        </div>
    );

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
            <section className="py-16 md:py-20 bg-white min-h-[800px]">
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
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* LEFT: Sub-category Selector */}
                        <div className="lg:w-72 xl:w-80 flex-shrink-0">
                            <p className="text-overline text-slate-400 mb-4">Step 2 — Select Program</p>
                            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                                {activeData?.subCategories.map((sub: any) => (
                                    <button
                                        key={sub.id}
                                        onClick={() => handleSubTabChange(sub.id)}
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
                                {loading || !currentSubCategory ? (
                                    <motion.div
                                        key="skeleton"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map((i) => <VisaCardSkeleton key={i} />)}
                                    </motion.div>
                                ) : (
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
                                                        <h3 className="absolute bottom-4 left-4 right-4 font-display text-label font-bold text-white z-10 leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                    </div>
                                                    <div className="p-5 flex flex-col flex-grow">
                                                        <p className="text-body text-slate-500 leading-relaxed mb-5 flex-grow line-clamp-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                        <div className="flex flex-col gap-2 mt-auto">
                                                            <Link href={`/news/${item.slug}`} className="w-full bg-slate-50 border border-slate-200 text-saku-dark text-center py-2.5 font-bold tracking-wider text-xs hover:border-saku-red hover:text-saku-red transition-all uppercase rounded-lg">
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
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
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
