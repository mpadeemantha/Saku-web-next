"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Send, Clock } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        label: "Our Location",
        lines: ["07 Turnour Rd,", "Colombo 00800, Sri Lanka"],
    },
    {
        icon: Phone,
        label: "Contact Numbers",
        lines: ["+94 76 262 8498", "+94 74 013 2946"],
    },
    {
        icon: Mail,
        label: "Email Us",
        lines: ["info@sakujls.lk",],
    },
    {
        icon: Clock,
        label: "Opening Hours",
        lines: ["Mon – Fri: 9:00 AM – 5:00 PM",],
    },
];

const Contact = () => {
    return (
        <section className="py-16 md:py-20 bg-white" id="contact">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* ── LEFT: Info Panel ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-5/12 bg-saku-dark text-white rounded-2xl p-8 md:p-10 flex flex-col"
                    >
                        <span className="text-saku-red text-overline mb-3 block">Reach Us</span>
                        <h2 className="font-display text-section-title font-bold mb-8 leading-tight">Head Office</h2>

                        <div className="space-y-6 flex-grow">
                            {contactDetails.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon size={18} className="text-saku-red" />
                                    </div>
                                    <div>
                                        <p className="text-label text-white/50 mb-0.5">{item.label}</p>
                                        {item.lines.map((line, j) => (
                                            <p key={j} className="text-body text-white/80">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10 flex gap-3">
                            <a href="https://www.instagram.com/sakujls/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center hover:bg-saku-red hover:border-saku-red transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="https://www.facebook.com/sakujls/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center hover:bg-saku-red hover:border-saku-red transition-all">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:w-7/12 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10"
                    >
                        <h3 className="font-display text-heading font-bold text-saku-dark mb-2">Send a Message</h3>
                        <p className="text-body text-slate-400 mb-8">We typically respond within one business day.</p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-label text-slate-500 block mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-body text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-saku-red/30 focus:border-saku-red transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-label text-slate-500 block mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-body text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-saku-red/30 focus:border-saku-red transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-label text-slate-500 block mb-1.5">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+94 XX XXX XXXX"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-body text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-saku-red/30 focus:border-saku-red transition-all"
                                />
                            </div>

                            <div>
                                <label className="text-label text-slate-500 block mb-1.5">I'm inquiring about</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-body text-slate-700 focus:outline-none focus:ring-2 focus:ring-saku-red/30 focus:border-saku-red transition-all">
                                    <option>Language Course Query</option>
                                    <option>Visa Assistance</option>
                                    <option>SSW Program</option>
                                    <option>Scholarship Information</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-label text-slate-500 block mb-1.5">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us how we can help you..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-body text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-saku-red/30 focus:border-saku-red transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-saku-red text-white py-3.5 rounded-xl font-bold text-label tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-saku-dark transition-all group active:scale-[0.98]"
                            >
                                SUBMIT INQUIRY
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
