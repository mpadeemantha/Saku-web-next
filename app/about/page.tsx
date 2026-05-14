"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Globe, Users, BookOpen, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Students Placed" },
    { value: "95%", label: "Visa Success Rate" },
    { value: "3", label: "Japan Partner Schools" },
];

const features = [
    {
        icon: Users,
        title: "Experienced Faculty",
        desc: "Learn from native Japanese speakers and seasoned local educators with years of hands-on experience in Japan.",
    },
    {
        icon: BookOpen,
        title: "Proven Curriculum",
        desc: "Structured courses designed to guarantee success in JLPT, NAT, and JFT examinations.",
    },
    {
        icon: Globe,
        title: "End-to-End Support",
        desc: "From language training to visa processing and post-arrival assistance in Japan.",
    },
];

const highlights = [
    "Experienced visa consultants with a track record of successful applications.",
    "Step-by-step guidance tailored to your individual needs.",
    "Affordable service fees with a commitment to quality and reliability.",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* ── Hero ── */}
            <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat grayscale opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-saku-dark/40 to-saku-dark"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                            <span className="text-saku-red text-overline">About Us</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-6 leading-tight">
                            Who We Are
                        </h1>
                        <p className="text-body text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            At Saku Japanese Language School, we are dedicated to helping Sri Lankan students and professionals achieve their dreams of studying, working, and living in Japan.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ── */}


            {/* ── Who We Are — 2-col ── */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-5/12 flex-shrink-0"
                        >
                            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-saku-red/20 rounded-2xl z-0" />
                                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                                    <Image
                                        src="/about.jpg"
                                        alt="Saku Japanese Language School"
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                                {/* Badge */}
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:w-7/12"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-1 bg-saku-red"></div>
                                <span className="text-saku-red text-overline">Why Choose Saku</span>
                            </div>
                            <h2 className="font-display text-section-title font-bold text-saku-dark mb-6 leading-tight">
                                Trusted experts in<br />Japan visa services
                            </h2>
                            <p className="text-body text-slate-500 leading-relaxed mb-8">
                                Saku Japanese Language School Pvt. Ltd. offers comprehensive assistance for SSW, Work, and Service Visas. With our in-depth knowledge of Japan's immigration processes, personalized support, and commitment to excellence, we ensure a smooth and stress-free experience.
                            </p>

                            <div className="space-y-4 mb-10">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-saku-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle2 size={14} className="text-saku-red" />
                                        </div>
                                        <span className="text-body text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="inline-flex items-center gap-2 bg-saku-dark text-white px-8 py-3.5 rounded-xl font-bold text-label tracking-wider uppercase hover:bg-saku-red transition-all group">
                                Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-1 bg-saku-red"></div>
                            <span className="text-saku-red text-overline">Our Core</span>
                            <div className="w-8 h-1 bg-saku-red"></div>
                        </div>
                        <h2 className="font-display text-section-title font-bold text-saku-dark">Mission &amp; Vision</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-50 bg-slate-50/50">
                                <div className="w-9 h-9 rounded-xl bg-saku-red flex items-center justify-center flex-shrink-0">
                                    <Globe size={18} className="text-white" />
                                </div>
                                <h3 className="font-display text-heading font-bold text-saku-dark">Mission</h3>
                            </div>
                            <div className="px-7 py-6">
                                <p className="text-body text-slate-500 leading-relaxed">
                                    Our mission is to empower Sri Lankan students with the language skills, cultural knowledge, and guidance they need to achieve their dreams of studying, working, and living in Japan. Through high-quality education, expert visa services, and personalized consulting, we strive to make every journey to Japan seamless, enriching, and successful.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <div className="flex items-center gap-3 px-7 py-5 border-b border-slate-50 bg-slate-50/50">
                                <div className="w-9 h-9 rounded-xl bg-saku-dark flex items-center justify-center flex-shrink-0">
                                    <Star size={18} className="text-white" />
                                </div>
                                <h3 className="font-display text-heading font-bold text-saku-dark">Vision</h3>
                            </div>
                            <div className="px-7 py-6">
                                <p className="text-body text-slate-500 leading-relaxed">
                                    Our vision is to become the leading Japanese language school and consulting center in Sri Lanka, renowned for fostering cross-cultural connections and transforming the lives of students. We aim to build a community where individuals are equipped to thrive in Japan, contributing to global understanding and collaboration.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-1 bg-saku-red"></div>
                            <span className="text-saku-red text-overline">What Sets Us Apart</span>
                            <div className="w-8 h-1 bg-saku-red"></div>
                        </div>
                        <h2 className="font-display text-section-title font-bold text-saku-dark">Why Choose Saku?</h2>
                        <p className="text-body text-slate-500 mt-3 max-w-xl mx-auto">Our holistic approach ensures our students are well-prepared not just for exams, but for life in Japan.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300"
                            >
                                <div className="p-7">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-saku-red group-hover:border-saku-red transition-all duration-300">
                                        <feature.icon size={22} className="text-saku-dark group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-display text-subheading font-bold text-saku-dark mb-3">{feature.title}</h3>
                                    <p className="text-body text-slate-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-section-title font-bold mb-4 leading-tight">Ready to start your Japan journey?</h2>
                    <p className="text-body text-white/85 max-w-2xl mx-auto mb-8">
                        Our expert counselors are here to guide you from language training through to a successful visa application.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-saku-red px-10 py-4 font-bold tracking-widest text-label uppercase hover:bg-saku-dark hover:text-white transition-all active:scale-[0.98]">
                        BOOK A FREE CONSULTATION
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
