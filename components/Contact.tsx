"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="contact">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-0 shadow-2xl relative">

                    {/* Left Side: Map & Details */}
                    <div className="lg:w-1/2 bg-saku-dark p-12 lg:p-20 text-white relative">


                        <span className="text-saku-red font-bold tracking-[0.3eb] uppercase text-sm">Reach Us</span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-12">Head Office</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full flex-shrink-0">
                                    <MapPin size={24} className="text-saku-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                                    <p className="text-gray-400 font-sans leading-relaxed">
                                        07 Turnour Rd, <br />
                                        Colombo 00800, Sri Lanka
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full flex-shrink-0">
                                    <Phone size={24} className="text-saku-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Contact Numbers</h4>
                                    <p className="text-gray-400 font-sans">+94 76 262 8498</p>
                                    <p className="text-gray-400 font-sans">+94 74 013 2946</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full flex-shrink-0">
                                    <Mail size={24} className="text-saku-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Queries</h4>
                                    <p className="text-gray-400 font-sans">info@sakujls.lk</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex gap-4">
                            <a href="#" className="h-10 w-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-saku-red hover:border-saku-red transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-saku-red hover:border-saku-red transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Floating Form */}
                    <div className="lg:w-1/2 bg-white p-12 lg:p-20 relative lg:-ml-12 lg:my-12 lg:mr-12 shadow-xl border border-gray-100">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-saku-dark mb-8">Send a Message</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-saku-red transition-colors font-sans"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-saku-red transition-colors font-sans"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-saku-red transition-colors font-sans bg-transparent">
                                    <option>Language Course Query</option>
                                    <option>Visa Assistance</option>
                                    <option>SSW Program</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us how we can help..."
                                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-saku-red transition-colors font-sans resize-none"
                                />
                            </div>

                            <button className="w-full bg-saku-red text-white py-4 font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-saku-dark transition-all group">
                                SUBMIT INQUIRY
                                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
