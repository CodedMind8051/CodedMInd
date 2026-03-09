import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Film, Music, Quote as QuoteIcon, Sparkles, ChevronRight, ArrowLeft, ExternalLink, Star } from "lucide-react";

// --- Data ---
const FAVORITES = {
    movies: [
        { title: "Attack on Titan", year: "2013", genre: "Anime", rating: "9.1", link: "https://www.imdb.com/title/tt2560140/" },
        { title: "Death Note", year: "2006", genre: "Anime", rating: "8.9", link: "https://www.imdb.com/title/tt0877057/" },
        { title: "The Social Network", year: "2010", genre: "Biography", rating: "7.8", link: "https://www.imdb.com/title/tt1285016/" },
        { title: "Vinland Saga", year: "2019", genre: "Anime", rating: "8.8", link: "https://www.imdb.com/title/tt10213332/" },
        { title: "Code Geass", year: "2006", genre: "Anime", rating: "8.7", link: "https://www.imdb.com/title/tt0994314/" },
        { title: "Dark", year: "2017", genre: "Sci-Fi Thriller", rating: "8.7", link: "https://www.imdb.com/title/tt5753856/" },
        { title: "Breaking Bad", year: "2008", genre: "Crime Drama", rating: "9.5", link: "https://www.imdb.com/title/tt0903747/" },
        { title: "Jobs", year: "2013", genre: "Biography", rating: "6.0", link: "https://www.imdb.com/title/tt2357129/" },
        { title: "Steve Jobs", year: "2015", genre: "Biography", rating: "7.1", link: "https://www.imdb.com/title/tt2080374/" },
        { title: "Inception", year: "2010", genre: "Sci-Fi", rating: "8.8", link: "https://www.imdb.com/title/tt1375666/" },
        { title: "A Beautiful Mind", year: "2001", genre: "Biography", rating: "8.2", link: "https://www.imdb.com/title/tt0268978/" },
        { title: "The Theory of Everything", year: "2014", genre: "Biography", rating: "7.7", link: "https://www.imdb.com/title/tt2980516/" },
        { title: "Good Will Hunting", year: "1997", genre: "Drama", rating: "8.3", link: "https://www.imdb.com/title/tt0119217/" },
        { title: "Game of Thrones", year: "2011", genre: "Fantasy", rating: "9.2", link: "https://www.imdb.com/title/tt0944947/" },
        { title: "Dune", year: "2021", genre: "Sci-Fi", rating: "8.0", link: "https://www.imdb.com/title/tt1160419/" },
        { title: "F1: The Movie", year: "2025", genre: "Sports", rating: "7.6", link: "https://www.imdb.com/title/tt16311594/" },

    ],
    music: [
  { 
    artist: "The Starlite Orchestra & Singers", 
    track: "Creep (The Social Network)", 
    genre: "Choral/Alternative Rock Cover", 
    link: "https://open.spotify.com/track/1pQNfVB69CxbwEScMZydvx" 
  },
  { 
    artist: "Various Artists (Album)", 
    track: "Openhammer (Album)", 
    genre: "Unknown - Album Link", 
    link: "https://open.spotify.com/album/53L5l1xHNhw9mrDsRQASJb" 
  },
  { 
    artist: "Lady Gaga, Bruno Mars", 
    track: "Die With A Smile", 
    genre: "Pop Soul/Pop Rock", 
    link: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe" 
  },
  { 
    artist: "Hans Zimmer", 
    track: "Kiss the Ring", 
    genre: "Film Score/Soundtrack", 
    link: "https://open.spotify.com/track/61Ps2sXXwiYCcyAynt81JI" 
  },
  { 
    artist: "WEARETHEGOOD.", 
    track: "Outrun (when I was young my daddy says)", 
    genre: "Rap/Hip-Hop", 
    link: "https://open.spotify.com/track/42Xl2G8iLEOaoBU6A3ezI3" 
  },
  { 
    artist: "Threeory (Progressive Rock Version - Original by A.R. Rahman)", 
    track: "Chinni Chinni Aasai (Animal)", 
    genre: "Progressive Rock/Film Music", 
    link: "https://open.spotify.com/track/0ga6aebmznCHi0giI2yRxR" 
  },
  { 
    artist: "Apparat, Soap&Skin", 
    track: "Goodbye (Theme from Dark)", 
    genre: "Electronic/Ambient", 
    link: "https://open.spotify.com/track/6qMcBfQ3Dy3Cn6q27tcQDR" 
  },
  { 
    artist: "Anuv Jain", 
    track: "Husn", 
    genre: "Indie/Acoustic Pop", 
    link: "https://open.spotify.com/track/0TL0LFcwIBF5eX7arDIKxY" 
  },
  { 
    artist: "Shashwat Sachdev, Reble, Sonu Nigam", 
    track: "Move - Yeh Ishq Ishq (Dhurandhar)", 
    genre: "Bollywood/Hip-Hop Fusion", 
    link: "https://open.spotify.com/track/3SVgtZSEqPNga5pKOJLCDZ" 
  },
  { 
    artist: "Walker & 1of1", 
    track: "Stay With Me (Lost in Starlight)", 
    genre: "Soundtrack/Pop", 
    link: "https://open.spotify.com/track/3ITytxiLwOp5lSyVelf4YA" 
  },
  { 
    artist: "Meego & 1of1", 
    track: "Purple Stereo (Lost in Starlight)", 
    genre: "Soundtrack/Electronic", 
    link: "https://open.spotify.com/track/0hL1v6JXZhU5OlAMsyKrR8" 
  },
  { 
    artist: "Hans Zimmer", 
    track: "Interstellar (Original Motion Picture Soundtrack) - Album", 
    genre: "Film Score/Orchestral", 
    link: "https://open.spotify.com/album/3B61kSKTxlY36cYgzvf3cP" 
  }
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
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
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
                            <CategoryCard icon={<Film color='#60a5fa' size={16} />} title="Movies & Series" color="blue" onClick={() => setView('movies')} />
                            <CategoryCard icon={<Music color='#A78BFA' size={16} />} title="Music Taste" color="purple" onClick={() => setView('music')} />
                        </div>

                        <motion.div variants={FADE_UP} initial="hidden" animate="visible">
                            <QuoteCard quote={dailyQuote} />
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div key="details" {...pageTransition} className="space-y-4">
                        <BackButton onClick={() => setView('main')} label={`Back to Personal`} />

                        <div className="grid gap-2 max-h-[60vh] overflow-y-auto pr-2 ">
                            {view === 'movies' ? (
                                FAVORITES.movies.map((item, i) => (
                                    <DetailItem
                                        key={i}
                                        title={item.title}
                                        meta={`${item.genre} • ${item.year}`}
                                        link={item.link}
                                        right={<span className="text-[10px] text-yellow-500 flex items-center gap-1">{item.rating} <Star size={10} /></span>}
                                    />
                                ))
                            ) : (
                                FAVORITES.music.map((item, i) => (
                                    <DetailItem
                                        key={i}
                                        title={item.track}
                                        meta={item.artist}
                                        link={item.link}
                                        right={<Music color='#A78BFA' size={12} className="text-zinc-600" />}
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

const CategoryCard = ({ icon, title, onClick }: any) => (
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