"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";



const About = () => {

    const highlights = [
        "Direct partnerships with 10+ Japanese language schools and Career guiding companies",

        "Certified Specified Skilled Worker (SSW) training programs.",
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            {/* Decorative Frame */}
                            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-saku-red/20 z-0" />

                            <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/about.jpg"
                                    alt="Saku Japanese Language School Heritage"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Floating "Zen" Card */}
                            {/*  <div className="absolute -bottom-8 -right-8 glass p-8 shadow-xl hidden sm:block z-20">
                                <div className="flex flex-col items-center text-center">
                                    <span className="font-display text-3xl sm:text-4xl font-bold text-saku-dark">10+</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-1">Years of Legacy</span>
                                </div>
                            </div> */}

                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-text-subheading">Our Story</span>
                        </div>
                        <h2 className="font-display text-text-section-title sm:text-4xl md:text-5xl font-bold mt-4 mb-8 text-saku-dark leading-tight">
                            Best Japanese Language School in Sri Lanka <br />
                            <span className="text-gray-400"></span>
                        </h2>

                        <p className="text-gray-600 text-text-body leading-relaxed mb-8 font-sans">
                            Welcome to Saku Japanese Language School, your gateway to mastering the Japanese
                            language and realizing your dreams of studying or starting the career in Japan. Based in Sri
                            Lanka, we specialize in providing high-quality language education SSW exam guiding, and
                            personalized visa consulting services for students looking to immigrate to Japan. At Saku, we
                            believe in empowering our students not only with language proficiency but also with the
                            cultural knowledge and guidance they need to thrive in Japan. Whether you are a beginner
                            interested in learning Japanese, preparing for exams like the JLPT, SSW or want to navigate
                            the complexities of visa applications, our dedicated team is here to support you every step of
                            the way. Start your journey to Japan with Saku Japanese Language School, where dreams fly!

                        </p>



                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-saku-red mt-1 flex-shrink-0" />
                                    <span className="text-sm font-bold text-saku-dark/80 leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-8">
                            <Link href="/about" className="bg-saku-dark text-white text-text-label px-8 py-4 font-bold tracking-widest hover:bg-saku-red transition-all duration-300 block">
                                LEARN MORE
                            </Link>
                            <div className="flex flex-col">
                                <span className="font-display text-text-label text-saku-dark"></span>
                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400"></span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>


        </section>
    );
};

export default About;
