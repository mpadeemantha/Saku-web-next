"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
    { id: 1, url: "/student/1.jpeg", title: "Learning Together", category: "Classes", date: "Oct 2023" },
    { id: 2, url: "/student/2.jpeg", title: "Cultural Exchange", category: "Events", date: "Nov 2023" },
    { id: 3, url: "/student/3.jpeg", title: "Student Success", category: "Graduation", date: "Dec 2023" },
    { id: 4, url: "/student/4.jpeg", title: "Practical Sessions", category: "Classes", date: "Jan 2024" },
    { id: 5, url: "/student/5.jpeg", title: "Campus Life", category: "General", date: "Feb 2024" },
    { id: 6, url: "/student/6.jpeg", title: "Language Drills", category: "Classes", date: "Mar 2024" },
    { id: 7, url: "/student/7.jpeg", title: "Group Discussion", category: "Events", date: "Apr 2024" },
    { id: 8, url: "/student/8.jpeg", title: "New Enrollment", category: "General", date: "May 2024" },
];

const categories = ["All", "Classes", "Events", "Graduation", "General"];

export default function GalleryPage() {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = filter === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-slate-50">
            <Navbar />

            {/* ── Hero ── */}
            <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat grayscale opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-saku-dark/40 to-saku-dark"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <Camera size={400} className="text-white/20" />
                    </div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                            <span className="text-saku-red text-overline">Visual Journey</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-6 leading-tight">
                            Life at Saku
                        </h1>
                        <p className="text-body text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Experience the vibrant community, dedicated learning environment, and cultural activities through our lens.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Gallery Grid ── */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                    {/* Filter Controls */}
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 md:px-8 py-3 rounded-full font-bold text-label transition-all duration-300 ${
                                    filter === cat
                                        ? "bg-saku-dark text-white shadow-md scale-105"
                                        : "bg-white text-slate-500 border border-slate-200 hover:border-saku-dark hover:text-saku-dark"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative aspect-square overflow-hidden bg-white rounded-2xl cursor-pointer shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-saku-dark/90 via-saku-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                        <span className="text-saku-red text-overline mb-1.5">{image.category}</span>
                                        <h3 className="text-white font-display text-subheading font-bold mb-3">{image.title}</h3>
                                        <div className="flex items-center gap-2 text-white/60 text-label">
                                            <Maximize2 size={14} className="text-saku-red" />
                                            <span>View Fullscreen</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredImages.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-body text-slate-400">No images found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 md:py-20 bg-saku-red text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-display text-section-title font-bold mb-4 leading-tight">Become part of our story</h2>
                    <p className="text-body text-white/85 max-w-2xl mx-auto mb-8">
                        Enroll today and start your journey towards excellence in Japanese language and culture.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-saku-red px-10 py-4 rounded-xl font-bold tracking-widest text-label uppercase hover:bg-saku-dark hover:text-white transition-all active:scale-[0.98]">
                        APPLY FOR ADMISSION
                    </Link>
                </div>
            </section>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-saku-dark/95 backdrop-blur-md p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-saku-red transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={36} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />

                            {/* Fullscreen Info Bar */}
                            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div>
                                        <span className="text-saku-red text-overline mb-2 block">{selectedImage.category}</span>
                                        <h2 className="text-white font-display text-section-title font-bold mb-4">{selectedImage.title}</h2>
                                        <div className="flex flex-wrap gap-4 text-white/50 text-label">
                                            <div className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1">
                                                <MapPin size={14} className="text-saku-red" />
                                                <span>Saku Campus</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1">
                                                <Calendar size={14} className="text-saku-red" />
                                                <span>{selectedImage.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="bg-white/10 hover:bg-saku-red text-white backdrop-blur-sm px-6 py-3 rounded-xl font-bold text-label uppercase transition-all"
                                    >
                                        Close Viewer
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
