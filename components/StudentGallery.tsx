"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const galleryImages = [
    {
        url: "/student/1.jpeg",
        title: "",
        desc: "",
    },
    {
        url: "/student/2.jpeg",
        title: "",
        desc: "",
    },
    {
        url: "/student/3.jpeg",
        title: "",
        desc: "",
    },
    {
        url: "/student/4.jpeg",
        title: "",
        desc: "",
    },
    {
        url: "/student/5.jpeg",
        title: "",
        desc: "",
    },
    {
        url: "/student/6.jpeg",
        title: "",
        desc: "",
    },
    {
        url: "/student/7.jpeg",
        title: "",
        desc: "",
    }
];

// Duplicate for infinite scroll
const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

const StudentGallery = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-[#fbfbfb] overflow-hidden relative" id="gallery">
            {/* Background Text Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
                <span className="font-display text-[30vw] font-bold text-saku-dark whitespace-nowrap">
                    SCENES • GALLERY
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
                <div className="flex flex-col items-center">
                    <span className="text-saku-red font-bold tracking-[0.4em] uppercase text-xs mb-4">Life at Saku</span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-saku-dark leading-none text-center">
                        Capturing Moments of Excellence.
                    </h2>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="relative group" ref={carouselRef}>
                {/* Horizontal Gradient Gradients */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48  z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48  z-10 pointer-events-none" />

                <motion.div
                    className="flex cursor-grab active:cursor-grabbing pb-8 pl-[10vw]"
                    animate={width > 0 ? { x: [0, -width] } : {}}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 600,
                            ease: "linear",
                        },
                    }}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                >
                    {duplicatedImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 w-[280px] md:w-[450px] aspect-[1/1] relative group/item overflow-hidden shadow-lg border-2 border-white/50 ml-4 md:ml-8"
                        >
                            <Image
                                src={image.url}
                                alt={image.title}
                                fill
                                className="object-cover grayscale-[30%] group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-110 pointer-events-none"
                                sizes="(max-width: 768px) 280px, 450px"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-saku-dark/95 via-saku-dark/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover/item:translate-y-0">
                                <span className="text-saku-red font-bold text-[10px] uppercase tracking-[0.3em] mb-2">
                                    {image.desc}
                                </span>
                                <h4 className="text-white font-display text-3xl font-bold mb-6">
                                    {image.title}
                                </h4>

                                <button className="flex items-center gap-3 text-white/70 text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors group/btn">

                                    <div className="w-8 h-[1px] bg-white transform origin-left group-hover/btn:scale-x-150 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-6 right-6 z-20">
                                    <Eye className="text-white" size={24} />
                                </div>
                                <div className="absolute top-0 right-0 w-full h-full bg-saku-red transform translate-x-1/2 -translate-y-1/2 rotate-45" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-20 container mx-auto px-6 flex justify-between items-center text-center md:text-left">
                <div className="hidden md:block">
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.5em] flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-gray-200" />
                        A Glimpse into the Saku Community
                    </p>
                </div>
                <Link href="/gallery" className="group relative flex items-center gap-4 py-4 px-10 bg-transparent border border-saku-dark hover:border-saku-red overflow-hidden transition-colors">
                    <span className="relative z-10 font-bold tracking-[0.2em] text-xs uppercase group-hover:text-white transition-colors duration-300">Browse Full Gallery</span>
                    <span className="absolute inset-0 bg-saku-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <ArrowRight size={16} className="relative z-10 group-hover:text-white transition-colors duration-300" />
                </Link>
            </div>


        </section>
    );
};

export default StudentGallery;
