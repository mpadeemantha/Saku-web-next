"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, FileText, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Language School",
        subtitle: "Excellence in Japanese",
        description: "Comprehensive JLPT N5 to N1 courses, SSW training, and conversational Japanese for all levels. Our native-standard curriculum ensures you master the language effectively.",
        icon: <GraduationCap size={24} className="text-white" />,
        image: "/class.webp",
        items: [],
        gridClass: "md:col-span-1",
        href: "/courses",
    },
    {
        title: "SSW Skill Programes ",
        subtitle: "Your Smooth Transition",
        description: "Navigating the complexities of Japanese visas made simple. From student to skilled worker visas, we've got you covered.",
        icon: <FileText size={24} className="text-white" />,
        image: "/visa.png",
        items: [],
        gridClass: "md:col-span-1",
        href: "/ssw",
    },
    {
        title: "Visa Consulting Service ",
        subtitle: "Career Advisory",
        description: "Book a personalized session with our experts to map out your education and career path in Japan.",
        icon: <Users size={24} className="text-white" />,
        image: "/consult.webp",
        gridClass: "md:col-span-1",
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
                            className={`group bg-white border border-gray-100 relative overflow-hidden flex flex-col hover:border-saku-red/30 transition-all duration-500 shadow-sm hover:shadow-xl ${service.gridClass}`}
                        >
                            {/* Image Header */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                {/* Floating Icon */}
                                <div className="absolute top-6 left-6 w-12 h-12 bg-saku-red flex items-center justify-center shadow-lg z-10">
                                    {service.icon}
                                </div>

                                <div className="absolute bottom-6 left-6 z-10">
                                    <span className="text-white/80 text-sm font-bold uppercase tracking-[0.2em]">{service.subtitle}</span>
                                    <h3 className="text-white font-display text-2xl font-bold mt-1 uppercase tracking-wider">{service.title}</h3>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <p className="text-gray-600 leading-relaxed mb-6 font-sans">
                                        {service.description}
                                    </p>

                                    {service.items && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            {service.items.map((item, i) => (
                                                <div key={i} className="flex items-center text-sm font-semibold text-saku-dark/70 bg-gray-50 px-3 py-2 border-l-2 border-saku-red/30">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href={service.href} className="flex items-center justify-between border-t border-gray-50 pt-6 cursor-pointer group/link w-full">
                                    <div className="flex items-center text-saku-dark font-bold text-sm tracking-[0.2em] hover:text-saku-red transition-colors uppercase">
                                        Discover More
                                        <ArrowRight size={14} className="ml-2 transform group-hover/link:translate-x-2 transition-transform h-4 w-4" />
                                    </div>
                                    <div className="h-px flex-grow mx-4 bg-gray-100 group-hover:bg-saku-red/20 transition-colors" />
                                </Link>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-saku-red transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

