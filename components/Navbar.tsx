"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Language Courses", href: "/courses" },
        { name: "SSW Program", href: "/ssw" },
        { name: "Visa", href: "/visa" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];


    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <div className="relative h-12 lg:h-16 w-auto aspect-[3/1]">
                            <Image
                                src={scrolled ? "/sakulogoB.png" : "/sakulogoW.png"}
                                alt="Saku Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-xs  uppercase tracking-[0.2em] transition-colors ${scrolled ? "text-gray-500 hover:text-saku-red" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className={`px-6 py-2 text-xs font-bold tracking-[0.2em] border transition-all ${scrolled ? "border-saku-red text-saku-red hover:bg-saku-red hover:text-white" : "border-white text-white hover:bg-white hover:text-black"
                                }`}>
                            ENROLL NOW
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden ${scrolled ? "text-saku-dark" : "text-white"}`}
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-saku-dark text-white p-10 flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <div className="relative h-12 w-32">
                                <Image
                                    src="/sakulogoW.png"
                                    alt="Saku Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    onClick={() => setIsOpen(false)}
                                    className="font-display text-3xl sm:text-4xl font-bold hover:text-saku-red transition-colors flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ArrowRight size={28} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div className="h-[1px] bg-white/10 w-full" />
                            <p className="text-gray-400 text-base md:text-lg font-sans">+94 77 123 4567 • hello@sakujls.lk</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Enroll Popup Form */}
            <AnimatePresence>
                {isEnrollOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-lg shadow-2xl overflow-hidden relative"
                        >
                            <div className="bg-saku-dark p-6 flex justify-between items-center text-white">
                                <h3 className="font-display text-2xl font-bold tracking-widest">ENROLL NOW</h3>
                                <button onClick={() => setIsEnrollOpen(false)} className="hover:text-saku-red transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <form className="p-8 flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully! Our team will contact you shortly.'); setIsEnrollOpen(false); }}>
                                <div>
                                    <label className="block text-sm font-bold text-saku-dark uppercase tracking-widest mb-2">Full Name</label>
                                    <input required type="text" placeholder="Your Name" className="w-full border-b-2 border-gray-200 py-2 focus:border-saku-red focus:outline-none transition-colors bg-transparent text-saku-dark font-sans" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-saku-dark uppercase tracking-widest mb-2">Phone Number</label>
                                    <input required type="tel" placeholder="+94 7X XXX XXXX" className="w-full border-b-2 border-gray-200 py-2 focus:border-saku-red focus:outline-none transition-colors bg-transparent text-saku-dark font-sans" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-saku-dark uppercase tracking-widest mb-2">Interested Service</label>
                                    <select required defaultValue="" className="w-full border-b-2 border-gray-200 py-2 focus:border-saku-red focus:outline-none transition-colors bg-transparent text-saku-dark font-sans cursor-pointer appearance-none">
                                        <option value="" disabled>Select a service...</option>
                                        <option value="Language School">Language School (JLPT)</option>
                                        <option value="Spoken Japanese">Spoken Japanese</option>
                                        <option value="SSW Program">SSW Skill Courses</option>
                                        <option value="Visa Services">Visa Services & Consulting</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-saku-dark uppercase tracking-widest mb-2">Note (Optional)</label>
                                    <textarea rows={3} placeholder="Tell us your goals or any questions..." className="w-full border-2 border-gray-200 p-3 focus:border-saku-red focus:outline-none transition-colors bg-transparent text-saku-dark font-sans resize-none mt-1"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-saku-red text-white py-4 mt-4 font-bold tracking-[0.2em] text-sm hover:bg-saku-dark transition-colors uppercase">
                                    Send Request
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
