import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiGit, SiFastapi, SiDjango, SiDocker, 
  SiAmazonwebservices, SiNodedotjs, SiTypescript, SiPython, 
  SiExpress, SiPostgresql, SiMongodb 
} from 'react-icons/si';

const allTech = [
  { icon: SiReact, name: 'React', color: '#61DAFB', desc: 'Frontend', mobile: true },
  { icon: SiPython, name: 'Python', color: '#3776AB', desc: 'Backend', mobile: true },
  { icon: SiExpress, name: 'Express', color: '#FFFFFF', desc: 'Framework', mobile: true },
  { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900', desc: 'Cloud', mobile: true },
  { icon: SiPostgresql, name: 'SQL', color: '#4169E1', desc: 'Database', mobile: true },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248', desc: 'NoSQL', mobile: true },
  { icon: SiDocker, name: 'Docker', color: '#2496ED', desc: 'DevOps', mobile: false },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', desc: 'Superset', mobile: false },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', desc: 'Styling', mobile: false },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933', desc: 'Runtime', mobile: false },
  { icon: SiGit, name: 'Git', color: '#F05032', desc: 'VCS', mobile: false },
  { icon: SiFastapi, name: 'FastAPI', color: '#009688', desc: 'Python API', mobile: false },
  { icon: SiDjango, name: 'Django', color: '#092E20', desc: 'Python Web', mobile: false },
];

function TechStack() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#050505]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- COOL HEADING --- */}
        <div className="flex flex-col items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8603dc] via-[#0bd9c8] to-[#8603dc] bg-[length:200%_auto] animate-gradient-x">Arsenal</span>
            </h2>
            {/* Animated Underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[4px] mt-2 bg-gradient-to-r from-[#8603dc] to-[#0bd9c8] rounded-full"
            />
          </motion.div>
          <p className="mt-6 text-gray-400 font-medium tracking-[0.2em] uppercase text-xs">
            Powered by the latest industry standards
          </p>
        </div>

        {/* --- DESKTOP GRID --- */}
        <div className="hidden sm:flex flex-wrap justify-center gap-8">
          {allTech.map((tech) => (
            <TechCard 
              key={tech.name} 
              tech={tech} 
              isHovered={hoveredName === tech.name}
              onHover={setHoveredName}
            />
          ))}
        </div>

        {/* --- MOBILE 4+2 GRID --- */}
        <div className="sm:hidden flex flex-col items-center gap-6">
          {/* Row 1: 4 Icons */}
          <div className="grid grid-cols-4 gap-4 w-full">
            {allTech.filter(t => t.mobile).slice(0, 4).map((tech) => (
              <TechCard 
                key={tech.name} 
                tech={tech} 
                isHovered={hoveredName === tech.name}
                onHover={setHoveredName}
              />
            ))}
          </div>
          {/* Row 2: 2 Icons centered */}
          <div className="grid grid-cols-2 gap-4 w-[60%]">
            {allTech.filter(t => t.mobile).slice(4, 6).map((tech) => (
              <TechCard 
                key={tech.name} 
                tech={tech} 
                isHovered={hoveredName === tech.name}
                onHover={setHoveredName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, isHovered, onHover }: any) {
  const Icon = tech.icon;

  return (
    <div
      className="relative group"
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.05 }}
        className={`
          relative flex items-center justify-center 
          w-16 h-16 md:w-24 md:h-24 rounded-2xl 
          bg-[#0a0a0a] border-[1px] transition-all duration-500
          ${isHovered ? 'border-white/40 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]' : 'border-white/10'}
        `}
      >
        {/* Colorful Glow behind icon */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundColor: tech.color }}
        />

        <Icon 
          size={36} 
          style={{ 
            color: tech.color, 
            filter: `drop-shadow(0 0 10px ${tech.color}60)` 
          }} 
          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
        />

        {/* --- TOOLTIP --- */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -60 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 px-4 py-2 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] pointer-events-none"
            >
              <span className="text-black text-[10px] font-black uppercase tracking-tighter whitespace-nowrap">
                {tech.name} — {tech.desc}
              </span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default TechStack;