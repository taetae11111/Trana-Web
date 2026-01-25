
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button.tsx";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(52, 211, 153, ${0.05 + i * 0.01})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-emerald-400/20"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle = "",
    onOpenModal,
}: {
    title?: string;
    subtitle?: string;
    onOpenModal?: () => void;
}) {
    // Split by newline first, then by spaces to maintain layout
    const lines = title.split("\n");

    return (
        <div className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#022c22]">
            <div className="absolute inset-0">
                {/* Green-focused radial and linear gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-[1.05]">
                        {lines.map((line, lineIndex) => (
                            <div key={lineIndex} className="block">
                                {line.split(" ").map((word, wordIndex) => (
                                    <span
                                        key={wordIndex}
                                        className="inline-block mr-3 last:mr-0"
                                    >
                                        {word.split("").map((letter, letterIndex) => (
                                            <motion.span
                                                key={`${lineIndex}-${wordIndex}-${letterIndex}`}
                                                initial={{ y: 50, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    delay:
                                                        lineIndex * 0.2 +
                                                        wordIndex * 0.1 +
                                                        letterIndex * 0.03,
                                                    type: "spring",
                                                    stiffness: 150,
                                                    damping: 25,
                                                }}
                                                className="inline-block text-white"
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-emerald-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <div className="flex items-center justify-center">
                        <div
                            className="inline-block group relative p-px rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 transition-all duration-300"
                        >
                            <Button
                                variant="ghost"
                                onClick={onOpenModal}
                                className="rounded-[1.15rem] px-10 py-7 text-lg font-bold bg-emerald-500 hover:bg-emerald-400 text-white border-none transition-all duration-300 group-hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30"
                            >
                                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                    지금 무료로 시작하기
                                </span>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
