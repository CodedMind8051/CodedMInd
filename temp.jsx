import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Film, Music, Quote as QuoteIcon, Sparkles, ChevronRight } from "lucide-react";

const QUOTES = [
    { text: "I'll take a potato chip... AND EAT IT!", author: "Light Yagami", source: "Death Note" },
    { text: "The universe is under no obligation to make sense to you.", author: "Neil deGrasse Tyson", source: "Science" },
    { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein", source: "Physics" },
];

const getQuoteOfTheDay = () => {
    const today = new Date().getDate();
    return QUOTES[today % QUOTES.length];
};

const FADE_UP = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
} as const;

const PersonalSection = () => {
    const dailyQuote = getQuoteOfTheDay();

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-6 bg-transparent text-zinc-100 font-sans"
        >
            {/* Ultra Slim Header */}
            <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
                    Personal <Sparkles className="w-3 h-3 text-zinc-500" />
                </h2>
                  <span className="text-xs font-mono text-zinc-600 tracking-tighter uppercase"></span>
                <div className="h-px flex-1 bg-zinc-800/50" />
            </motion.div>

            {/* Slimmer Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                
                {/* Slim Movies Card */}
                <motion.div variants={FADE_UP} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Card className="bg-zinc-950/40 backdrop-blur-sm border-zinc-900 hover:border-zinc-700/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                        <CardContent className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-zinc-900 text-blue-400 rounded-md border border-zinc-800 group-hover:text-blue-400 group-hover:border-blue-900/50 transition-colors">
                                    <Film size={16} />
                                </div>
                                <h3 className="text-sm font-medium tracking-wide text-zinc-300">Movies & Series</h3>
                            </div>
                            <ChevronRight size={14} className="text-zinc-700 group-hover:text-zinc-400 transition-transform group-hover:translate-x-0.5" />
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Slim Music Card */}
                <motion.div variants={FADE_UP} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Card className="bg-zinc-950/40 backdrop-blur-sm border-zinc-900 hover:border-zinc-700/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                        <CardContent className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-zinc-900 text-purple-400 rounded-md border border-zinc-800 group-hover:text-purple-400 group-hover:border-purple-900/50 transition-colors">
                                    <Music size={16} />
                                </div>
                                <h3 className="text-sm font-medium tracking-wide text-zinc-300">Music Taste</h3>
                            </div>
                            <ChevronRight size={14} className="text-zinc-700 group-hover:text-zinc-400 transition-transform group-hover:translate-x-0.5" />
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Slim Dynamic Quote with Author on Right */}
            <motion.div variants={FADE_UP}>
                <Card className="bg-zinc-950/20 border-zinc-900 border-dashed relative overflow-hidden group">
                    <CardContent className="p-6 md:p-8 flex flex-col gap-4">
                        <div className="relative">
                            <QuoteIcon size={20} className="text-zinc-800 absolute -top-2 -left-4" />
                            <p className="text-base md:text-lg font-medium text-zinc-400 leading-relaxed italic">
                                "{dailyQuote.text}"
                            </p>
                        </div>
                        
                        {/* Author Aligned Bottom Right */}
                        <div className="w-full flex justify-end items-center gap-2">
                            <div className="h-px w-4 bg-zinc-800" />
                            <cite className="not-italic text-[10px] uppercase tracking-widest font-bold text-zinc-600">
                                {dailyQuote.author} <span className="text-zinc-800 ml-1">// {dailyQuote.source}</span>
                            </cite>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default PersonalSection;