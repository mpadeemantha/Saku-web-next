"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUp, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-saku-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
            >
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">Chat with us</span>
                <MessageCircle size={24} />
            </a>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-1">
                        <Link href="/">
                            <div className="relative h-16 w-32 mb-6">
                                <Image 
                                    src="/sakulogoW.png" 
                                    alt="Saku Logo" 
                                    fill 
                                    className="object-contain" 
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-sans">
                            Founded in 1994, Saku Japanese Language School is the pioneer in Japanese language education in Sri Lanka, bridging cultures and creating global careers.
                        </p>
                        <div className="flex gap-4">
                            <Instagram size={20} className="text-gray-500 hover:text-saku-red cursor-pointer transition-colors" />
                            <Facebook size={20} className="text-gray-500 hover:text-saku-red cursor-pointer transition-colors" />
                            <Youtube size={20} className="text-gray-500 hover:text-saku-red cursor-pointer transition-colors" />
                            <Linkedin size={20} className="text-gray-500 hover:text-saku-red cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-8">Navigation</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li className="hover:text-saku-red transition-colors cursor-pointer"><Link href="/">Home</Link></li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer"><Link href="/#about">About Saku</Link></li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer"><Link href="/#courses">Courses</Link></li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer"><Link href="/#ssw">SSW Programs</Link></li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer"><Link href="/#contact">Contact</Link></li>
                        </ul>

                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li className="hover:text-saku-red transition-colors cursor-pointer">Student Login</li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer">Download Prospectus</li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer">Partner Institutes</li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer">Success Stories</li>
                            <li className="hover:text-saku-red transition-colors cursor-pointer">Japan Visa Guide</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-8">Newsletter</h4>
                        <p className="text-gray-400 text-base md:text-lg mb-4">Stay updated with the latest news and batch starting dates.</p>
                        <div className="flex shadow-lg">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/5 border border-white/10 py-3 px-4 text-sm w-full text-white placeholder:text-gray-600 focus:ring-1 focus:ring-saku-red focus:outline-none transition-all"
                            />
                            <button className="bg-saku-red text-white px-6 font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                                JOIN
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
                    <p className="text-base md:text-lg uppercase font-bold tracking-widest">
                        © 2024 Saku Japanese Language School. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-sm uppercase font-bold tracking-widest">
                        <span className="hover:text-saku-red cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-saku-red cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-white hover:text-saku-red transition-colors uppercase"
                    >
                        TOP <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Bottom Decorative Motif */}
            <div className="absolute left-1/2 -bottom-24 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.02] pointer-events-none invert">
                <div className="pattern-seigaiha w-full h-full" />
            </div>
        </footer>
    );
};

export default Footer;
