"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const spring = useSpring(0, { stiffness: 50, damping: 30 });
    const displayValue = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <div ref={ref} className="group relative flex flex-col items-center justify-center p-8 bg-white border border-gray-100 transition-all duration-500 hover:shadow-xl hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-100/50 group-hover:bg-saku-red transition-all duration-500" />
            <div className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-saku-dark mb-2 flex items-baseline">
                <motion.span>{displayValue}</motion.span>
                <span className="text-saku-red ml-1">{suffix}</span>
            </div>
            <p className="font-sans text-base md:text-lg font-bold tracking-widest text-gray-400 uppercase">
                {label}
            </p>

            {/* Decorative dots in corners */}
            <div className="absolute bottom-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-24 bg-[#fbfbfb] overflow-hidden relative">


            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard value={500} suffix="+" label="Students Trained" />
                    <StatCard value={10} suffix="+" label="Years Experience" />
                    <StatCard value={10} suffix="+" label="Partner Institutes" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
