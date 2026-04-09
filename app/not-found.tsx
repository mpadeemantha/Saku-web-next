"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ghost, Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen relative flex flex-col bg-white">
            <Navbar />
            
            <div className="flex-grow flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-saku-red/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-saku-dark/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                
                <div className="container mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Cute Floating Ghost Animation */}
                        <motion.div 
                            animate={{ 
                                y: [0, -20, 0],
                                rotate: [-5, 5, -5]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                            }}
                            className="bg-saku-dark text-white p-8 rounded-full mb-8 shadow-2xl relative"
                        >
                            <Ghost size={80} strokeWidth={1.5} />
                            
                            {/* Little floating question marks */}
                            <motion.span 
                                animate={{ opacity: [0, 1, 0], y: [0, -20] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="absolute top-0 right-0 font-display text-2xl font-bold text-saku-red"
                            >
                                ?
                            </motion.span>
                            <motion.span 
                                animate={{ opacity: [0, 1, 0], y: [0, -15] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
                                className="absolute top-4 -left-4 font-display text-xl font-bold text-saku-red"
                            >
                                ?
                            </motion.span>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                        >
                            <h1 className="font-display text-3xl sm:text-4xl md:text-7xl md:text-9xl font-bold text-saku-dark tracking-tighter mb-4">
                                4<span className="text-saku-red">0</span>4
                            </h1>
                        </motion.div>

                        <h2 className="text-2xl md:text-3xl font-bold text-saku-dark mb-6">
                            Oops! You look a little lost.
                        </h2>
                        
                        <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                            The page you are looking for might have been moved, deleted, or possibly never existed. Let&apos;s get you back on track.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/"
                                className="flex items-center gap-2 bg-saku-dark text-white px-8 py-4 font-bold tracking-widest text-sm hover:bg-saku-red transition-all duration-300 w-full sm:w-auto justify-center group"
                            >
                                <Home size={18} className="transform group-hover:-translate-y-1 transition-transform" />
                                GO HOME
                            </Link>
                            
                            <button 
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 bg-white text-saku-dark border border-gray-200 px-8 py-4 font-bold tracking-widest text-sm hover:border-saku-red hover:text-saku-red transition-all duration-300 w-full sm:w-auto justify-center group"
                            >
                                <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                                GO BACK
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
