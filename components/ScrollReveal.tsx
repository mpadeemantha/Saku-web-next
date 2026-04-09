"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    y?: number;
    delay?: number;
    duration?: number;
}

const ScrollReveal = ({
    children,
    width = "100%",
    y = 30,
    delay = 0.2,
    duration = 0.8
}: ScrollRevealProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                initial={{ opacity: 0, y: y }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: [0.22, 1, 0.36, 1] // Custom quint ease-out
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
