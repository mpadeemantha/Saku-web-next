"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Mic, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getPosts, getCategories, WordPressPost, WordPressCategory } from "@/lib/wordpress";

export default function CoursesPage() {
    const [activeTab, setActiveTab] = useState<'jlpt' | 'spoken'>('jlpt');
    const [activeSubTab, setActiveSubTab] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState<any>(null);

    useEffect(() => {
        const loadCourseData = async () => {
            setLoading(true);
            try {
                const categories = await getCategories();
                
                // Find main categories (JLPT/NAT: 17, Spoken: 18)
                const jlptCat = categories.find(c => c.id === 17 || c.slug.toLowerCase() === 'jlpt-nat-test');
                const spokenCat = categories.find(c => c.id === 18 || c.slug.toLowerCase() === 'spoken-japanese');

                const result: any = {
                    jlpt: { id: 'jlpt', label: 'JLPT / NAT-TEST', sublabel: 'Exam Preparation · N5 & N4', subCategories: [] },
                    spoken: { id: 'spoken', label: 'Spoken Japanese', sublabel: 'Conversational · Native Fluency', subCategories: [] }
                };

                // Helper to process subcategories
                const processMainCat = async (mainCat: WordPressCategory, key: 'jlpt' | 'spoken') => {
                    if (!mainCat) return;
                    // Find children of the main category
                    const subCats = categories.filter(c => c.parent === mainCat.id);
                    
                    // If no children, use the main category itself as a single subcategory
                    const categoriesToProcess = subCats.length > 0 ? subCats : [mainCat];

                    for (const subCat of categoriesToProcess) {
                        const posts = await getPosts(50, subCat.id);
                        if (posts.length > 0) {
                            result[key].subCategories.push({
                                id: subCat.slug,
                                title: subCat.name,
                                description: subCat.description || `Specialized Japanese language training for ${subCat.name}.`,
                                items: posts.map(post => {
                                    // Smart Image Fallback
                                    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                                    let imageUrl = (featuredMedia as any)?.source_url;

                                    if (!imageUrl || (featuredMedia as any)?.code === 'rest_forbidden') {
                                        const content = post.content.rendered;
                                        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                                        if (imgMatch && imgMatch[1]) {
                                            imageUrl = imgMatch[1];
                                        }
                                    }

                                    if (!imageUrl) {
                                        imageUrl = "/student/ff-saku.jpg";
                                    }

                                    return {
                                        title: post.title.rendered,
                                        slug: post.slug,
                                        description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
                                        image: imageUrl
                                    };
                                })
                            });
                        }
                    }
                };

                const promises = [];
                if (jlptCat) promises.push(processMainCat(jlptCat, 'jlpt'));
                if (spokenCat) promises.push(processMainCat(spokenCat, 'spoken'));

                await Promise.all(promises);

                setCourseData(result);
                
                // Set initial active subtab
                const initialKey = activeTab;
                if (result[initialKey].subCategories.length > 0) {
                    setActiveSubTab(result[initialKey].subCategories[0].id);
                }
            } catch (error) {
                console.error("Error loading course data from WordPress:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCourseData();
    }, []);

    const handleTabChange = (tab: 'jlpt' | 'spoken') => {
        setActiveTab(tab);
        if (courseData && courseData[tab].subCategories.length > 0) {
            setActiveSubTab(courseData[tab].subCategories[0].id);
        }
    };

    const activeData = courseData ? courseData[activeTab] : null;
    const currentSubCategory = activeData?.subCategories.find((sub: any) => sub.id === activeSubTab) || activeData?.subCategories[0];

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
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-overline">Language School</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-4 sm:mb-6 leading-tight">
                            Master Japanese.<br />
                            <span className="text-gray-400">Unlock your future.</span>
                        </h1>
                        <p className="text-body text-gray-300 font-sans leading-relaxed mb-8">
                            We offer specialized language training tailored for academic exams and everyday conversation in Japan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-20 bg-white min-h-[800px]">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                    {/* Step 1 */}
                    <div className="mb-12">
                        <p className="text-center text-overline text-slate-400 mb-6">Step 1 — Choose Your Course Type</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <button
                                onClick={() => handleTabChange('jlpt')}
                                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                    activeTab === 'jlpt'
                                        ? 'border-saku-red bg-saku-red text-white shadow-lg shadow-saku-red/20'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeTab === 'jlpt' ? 'bg-white/20' : 'bg-slate-100'}`}>
                                    <BookOpen size={22} className={activeTab === 'jlpt' ? 'text-white' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="font-bold text-subheading">JLPT / NAT-TEST</div>
                                    <div className={`text-label ${activeTab === 'jlpt' ? 'text-white/70' : 'text-slate-400'}`}>Exam Preparation · N5 & N4</div>
                                </div>
                                {activeTab === 'jlpt' && <ChevronRight size={18} className="ml-auto text-white/70" />}
                            </button>

                            <button
                                onClick={() => handleTabChange('spoken')}
                                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                    activeTab === 'spoken'
                                        ? 'border-saku-red bg-saku-red text-white shadow-lg shadow-saku-red/20'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeTab === 'spoken' ? 'bg-white/20' : 'bg-slate-100'}`}>
                                    <Mic size={22} className={activeTab === 'spoken' ? 'text-white' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="font-bold text-subheading">Spoken Japanese</div>
                                    <div className={`text-label ${activeTab === 'spoken' ? 'text-white/70' : 'text-slate-400'}`}>Conversational · Native Fluency</div>
                                </div>
                                {activeTab === 'spoken' && <ChevronRight size={18} className="ml-auto text-white/70" />}
                            </button>
                        </div>
                    </div>

                    {/* Step 2: Sidebar + Items */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="lg:w-72 xl:w-80 flex-shrink-0">
                            <p className="text-overline text-slate-400 mb-4">Step 2 — Select Course</p>
                            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                                {loading ? (
                                    [1, 2, 3].map((i) => (
                                        <div key={i} className="flex-shrink-0 lg:flex-shrink p-4 rounded-2xl border-2 border-slate-50 bg-slate-50 animate-pulse w-52 lg:w-full h-[76px]">
                                            <div className="h-4 bg-slate-200 rounded w-2/3 mb-2" />
                                            <div className="h-3 bg-slate-200 rounded w-1/3" />
                                        </div>
                                    ))
                                ) : (
                                    activeData?.subCategories.map((sub: any) => (
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
                                                    <div className={`text-label mt-0.5 ${activeSubTab === sub.id ? 'text-white/60' : 'text-slate-400'}`}>{sub.items.length} course{sub.items.length !== 1 ? 's' : ''}</div>
                                                </div>
                                                {activeSubTab === sub.id && <ChevronRight size={16} className="flex-shrink-0 text-white/70" />}
                                            </div>
                                        </button>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Items */}
                        <div className="flex-1 min-w-0">
                            <AnimatePresence mode="wait">
                                {loading ? (
                                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm animate-pulse h-96">
                                                <div className="h-48 bg-slate-100 w-full" />
                                                <div className="p-5 space-y-4">
                                                    <div className="h-4 bg-slate-100 rounded w-3/4" />
                                                    <div className="h-3 bg-slate-100 rounded w-full" />
                                                    <div className="h-3 bg-slate-100 rounded w-5/6" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        key={`${activeTab}-${activeSubTab}`}
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -16 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="mb-8 pb-6 border-b border-slate-100">
                                            <h2 className="font-display text-heading font-bold text-saku-dark mb-1">{currentSubCategory?.title}</h2>
                                            <p className="text-body text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: currentSubCategory?.description || "" }} />
                                        </div>

                                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {currentSubCategory?.items.map((item: any, idx: number) => (
                                                <div key={idx} className="bg-white border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                                                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                                        <h3 className="absolute bottom-4 left-4 right-4 font-display text-label font-bold text-white z-10 leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                    </div>
                                                    <div className="p-5 flex flex-col flex-grow">
                                                        <p className="text-body text-slate-500 leading-relaxed mb-5 flex-grow line-clamp-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                        <div className="flex flex-col gap-2 mt-auto">
                                                            <Link href={`/courses/${item.slug}`} className="w-full bg-slate-50 border border-slate-200 text-saku-dark text-center py-2.5 font-bold tracking-wider text-xs hover:border-saku-red hover:text-saku-red transition-all uppercase rounded-lg">
                                                                VIEW CURRICULUM
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

            {/* CTA */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-section-title font-bold mb-4 sm:mb-6 leading-tight">Not sure which course is right for you?</h2>
                    <p className="text-body text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
                        Our student counselors are ready to help you plan your educational journey in Japan based on your qualifications and goals.
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
