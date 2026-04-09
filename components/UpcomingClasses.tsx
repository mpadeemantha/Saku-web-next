"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const courses = [
    {
        name: "JLPT N5 (Beginner)",
        date: "April 15, 2024",
        time: "08:30 AM - 12:30 PM",
        days: "Mon / Wed / Fri",
        mode: "Physical",
        status: "Open",
        color: "bg-emerald-600",
    },
    {
        name: "JLPT N4 (Intermediate)",
        date: "April 20, 2024",
        time: "01:30 PM - 05:30 PM",
        days: "Tue / Thu / Sat",
        mode: "Physical",
        status: "Few Seats Left",
        color: "bg-saku-dark",
    },
    {
        name: "Conversational Japanese",
        date: "May 02, 2024",
        time: "06:00 PM - 08:30 PM",
        days: "Weekend Batch",
        mode: "Online / Zoom",
        status: "Open",
        color: "bg-emerald-600",
    },
    {
        name: "SSW Caregiver Prep",
        date: "May 10, 2024",
        time: "09:00 AM - 04:00 PM",
        days: "Full-Time Intensive",
        mode: "Physical",
        status: "Highly Requested",
        color: "bg-saku-red",
    },
];

const UpcomingClasses = () => {
    return (
        <section className="py-32 bg-[#fbfbfb] relative overflow-hidden" id="courses">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm block mb-4">Batches & Intake</span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-saku-dark leading-tight">
                            Secure Your Spot in Our <span className="text-saku-red">Upcoming Classes</span>.
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm font-sans text-base md:text-lg md:text-right">
                        Registration is now open for our mid-2024 intake. Limited seats available per batch to ensure personalized attention.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-zinc-50 border border-zinc-100 p-8 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:border-saku-red/20 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 text-white shadow-sm ${course.color}`}>
                                    {course.status}
                                </span>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-bold text-saku-dark mb-6 pr-12 leading-tight">
                                    {course.name}
                                </h3>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 group/info">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover/info:border-saku-red/30 transition-colors">
                                            <Calendar size={14} className="text-gray-400 group-hover/info:text-saku-red transition-colors" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Starts On</span>
                                            <span className="text-sm font-bold text-saku-dark leading-none mt-1">{course.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group/info">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover/info:border-saku-red/30 transition-colors">
                                            <Clock size={14} className="text-gray-400 group-hover/info:text-saku-red transition-colors" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Schedule</span>
                                            <span className="text-sm font-bold text-saku-dark leading-none mt-1">{course.time}</span>
                                            <span className="text-sm font-medium text-gray-500 mt-1">{course.days}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group/info">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover/info:border-saku-red/30 transition-colors">
                                            <MapPin size={14} className="text-gray-400 group-hover/info:text-saku-red transition-colors" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Mode</span>
                                            <span className="text-sm font-bold text-saku-dark leading-none mt-1">{course.mode}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-between py-4 px-6 border border-zinc-200 group/btn hover:bg-saku-red hover:border-saku-red transition-all duration-500">
                                <span className="text-sm font-bold tracking-[0.2em] group-hover:text-white transition-colors">ENROLL NOW</span>
                                <ArrowRight size={14} className="text-saku-red group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 border-t border-zinc-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">

                        <p className="text-base md:text-lg font-bold text-gray-400 uppercase tracking-widest">
                            Join <span className="text-saku-dark">200+ Students</span> registered for this intake
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users size={18} className="text-saku-red" />
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Classes filling fast for April Batch</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingClasses;
