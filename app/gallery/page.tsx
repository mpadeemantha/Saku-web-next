"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera, MapPin, Calendar } from "lucide-react";

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
        <main className="min-h-screen relative overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saku-dark"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Camera size={400} className="text-gray-500" />
                    </div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-saku-red"></div>
                            <span className="text-saku-red font-bold tracking-[0.4em] uppercase text-xs">Visual Journey</span>
                            <div className="h-[1px] w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-4xl md:text-7xl font-bold mb-6 leading-tight">
                            Life at <span className="text-saku-red">Saku.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto">
                            Experience the vibrant community, dedicated learning environment, and cultural activities through our lens.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* Filter Controls */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 font-bold tracking-[0.2em] text-xs uppercase border transition-all duration-300 ${
                                    filter === cat 
                                    ? "bg-saku-dark text-white border-saku-dark shadow-lg" 
                                    : "bg-white text-gray-500 border-gray-200 hover:border-saku-dark hover:text-saku-dark"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div 
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                                    className="group relative aspect-square overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-saku-dark/90 via-saku-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                        <span className="text-saku-red font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{image.category}</span>
                                        <h3 className="text-white font-display text-xl font-bold mb-4">{image.title}</h3>
                                        <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-widest uppercase">
                                            <Maximize2 size={14} className="text-saku-red" />
                                            <span>View Fullscreen</span>
                                        </div>
                                    </div>
                                    
                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-full h-full bg-saku-red transform translate-x-1/2 -translate-y-1/2 rotate-45" />
                                        <Maximize2 size={16} className="text-white z-10 translate-x-3 -translate-y-3" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredImages.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-gray-400 font-medium">No images found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-saku-dark/95 backdrop-blur-xl p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-saku-red transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh] bg-black overflow-hidden shadow-2xl"
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
                            <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 bg-gradient-to-t from-black via-black/60 to-transparent">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div>
                                        <span className="text-saku-red font-bold text-xs uppercase tracking-[0.4em] mb-3 block">{selectedImage.category}</span>
                                        <h2 className="text-white font-display text-2xl md:text-4xl font-bold mb-4">{selectedImage.title}</h2>
                                        <div className="flex flex-wrap gap-6 text-white/50 text-xs font-bold tracking-widest uppercase">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-saku-red" />
                                                <span>Saku Campus</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-saku-red" />
                                                <span>{selectedImage.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => setSelectedImage(null)}
                                        className="bg-saku-red text-white px-8 py-4 font-bold tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-saku-dark transition-all"
                                    >
                                        Close Viewer
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quick CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-saku-dark mb-6">Become part of our story.</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
                        Enroll today and start your journey towards excellence in Japanese language and culture.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto bg-saku-dark text-white px-10 py-5 font-bold tracking-widest text-xs uppercase hover:bg-saku-red transition-all shadow-lg">
                            Apply for Admission
                        </button>
                        <button className="w-full sm:w-auto bg-white border border-gray-200 text-saku-dark px-10 py-5 font-bold tracking-widest text-xs uppercase hover:border-saku-dark transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
