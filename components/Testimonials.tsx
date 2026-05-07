"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star as StarIcon, UserCircle } from "lucide-react";

const testimonials = [
    {
        name: "Kasun Jayawardena",
        role: "SSW Graduate",
        location: "Nagoya, Japan",
        text: "Saku changed my life. Thanks to their SSW training, I am now working as a technician in Nagoya. Phenomenal support!",
    },
    {
        name: "Nilmini Alwis",
        role: "JLPT N4 Student",
        location: "Colombo, Sri Lanka",
        text: "The fusion of culture and language at Saku makes learning fun. It's about understanding the Japanese lifestyle.",
    },
    {
        name: "Suraj Bandara",
        role: "Working in Tokyo",
        location: "Tokyo, Japan",
        text: "From my first day in Colombo to arrival at Haneda, Saku was with me. Their team is transparent and trustworthy.",
    },
    {
        name: "Amara Perera",
        role: "University Student",
        location: "Osaka, Japan",
        text: "Securing a university spot in Japan felt impossible until I joined Saku. Their partnerships made it seamless.",
    },
    {
        name: "Dinesh Fernando",
        role: "Hotel Management",
        location: "Kyoto, Japan",
        text: "The SSW training was rigorous but worth it. Saku taught me the work ethics needed to succeed in Japan.",
    },
    {
        name: "Ishara Silva",
        role: "JLPT N2 Candidate",
        location: "Kandy, Sri Lanka",
        text: "Advanced Japanese is tough, but Saku's teachers make it manageable. Their study materials are top-notch.",
    },
    {
        name: "Rohan Gunaratne",
        role: "Construction Spec.",
        location: "Fukuoka, Japan",
        text: "I was worried about moving to Japan, but Saku handled everything—from language to visa paperwork.",
    },
    {
        name: "Sanduni Madusha",
        role: "Business Consultant",
        location: "Tokyo, Japan",
        text: "The business Japanese course at Saku is exceptional. It gave me confidence for professional meetings.",
    }
];

// Duplicate for visual continuity
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative" id="testimonials">
            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm block mb-4">SUCCESS STORIES</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-saku-dark leading-tight">
                    Real Journeys to <span className="text-saku-red ink-stroke">Japan</span>.
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden group">
                {/* Horizontal Gradient Gradients */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 py-12"
                    animate={{
                        x: [0, -3200],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedTestimonials.map((t, i) => (
                        <div key={i} className="flex-shrink-0 w-[400px]">
                            <div className="bg-white border border-gray-100 p-8 h-full shadow-sm hover:shadow-xl hover:border-saku-red/30 transition-all duration-500 group/card relative">
                                <div className="flex items-center gap-1 mb-4 text-saku-red">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} size={14} className="fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    &quot;{t.text}&quot;
                                </p>
                                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-300">
                                        <UserCircle size={40} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-lg text-saku-dark leading-none mb-1">
                                            {t.name}
                                        </h4>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold uppercase tracking-widest text-saku-red">{t.role}</span>
                                            <span className="text-[8px] font-medium text-gray-400 uppercase tracking-widest mt-0.5">{t.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-base md:text-lg font-bold text-gray-400 uppercase tracking-widest">
                    Scroll to explore more student journeys
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
