"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Language School",
        subtitle: "Excellence in Japanese",
        description: "Comprehensive JLPT N5 to N1 courses, SSW training, and conversational Japanese for all levels. Our native-standard curriculum ensures you master the language effectively.",
        image: "/class.webp",
        number: "01",
        href: "/courses",
    },
    {
        title: "SSW Skill Programmes",
        subtitle: "Your Smooth Transition",
        description: "Navigating the complexities of Japanese visas made simple. From student to skilled worker visas, we've got you covered.",
        image: "/visa.png",
        number: "02",
        href: "/ssw",
    },
    {
        title: "Visa Consulting Service",
        subtitle: "Career Advisory",
        description: "Book a personalized session with our experts to map out your education and career path in Japan.",
        image: "/consult.webp",
        number: "03",
        href: "/visa",
    },
];

const Services = () => {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Services</span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-saku-dark">What We Offer</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white border border-gray-100 relative overflow-hidden flex flex-col hover:border-saku-red/30 transition-all duration-500 shadow-sm hover:shadow-xl"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Number Badge */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="font-display text-5xl font-bold text-white/20 leading-none select-none">
                                        {service.number}
                                    </span>
                                </div>

                                {/* Title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                                    <div className="h-[2px] w-8 bg-saku-red mb-3 group-hover:w-14 transition-all duration-500" />
                                    <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] block mb-1">
                                        {service.subtitle}
                                    </span>
                                    <h3 className="text-white font-display text-xl font-bold uppercase tracking-wider leading-tight">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <p className="text-gray-600 leading-relaxed mb-8 font-sans">
                                    {service.description}
                                </p>

                                <Link href={service.href} className="flex items-center gap-3 group/link">
                                    <div className="w-8 h-8 bg-saku-dark group-hover/link:bg-saku-red flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                                        <ArrowRight size={14} className="text-white transform group-hover/link:translate-x-0.5 transition-transform" />
                                    </div>
                                    <span className="text-saku-dark font-bold text-xs tracking-[0.2em] uppercase group-hover/link:text-saku-red transition-colors">
                                        Discover More
                                    </span>
                                </Link>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-saku-red transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
