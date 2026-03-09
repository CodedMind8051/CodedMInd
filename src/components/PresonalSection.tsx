import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Film, Music, Quote as QuoteIcon, Sparkles, ChevronRight, ArrowLeft, ExternalLink, Star } from "lucide-react";

// --- Data ---
const FAVORITES = {
    movies: [
        { title: "Breaking Bad", year: "2008", genre: "Crime Drama", rating: "9.5", link: "https://www.imdb.com/title/tt0903747/" },
        { title: "Game of Thrones", year: "2011", genre: "Fantasy", rating: "9.2", link: "https://www.imdb.com/title/tt0944947/" },
        { title: "Dune", year: "2021", genre: "Sci-Fi", rating: "8.0", link: "https://www.imdb.com/title/tt1160419/" },
        { title: "F1: Drive to Survive", year: "2019", genre: "Docuseries", rating: "8.5", link: "https://www.imdb.com/title/tt8281050/" },
        { title: "The Social Network", year: "2010", genre: "Biography", rating: "7.8", link: "https://www.imdb.com/title/tt1285016/" },
        { title: "Attack on Titan", year: "2013", genre: "Anime", rating: "9.1", link: "https://www.imdb.com/title/tt2560140/" },
        { title: "Death Note", year: "2006", genre: "Anime", rating: "8.9", link: "https://www.imdb.com/title/tt0877057/" },
        { title: "Vinland Saga", year: "2019", genre: "Anime", rating: "8.8", link: "https://www.imdb.com/title/tt10213332/" },
        { title: "Code Geass", year: "2006", genre: "Anime", rating: "8.7", link: "https://www.imdb.com/title/tt0994314/" },
        { title: "Dark", year: "2017", genre: "Sci-Fi Thriller", rating: "8.7", link: "https://www.imdb.com/title/tt5753856/" },
        { title: "Jobs", year: "2013", genre: "Biography", rating: "6.0", link: "https://www.imdb.com/title/tt2357129/" },
        { title: "Steve Jobs", year: "2015", genre: "Biography", rating: "7.1", link: "https://www.imdb.com/title/tt2080374/" },
        { title: "Inception", year: "2010", genre: "Sci-Fi", rating: "8.8", link: "https://www.imdb.com/title/tt1375666/" },
        { title: "A Beautiful Mind", year: "2001", genre: "Biography", rating: "8.2", link: "https://www.imdb.com/title/tt0268978/" },
        { title: "The Theory of Everything", year: "2014", genre: "Biography", rating: "7.7", link: "https://www.imdb.com/title/tt2980516/" },
        { title: "Good Will Hunting", year: "1997", genre: "Drama", rating: "8.3", link: "https://www.imdb.com/title/tt0119217/" },
    ],
    music: [
        { artist: "Kavinsky", track: "OutRun", genre: "Synthwave", link: "https://open.spotify.com/album/2I6S8O9W8mX9Fm1N4u4I0D" },
        { artist: "Hans Zimmer", track: "Dune Soundtrack", genre: "Score", link: "https://open.spotify.com/album/3B689U9vY198I66o693eS0" },
        { artist: "Trent Reznor", track: "Social Network", genre: "Ambient", link: "https://open.spotify.com/album/1OvpGfWj1Xh6yLw70lUvK2" },
        { artist: "Anuv Jain", track: "Gul", genre: "Indie Pop", link: "https://open.spotify.com/artist/466p9SAnY88I95bs69dYpY" },
        { artist: "Ludwig Göransson", track: "Oppenheimer", genre: "Classical", link: "https://open.spotify.com/album/4X77Uv6XOfPq75yE3Y5IuO" },
        { artist: "Miki Matsubara", track: "Stay With Me", genre: "City Pop", link: "https://open.spotify.com/track/2v9y7vYl9S8G2xM3C3V2Y6" },
        { artist: "Lost in Starlight", track: "Starlight", genre: "Lo-Fi", link: "https://open.spotify.com/track/5uCax9HTNlzG9Y799vC9S" },
    ]
};

const QUOTES = [
    { text: "Assuring history repeats anew... and again it all comes to nothing.", author: "Dark", source: "Netflix" },
    { text: "Being alive means that you will eventually die.", author: "AOT", source: "Anime" },
    { text: "One day you leave this world behind.", author: "Avicii", source: "Lyrics" },
    { text: "Tomorrow never comes until it's too late.", author: "Reflection", source: "Personal" },
    { text: "To be alive itself is a beautiful thing.", author: "AOT", source: "Anime" },
    { text: "Practice like you never won. Perform like you never lost.", author: "Wisdom", source: "Unknown" },
    { text: "Victory is always won in the dark but celebrated in the light.", author: "Strategy", source: "Thought" },
    { text: "Change is the only constant.", author: "Heraclitus", source: "Philosophy" },
    { text: "I'll take a potato chip... AND EAT IT!", author: "Light Yagami", source: "Death Note" },
    { text: "I am the one who knocks!", author: "Walter White", source: "Breaking Bad" },
    { text: "If you win, you live. If you lose, you die. If you don't fight, you can't win!", author: "Eren Yeager", source: "Attack on Titan" },
    { text: "Everything in this world is just a game of chess.", author: "Lelouch", source: "Code Geass" },
];

// --- Logic ---
const getQuoteOfTheDay = () => {
    const today = new Date().getDate();
    return QUOTES[today % QUOTES.length];
};

const pageTransition = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
    transition: { type: "spring", stiffness: 300, damping: 30 }
} as const;

const FADE_UP = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
} as const;

const PersonalSection = () => {
    const [view, setView] = useState<'main' | 'movies' | 'music'>('main');
    const dailyQuote = getQuoteOfTheDay();

    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-6 bg-transparent text-zinc-100 font-sans">
            
            <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
                    Personal <Sparkles className="w-3 h-3 text-zinc-500" />
                </h2>
                <div className="h-px flex-1 bg-zinc-800/50" />
            </motion.div>

            <AnimatePresence mode="wait">
                {view === 'main' ? (
                    <motion.div key="main" {...pageTransition} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <CategoryCard icon={<Film size={16} />} title="Movies & Series" color="blue" onClick={() => setView('movies')} />
                            <CategoryCard icon={<Music size={16} />} title="Music Taste" color="purple" onClick={() => setView('music')} />
                        </div>

                        <motion.div variants={FADE_UP} initial="hidden" animate="visible">
                            <QuoteCard quote={dailyQuote} />
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div key="details" {...pageTransition} className="space-y-4">
                        <BackButton onClick={() => setView('main')} label={`Back to Personal`} />
                        
                        <div className="grid gap-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                            {view === 'movies' ? (
                                FAVORITES.movies.map((item, i) => (
                                    <DetailItem 
                                        key={i} 
                                        title={item.title} 
                                        meta={`${item.genre} • ${item.year}`} 
                                        link={item.link}
                                        right={<span className="text-[10px] text-yellow-500/50 flex items-center gap-1">{item.rating} <Star size={10} /></span>} 
                                    />
                                ))
                            ) : (
                                FAVORITES.music.map((item, i) => (
                                    <DetailItem 
                                        key={i} 
                                        title={item.track} 
                                        meta={item.artist} 
                                        link={item.link}
                                        right={<Music size={12} className="text-zinc-600" />} 
                                    />
                                ))
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Sub-Components ---

const CategoryCard = ({ icon, title, color, onClick }: any) => (
    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Card onClick={onClick} className="bg-zinc-950/40 backdrop-blur-sm border-zinc-900 hover:border-zinc-700/50 transition-all duration-300 group cursor-pointer overflow-hidden">
            <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-900 rounded-md border border-zinc-800">
                        <span className="text-zinc-400">{icon}</span>
                    </div>
                    <h3 className="text-sm font-medium tracking-wide text-zinc-300">{title}</h3>
                </div>
                <ChevronRight size={14} className="text-zinc-700 group-hover:text-zinc-400 transition-transform group-hover:translate-x-0.5" />
            </CardContent>
        </Card>
    </motion.div>
);

const DetailItem = ({ title, meta, right, link }: any) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="p-3 bg-zinc-950/20 border border-zinc-900/50 rounded-md flex items-center justify-between group-hover:bg-zinc-900/40 transition-all"
        >
            <div className="flex flex-col">
                <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                    {title} <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 text-zinc-500 transition-opacity" />
                </h4>
                <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">{meta}</p>
            </div>
            {right}
        </motion.div>
    </a>
);

const QuoteCard = ({ quote }: any) => (
    <Card className="bg-zinc-950/20 border-zinc-900 border-dashed relative overflow-hidden group">
        <CardContent className="p-6 md:p-8 flex flex-col gap-4">
            <div className="relative">
                <QuoteIcon size={20} className="text-zinc-800 absolute -top-4 -left-4 opacity-50" />
                <p className="text-base md:text-lg font-medium text-zinc-400 leading-relaxed italic">
                    "{quote.text}"
                </p>
            </div>
            <div className="w-full flex justify-end items-center gap-2">
                <div className="h-px w-4 bg-zinc-800" />
                <cite className="not-italic text-[10px] uppercase tracking-widest font-bold text-zinc-600">
                    {quote.author} <span className="ml-1 opacity-50">// {quote.source}</span>
                </cite>
            </div>
        </CardContent>
    </Card>
);

const BackButton = ({ onClick, label }: any) => (
    <button onClick={onClick} className="group flex items-center gap-2 py-1.5 text-zinc-500 hover:text-zinc-100 transition-all duration-300 mb-6">
        <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-[0.25em]">{label}</span>
    </button>
);

export default PersonalSection;