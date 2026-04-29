"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Master the Art of Japanese",
        subtitle: "Education",
        description: "Intensive JLPT N5/N4 courses designed for serious learners. Modern classrooms meet traditional excellence.",
        image: "/bg1.png",
        button1: "Explore Courses",

    },
    {
        id: 2,
        title: "Your Career in Japan Starts Here",
        subtitle: "Career & SSW",
        description: "Launch your professional journey with our Specified Skilled Worker (SSW) programs and visa assistance.",
        image: "/bg1.png",
        button1: "SSW Programs",
    },
    {
        id: 3,
        title: "Discover the Heart of Japan",
        subtitle: "Culture",
        description: "Immerse yourself in 'Life in Japan' through our cultural integration programs and vibrant festivals.",
        image: "/bg1.png",
        button1: "Cultural Events",
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex h-full items-center pt-100 px-6 md:px-20 lg:px-32">
                <div className="max-w-4xl">
                    <motion.div
                        key={`content-${current}`}
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="inline-block bg-saku-red px-4 py-1.5 text-sm font-bold tracking-[0.3em] text-white uppercase mb-8 shadow-lg shadow-saku-red/20"
                        >
                            {slides[current].subtitle}
                        </motion.span>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
                            {slides[current].title.split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 + (i * 0.1) }}
                                    className="inline-block mr-4"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="text-gray-300 text-sm md:text-lg max-w-2xl mb-12 leading-relaxed font-sans font-light"
                        >
                            {slides[current].description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link href="/contact">
                                <button className="glass px-10 py-5 text-white font-bold tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 active:scale-95">
                                    {slides[current].button1}
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 transition-all duration-500 ${current === i ? "w-12 bg-saku-red" : "w-6 bg-white/30"
                            }`}
                    />
                ))}
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-20 hidden md:flex gap-4">
                <button
                    onClick={prevSlide}
                    className="h-12 w-12 flex items-center justify-center border border-white/30 text-white hover:border-saku-red hover:text-saku-red transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="h-12 w-12 flex items-center justify-center border border-white/30 text-white hover:border-saku-red hover:text-saku-red transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>


        </section>
    );
};

export default Hero;
