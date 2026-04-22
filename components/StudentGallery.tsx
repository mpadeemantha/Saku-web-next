"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
    { url: "/student/1.jpeg" },
    { url: "/student/2.jpeg" },
    { url: "/student/3.jpeg" },
    { url: "/student/4.jpeg" },
    { url: "/student/5.jpeg" },
    { url: "/student/6.jpeg" },
    { url: "/student/7.jpeg" },
];

// Triple the array for a seamless infinite loop
const loopImages = [...galleryImages, ...galleryImages, ...galleryImages];

const StudentGallery = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (carouselRef.current) {
                setScrollWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden relative" id="gallery">

            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-1 bg-saku-red"></div>
                            <span className="text-saku-red text-overline">Life at Saku</span>
                        </div>
                        <h2 className="font-display text-section-title font-bold text-saku-dark leading-tight">
                            Student Gallery
                        </h2>
                        <p className="text-body text-slate-500 mt-2 max-w-md">
                            A glimpse into the vibrant community and memorable moments at Saku Japanese Language School.
                        </p>
                    </div>
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 self-start md:self-auto bg-saku-dark text-white px-7 py-3 rounded-xl font-bold text-label tracking-wider uppercase hover:bg-saku-red transition-all group flex-shrink-0"
                    >
                        Browse Full Gallery
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Infinite Scroll Carousel */}
            <div className="relative" ref={carouselRef}>
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex cursor-grab active:cursor-grabbing gap-4 pl-4"
                    animate={scrollWidth > 0 ? { x: [0, -scrollWidth / 3] } : {}}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    drag="x"
                    dragConstraints={{ right: 0, left: -scrollWidth }}
                    dragElastic={0.05}
                >
                    {loopImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-64 md:w-80 h-64 md:h-80 relative rounded-2xl overflow-hidden group/item shadow-sm border border-white"
                        >
                            <Image
                                src={image.url}
                                alt={`Saku student photo ${(index % galleryImages.length) + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover/item:scale-110 pointer-events-none"
                                sizes="(max-width: 768px) 256px, 320px"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-saku-dark/0 group-hover/item:bg-saku-dark/30 transition-all duration-500 rounded-2xl" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom hint */}
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl mt-8">
                <p className="text-label text-slate-400 flex items-center gap-2">
                    <span className="w-6 h-[1px] bg-slate-300 inline-block"></span>
                    Drag to explore · {galleryImages.length} photos
                </p>
            </div>
        </section>
    );
};

export default StudentGallery;
