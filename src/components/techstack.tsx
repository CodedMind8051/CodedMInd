import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiGit, SiFastapi, SiDjango, SiDocker,
  SiAmazonwebservices, SiNodedotjs, SiTypescript, SiPython,
  SiExpress, SiPostgresql, SiMongodb, SiNextdotjs
} from 'react-icons/si';

const allTech = [
  { icon: SiReact, name: 'React', color: '#61DAFB', desc: 'Frontend', mobile: true },
  { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF', desc: 'Framework', mobile: true },
  { icon: SiExpress, name: 'Express', color: '#FFFFFF', desc: 'Framework', mobile: true },
  { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900', desc: 'Cloud', mobile: true },
  { icon: SiPostgresql, name: 'SQL', color: '#4169E1', desc: 'Database', mobile: true },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248', desc: 'NoSQL', mobile: true },
  { icon: SiDocker, name: 'Docker', color: '#2496ED', desc: 'DevOps', mobile: false },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', desc: 'Superset', mobile: false },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', desc: 'Styling', mobile: false },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933', desc: 'Runtime', mobile: false },
  { icon: SiGit, name: 'Git', color: '#F05032', desc: 'VCS', mobile: false },
  { icon: SiPython, name: 'Python', color: '#3776AB', desc: 'Backend', mobile: false },
  { icon: SiFastapi, name: 'FastAPI', color: '#009688', desc: 'Python API', mobile: false },
  { icon: SiDjango, name: 'Django', color: '#092E20', desc: 'Python Web', mobile: false },
];

function TechStack() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- PREMIUM HEADING --- */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-100">
              Tech Arsenal
            </h2>
            {/* Subtle Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] mt-3 bg-gradient-to-r from-transparent via-neutral-600 to-transparent rounded-full"
            />
          </motion.div>
          <p className="mt-4 sm:mt-6 text-neutral-500 font-light tracking-wider text-xs sm:text-sm">
            POWERED BY INDUSTRY STANDARDS
          </p>
        </div>

        {/* --- DESKTOP GRID --- */}
        <div className="hidden sm:flex flex-wrap justify-center gap-6 md:gap-8">
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
          <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
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
          <div className="grid grid-cols-2 gap-3 w-[55%] max-w-[200px]">
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
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`
          relative flex items-center justify-center 
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl
          bg-neutral-900/50 backdrop-blur-sm border transition-all duration-500
          ${isHovered
            ? 'border-neutral-600 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]'
            : 'border-neutral-800/50'
          }
        `}
      >
        {/* Subtle Colored Glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ backgroundColor: tech.color }}
        />

        <Icon
          size={window.innerWidth < 640 ? 28 : 36}
          style={{ color: tech.color }}
          className="relative z-10 transition-all duration-500 group-hover:scale-110"
        />

        {/* --- PREMIUM TOOLTIP --- */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -50 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute z-50 px-4 py-2 bg-neutral-100 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.3)] pointer-events-none"
            >
              <span className="text-neutral-900 text-[11px] font-medium tracking-wide whitespace-nowrap">
                {tech.name} · {tech.desc}
              </span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-100 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default TechStack;