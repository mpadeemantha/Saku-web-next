"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const newsItems = [
    {
        title: "New Cookery Spoken Course",
        date: "Feb 15, 2024",
        category: "News",
        summary: "Learn authentic Japanese culinary skills while improving your spoken Japanese.",
        image: "/student/ff-saku.jpg",
    },
    {
        title: "JLPT N5 Enrollment Open",
        date: "Feb 10, 2024",
        category: "Enrollment",
        summary: "Limited seats available for the upcoming N5 intensive batch starting next month.",
        image: "/student/main.jpg",
    },
];

const festivals = [
    { name: "Sakura Festival", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000" },
    { name: "Nebuta Matsuri", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000" },
    { name: "Gion Matsuri", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000" },
    { name: "Tanabata", image: "https://images.unsplash.com/photo-1542159416-09292ade61bd?q=80&w=1000" },
];

const CulturalNews = () => {
    return (
        <section className="py-24 bg-[#fbfbfb] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Community</span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-saku-dark">Recent News & Events</h2>
                    </div>
                    <button className="text-sm font-bold tracking-widest border-b-2 border-saku-red pb-1 hover:text-saku-red transition-colors">
                        VIEW ALL ARCHIVES
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-sm group hover:shadow-xl transition-shadow duration-500"
                        >
                            <div className="relative w-full sm:w-1/2 h-48 sm:h-auto overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                                <span className="text-sm font-bold text-saku-red uppercase mb-2">{item.category}</span>
                                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-base md:text-lg mb-4 leading-relaxed">{item.summary}</p>
                                <span className="text-sm text-gray-400 font-sans">{item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <div className="mt-24">
                    <div className="mb-12">
                        <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Cultural Festivals</span>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 text-saku-dark">Japanese Traditions</h2>
                    </div>

                    <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x">
                        {festivals.map((festival, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-72 h-96 relative group snap-center cursor-pointer"
                                whileHover={{ y: -10 }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                <Image
                                    src={festival.image}
                                    alt={festival.name}
                                    fill
                                    className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h4 className="font-display text-2xl font-bold text-white tracking-wide">
                                        {festival.name}
                                    </h4>
                                    <div className="w-8 h-1 bg-saku-red mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div> */}
            </div>


        </section>
    );
};

export default CulturalNews;
