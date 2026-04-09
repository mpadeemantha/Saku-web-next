"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
    id: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
    size: number;
}

const JapaneseOverlay = () => {
    const [petals, setPetals] = useState<Petal[]>([]);
    
    useEffect(() => {
        const newPetals = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 20,
            duration: 15 + Math.random() * 20,
            size: 5 + Math.random() * 10,
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPetals(newPetals);
    }, []);

    const kanjiElements = [
        { text: "和", meaning: "Harmony", top: "15%", left: "2%" },
        { text: "夢", meaning: "Dream", top: "45%", right: "2%" },
        { text: "道", meaning: "The Way", top: "75%", left: "3%" },
        { text: "心", meaning: "Heart", top: "25%", right: "3%" },
        { text: "学", meaning: "Study", top: "60%", right: "2%" },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Background Kanji - Neo Tokyo Style */}
            {kanjiElements.map((kanji, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    transition={{ duration: 2, delay: i * 0.5 }}
                    className="absolute font-display text-8xl md:text-9xl text-saku-dark leading-none selects-none"
                    style={{
                        top: kanji.top,
                        left: kanji.left,
                        right: kanji.right,
                        writingMode: 'vertical-rl'
                    }}
                >
                    {kanji.text}
                </motion.div>
            ))}

            {/* Floating Sakura Petals */}
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="sakura-petal"
                    style={{
                        left: petal.left,
                        top: "-20px",
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        animation: `float-sakura ${petal.duration}s linear infinite`,
                        animationDelay: `${petal.delay}s`,
                    }}
                />
            ))}

            {/* Side Labels */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden xl:flex flex-col gap-32 opacity-20">
                <span className="writing-vertical text-sm uppercase font-bold tracking-[0.5em] text-saku-dark">
                    TRADITION • EXCELLENCE
                </span>
            </div>
            <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden xl:flex flex-col gap-32 opacity-20">
                <span className="writing-vertical text-sm uppercase font-bold tracking-[0.5em] text-saku-dark">
                    ESTABLISHED 1994
                </span>
            </div>
        </div>
    );
};

export default JapaneseOverlay;
