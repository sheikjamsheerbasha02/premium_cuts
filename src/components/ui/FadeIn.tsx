"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    viewportMargin?: string;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    fullWidth = false,
    viewportMargin = "-100px",
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: viewportMargin });

    const getHiddenState = () => {
        switch (direction) {
            case "up": return { y: 40, opacity: 0 };
            case "down": return { y: -40, opacity: 0 };
            case "left": return { x: 40, opacity: 0 };
            case "right": return { x: -40, opacity: 0 };
            case "none": return { opacity: 0 };
            default: return { y: 40, opacity: 0 };
        }
    };

    const variants: Variants = {
        hidden: getHiddenState(),
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom eases for premium feel
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
