
// Premium, responsive techstack with tooltips and subtle hover animation
import { SiReact, SiAndroid, SiTailwindcss, SiGit, SiFastapi, SiDjango, SiDocker, SiAmazonwebservices, SiNodedotjs, SiTypescript, SiPython, SiExpress, SiPostgresql, SiMongodb } from 'react-icons/si'
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"

const techs = [
  { icon: SiReact, color: "#08dcff", name: "React" },
  { icon: SiTailwindcss, color: "#1dc0cd", name: "Tailwind" },
  { icon: SiNodedotjs, color: "#85c00a", name: "Node.js" },
  { icon: SiPython, color: "#f7ce43", name: "Python" },
  { icon: SiExpress, color: "#fcfaf5", name: "Express" },
  { icon: SiPostgresql, color: "#376695", name: "PostgreSQL" },
  { icon: SiMongodb, color: "#08ec68", name: "MongoDB" },
  { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
  { icon: SiGit, color: "#f05032", name: "Git" },
  { icon: SiDocker, color: "#2496ed", name: "Docker" },
  { icon: SiAmazonwebservices, color: "#ff9900", name: "AWS" },
  { icon: SiFastapi, color: "#009688", name: "FastAPI" },
  { icon: SiDjango, color: "#096e48", name: "Django" },
  { icon: SiAndroid, color: "#3ddc84", name: "Android" }
]

function Techstack() {
  // Responsive flex grid, subtle hover, tooltips for clarity
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center w-full py-2">
      {techs.map((tech, idx) => {
        const Icon = tech.icon
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                key={idx}
                className="p-2 md:p-3 rounded-lg bg-[#171717] border border-[#222] hover:border-[#0bd9c8] transition-all duration-200 flex flex-col items-center justify-center cursor-pointer"
                style={{ minWidth: 48 }}
              >
                <Icon size={28} style={{ color: tech.color }} className="transition-transform duration-200 hover:-translate-y-1" />
              </div>
            </TooltipTrigger>
            <TooltipContent>{tech.name}</TooltipContent>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default Techstack
// Changes:
// - Replaced single flex row with a responsive grid for better layout on all screens
// - Added tooltips for each tech for clarity and accessibility
// - Subtle hover animation for premium feel
// - Each icon is in a card for a more modern, premium look
// Impact: More readable, accessible, and visually appealing tech stack section