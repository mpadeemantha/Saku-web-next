"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Globe, FileText, User, BookOpen, Heart, Briefcase, Navigation, Languages, Info, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Template data based on user example
const templateData = {
    title: "Requirements for SSW Agriculture",
    subtitle: "The SSW Agriculture Visa allows foreign nationals to work in Japan’s agriculture sector to address labor shortages. Below are the detailed requirements:",
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
            content: "While prior experience in agriculture is not mandatory, it is highly advantageous. Applicants who have completed Japan’s Technical Intern Training Program (TITP) in agriculture may have their skills recognized, simplifying the visa process.",
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
            content: "Employers hiring workers under the SSW Agriculture Visa are required to:\n• Provide proper training to familiarize workers with Japanese agricultural practices.\n• Assist with accommodation and transportation arrangements.\n• Offer ongoing support for workers’ well-being, including help with daily life in Japan.",
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
        { title: "High Demand", description: "The agriculture sector in Japan faces significant labor shortages, increasing job security for workers." }
    ],
    closingText: "By fulfilling these requirements and understanding the scope of work, applicants can successfully secure the SSW Agriculture Visa and contribute to Japan’s vital agricultural industry."
};

// Helper component to render text with bold/list formatting beautifully
const FormattedText = ({ text }: { text: string }) => {
    return (
        <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
            {text.split('\n\n').map((paragraph, i) => (
                <p key={i}>
                    {paragraph.split('\n').map((line, j) => {
                        // Render bullet points differently
                        if (line.trim().startsWith('•')) {
                            return (
                                <span key={j} className="flex gap-3 my-2">
                                    <span className="text-saku-red mt-1 block">•</span>
                                    <span dangerouslySetInnerHTML={{ __html: line.substring(1).trim().replace(/\*\*(.*?)\*\*/g, '<strong class="text-saku-dark">$1</strong>') }} />
                                </span>
                            );
                        }
                        return (
                            <React.Fragment key={j}>
                                <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-saku-dark">$1</strong>') }} />
                                {j < paragraph.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        );
                    })}
                </p>
            ))}
        </div>
    );
};

export default function VisaDetailsTemplatePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const data = templateData; 

    return (
        <main className="min-h-screen bg-white selection:bg-saku-red selection:text-white">
            <Navbar />

            {/* Simple Progress Bar Hook (Visual only) */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 overflow-hidden pointer-events-none">
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full bg-saku-red"
                />
            </div>

            <div className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    {/* Header / Breadcrumb */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <Link href="/visa" className="inline-flex items-center gap-2 text-slate-500 hover:text-saku-red transition-colors font-bold tracking-widest text-xs uppercase group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Guides
                        </Link>
                        <div className="flex items-center gap-4 text-slate-400 text-xs font-bold tracking-widest uppercase">
                            <span>Published: April 2026</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>8 Min Read</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Main Content Column */}
                        <article className="lg:w-2/3">
                            <header className="mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-1 bg-saku-red"></div>
                                        <span className="text-saku-red font-bold tracking-[0.2em] uppercase text-xs">Visa Requirements Guide</span>
                                    </div>
                                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-saku-dark mb-8 leading-[1.1]">
                                        {data.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-8 mb-12">
                                        {data.subtitle}
                                    </p>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-16"
                                >
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        fill
                                        className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </motion.div>
                            </header>

                            <div className="space-y-20 border-b border-slate-100 pb-20">
                                {data.requirements.map((req, idx) => (
                                    <section key={idx} className="group relative">
                                        <div className="flex items-center gap-5 mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-saku-red group-hover:bg-saku-red group-hover:text-white transition-all duration-500 shadow-sm">
                                                <req.icon size={24} />
                                            </div>
                                            <h2 className="font-display text-2xl md:text-3xl font-bold text-saku-dark">
                                                {req.title}
                                            </h2>
                                        </div>
                                        <div className="pl-0 md:pl-16">
                                            <FormattedText text={req.content} />
                                        </div>
                                        
                                        {/* Subtle Divider */}
                                        {idx < data.requirements.length - 1 && (
                                            <div className="absolute -bottom-10 left-16 right-0 h-px bg-slate-50"></div>
                                        )}
                                    </section>
                                ))}
                            </div>

                            {/* Section: Process */}
                            <section className="pt-20 mb-20">
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-saku-dark mb-10 flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-saku-dark text-white flex items-center justify-center text-sm">✓</span>
                                    Application Process
                                </h2>
                                <div className="space-y-6 pl-4 md:pl-12 border-l-2 border-slate-100">
                                    {data.processSteps.map((step, idx) => (
                                        <div key={idx} className="relative group">
                                            <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-saku-red transition-colors z-10"></div>
                                            <div className="bg-slate-50 p-6 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-slate-300 font-black text-2xl">0{idx + 1}</span>
                                                    <p className="text-lg text-slate-600 font-medium">{step}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Closing Card */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-saku-dark text-white p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-saku-red/20 blur-[100px] rounded-full group-hover:bg-saku-red/40 transition-all duration-700"></div>
                                <Quote className="text-white/10 absolute top-8 left-8" size={60} />
                                <p className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed italic text-white/90">
                                    "{data.closingText}"
                                </p>
                            </motion.div>
                        </article>

                        {/* Sidebar Column */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-32 space-y-8">
                                
                                {/* Action Card */}
                                <div className="bg-white border-2 border-saku-dark p-8 rounded-[2rem] shadow-[10px_10px_0px_#000000]">
                                    <h3 className="font-display text-2xl font-bold text-saku-dark mb-4">Start Your Application</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        Ready to take the next step? Our consultants are waiting to help you through the process.
                                    </p>
                                    <Link href="/contact" className="flex items-center justify-center gap-3 w-full bg-saku-red text-white py-4 rounded-xl font-bold tracking-widest text-sm hover:bg-saku-dark transition-all duration-300 uppercase shadow-lg shadow-saku-red/20 active:scale-95 group">
                                        Consult with Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Benefits Box */}
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                    <h3 className="font-display text-xl font-bold text-saku-dark mb-6 flex items-center gap-3">
                                        <Heart size={20} className="text-saku-red" /> Why Choose This?
                                    </h3>
                                    <div className="space-y-6">
                                        {data.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="w-6 h-6 shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                                                    <CheckCircle2 size={14} className="text-saku-red" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-saku-dark text-sm mb-1">{benefit.title}</h4>
                                                    <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Fact Section */}
                                <div className="bg-slate-900 text-white p-8 rounded-[2rem] overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full"></div>
                                    <h3 className="font-display text-lg font-bold mb-4 relative z-10 tracking-widest uppercase text-white/50">Industry Status</h3>
                                    <div className="relative z-10 space-y-4">
                                        <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                            <span className="text-white/60 text-sm">Demand</span>
                                            <span className="text-saku-red font-bold">Very High</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                            <span className="text-white/60 text-sm">Difficulty</span>
                                            <span className="text-blue-400 font-bold">Medium</span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-white/60 text-sm">Processing Time</span>
                                            <span className="font-bold">3-6 Months</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </aside>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
