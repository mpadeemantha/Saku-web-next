"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, FileText, User, BookOpen, Heart, Briefcase, Navigation, Languages, Info, Globe, ArrowRight, Clock, TrendingUp, LayersIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const templateData = {
    title: "SSW Agriculture Visa",
    category: "Work Visa · Specified Skilled Worker",
    subtitle: "The SSW Agriculture Visa allows foreign nationals to work in Japan's agriculture sector to address labor shortages.",
    image: "/visa/agriculture.webp",
    requirements: [
        {
            number: "01",
            title: "Age Requirement",
            content: "Applicants must generally be between 18 and 40 years old to qualify for the visa.",
            icon: User
        },
        {
            number: "02",
            title: "Skills and Qualification",
            content: "**Agriculture Skills:**\nPass the Agriculture Skills Evaluation Test specific to the field of agriculture. This test assesses knowledge and practical skills in areas such as crop cultivation, livestock management, and farming techniques.\n\n**Japanese Language Proficiency:**\nPass the Japanese Language Proficiency Test (JLPT) N4 or higher, or pass the Japan Foundation Test for Basic Japanese (JFT-Basic). Basic communication skills are required to interact with colleagues and understand instructions.",
            icon: BookOpen
        },
        {
            number: "03",
            title: "Health and Fitness",
            content: "Applicants must be in good physical and mental health to handle the physically demanding tasks involved in agriculture work.",
            icon: Heart
        },
        {
            number: "04",
            title: "Specific Agriculture Work Fields",
            content: "The SSW Agriculture Visa covers a wide range of work fields, including:\n\n• **Crop Farming:** Growing rice, vegetables, fruits, flowers, and tea. Greenhouse farming and irrigation system management.\n• **Livestock Farming:** Caring for and feeding livestock such as cattle, pigs, and poultry. Managing livestock shelters, milking cows, and ensuring animal health.\n• **Farm Equipment Operation:** Operating and maintaining agricultural machinery, including tractors and harvesters.",
            icon: Briefcase
        },
        {
            number: "05",
            title: "Skill Evaluation Test Details",
            content: "The Agriculture Skills Evaluation Test is divided into two categories:\n\n• **Crop Cultivation Skills Test:** Focuses on knowledge of planting, harvesting, pest control, and soil management.\n• **Livestock Farming Skills Test:** Covers animal care, feeding, breeding, and disease prevention.\n\nTests are conducted in Japanese, so a basic understanding of the language is essential.",
            icon: FileText
        },
        {
            number: "06",
            title: "Training and Experience",
            content: "While prior experience in agriculture is not mandatory, it is highly advantageous. Applicants who have completed Japan's Technical Intern Training Program (TITP) in agriculture may have their skills recognized, simplifying the visa process.",
            icon: Navigation
        },
        {
            number: "07",
            title: "Language Support & Work Conditions",
            content: "Some skill evaluation tests may provide translation or interpretation support for applicants who are not fluent in Japanese. However, learning basic Japanese is strongly recommended.\n\n**Work Conditions and Rights:**\n• **Fair Treatment:** Workers are entitled to the same wages, benefits, and working conditions as Japanese workers in the same roles.\n• **Legal Protections:** Employers must adhere to Japanese labor laws, including limits on working hours, overtime pay, and workplace safety standards.\n• **Employment Contract:** Workers must sign a formal contract detailing wages, working hours, job duties, and other conditions.",
            icon: Languages
        },
        {
            number: "08",
            title: "Additional Employer Responsibilities",
            content: "Employers hiring workers under the SSW Agriculture Visa are required to:\n• Provide proper training to familiarize workers with Japanese agricultural practices.\n• Assist with accommodation and transportation arrangements.\n• Offer ongoing support for workers' well-being, including help with daily life in Japan.",
            icon: Info
        },
        {
            number: "09",
            title: "Transition to Long-Term Residency",
            content: "Workers who complete their SSW Type 1 visa may become eligible for SSW Type 2, provided their skills and experience meet advanced criteria.\n\nSSW Type 2 allows for longer stays and the possibility of family accompaniment, though it is not yet widely applicable in the agriculture sector.",
            icon: Globe
        }
    ],
    processSteps: [
        "Pass the required skill and language proficiency tests.",
        "Secure a job offer from a registered employer in Japan.",
        "Submit the necessary documents to apply for a Certificate of Eligibility (CoE) from the Immigration Services Agency of Japan.",
        "Apply for the visa at the Japanese embassy or consulate in your home country."
    ],
    benefits: [
        { title: "Career Growth", description: "Opportunity to gain advanced skills and experience in agriculture." },
        { title: "Cultural Exchange", description: "Workers can immerse themselves in Japanese culture and rural communities." },
        { title: "High Demand", description: "The agriculture sector in Japan faces significant labor shortages, increasing job security." }
    ],
    stats: {
        demand: "Very High",
        difficulty: "Medium",
        processing: "3–6 Months"
    },
    closingText: "By fulfilling these requirements and understanding the scope of work, applicants can successfully secure the SSW Agriculture Visa and contribute to Japan's vital agricultural industry."
};

// Renders plain text with **bold** and • bullet support
const FormattedText = ({ text }: { text: string }) => (
    <div className="space-y-3 text-slate-600 leading-relaxed text-base">
        {text.split('\n\n').map((paragraph, i) => (
            <div key={i} className="space-y-1.5">
                {paragraph.split('\n').map((line, j) => {
                    if (line.trim().startsWith('•')) {
                        return (
                            <div key={j} className="flex gap-3 items-start pl-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-saku-red mt-2 flex-shrink-0"></span>
                                <span dangerouslySetInnerHTML={{ __html: line.substring(1).trim().replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>') }} />
                            </div>
                        );
                    }
                    return (
                        <p key={j} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-semibold">$1</strong>') }} />
                    );
                })}
            </div>
        ))}
    </div>
);

export default function VisaDetailsTemplatePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const data = templateData;

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-saku-red selection:text-white">
            <Navbar />

            {/* Top progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full bg-saku-red origin-left"
                />
            </div>

            <div className="pt-24">

                {/* Hero Banner */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-4xl">
                        <Link href="/visa" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase mb-4 transition-colors group w-fit">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Visa Guide
                        </Link>
                        <span className="text-saku-red text-xs font-bold tracking-widest uppercase mb-2">{data.category}</span>
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">{data.title}</h1>
                    </div>
                </div>

                {/* Page Body */}
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-12">

                    {/* Intro Card */}
                    <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-100 shadow-sm">
                        <p className="text-slate-600 text-lg leading-relaxed">{data.subtitle}</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* ── MAIN CONTENT ── */}
                        <article className="flex-1 min-w-0 space-y-4">

                            {/* Requirements */}
                            {data.requirements.map((req, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.04 }}
                                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                                >
                                    {/* Card Header */}
                                    <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                                        <span className="text-xs font-black text-slate-300 tracking-widest w-6">{req.number}</span>
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                                            <req.icon size={16} className="text-saku-red" />
                                        </div>
                                        <h2 className="font-display text-base md:text-lg font-bold text-saku-dark">{req.title}</h2>
                                    </div>
                                    {/* Card Body */}
                                    <div className="px-6 py-5">
                                        <FormattedText text={req.content} />
                                    </div>
                                </motion.div>
                            ))}

                            {/* Application Process */}
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-saku-dark flex items-center justify-center flex-shrink-0">
                                        <LayersIcon size={16} className="text-white" />
                                    </div>
                                    <h2 className="font-display text-base md:text-lg font-bold text-saku-dark">Application Process</h2>
                                </div>
                                <div className="px-6 py-5 space-y-3">
                                    {data.processSteps.map((step, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <span className="w-7 h-7 rounded-full bg-saku-red text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">{idx + 1}</span>
                                            <p className="text-slate-600 leading-relaxed text-base">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Closing Note */}
                            <div className="bg-saku-dark text-white rounded-2xl p-8">
                                <p className="text-white/80 leading-relaxed text-base italic">"{data.closingText}"</p>
                            </div>
                        </article>

                        {/* ── SIDEBAR ── */}
                        <aside className="lg:w-72 xl:w-80 flex-shrink-0">
                            <div className="sticky top-28 space-y-5">

                                {/* CTA */}
                                <div className="bg-white rounded-2xl border-2 border-saku-dark p-6 shadow-[6px_6px_0px_#000000]">
                                    <h3 className="font-display text-lg font-bold text-saku-dark mb-2">Ready to Apply?</h3>
                                    <p className="text-slate-500 text-sm mb-5 leading-relaxed">Our consultants will guide you through every step of the process.</p>
                                    <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-saku-red text-white py-3 rounded-xl font-bold text-sm hover:bg-saku-dark transition-all group uppercase tracking-wider">
                                        Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Quick Stats */}
                                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="px-5 py-3 border-b border-slate-50 bg-slate-50/50">
                                        <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest">At a Glance</h3>
                                    </div>
                                    <div className="px-5 py-4 divide-y divide-slate-50">
                                        <div className="flex items-center justify-between py-3">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <TrendingUp size={14} /> Demand
                                            </div>
                                            <span className="text-saku-red font-bold text-sm">{data.stats.demand}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <LayersIcon size={14} /> Difficulty
                                            </div>
                                            <span className="text-amber-500 font-bold text-sm">{data.stats.difficulty}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-3">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <Clock size={14} /> Processing
                                            </div>
                                            <span className="text-slate-700 font-bold text-sm">{data.stats.processing}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Choose */}
                                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="px-5 py-3 border-b border-slate-50 bg-slate-50/50">
                                        <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest">Why This Visa?</h3>
                                    </div>
                                    <div className="px-5 py-4 space-y-4">
                                        {data.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex gap-3">
                                                <CheckCircle2 size={16} className="text-saku-red flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-slate-800 text-sm">{benefit.title}</p>
                                                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{benefit.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Back link */}
                                <Link href="/visa" className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-saku-dark text-sm font-bold transition-colors py-2 group">
                                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Browse All Visa Types
                                </Link>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
