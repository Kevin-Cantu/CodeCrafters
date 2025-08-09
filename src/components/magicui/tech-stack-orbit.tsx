"use client";

import { cn } from "@/lib/utils";

const technologies = [
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "Next.js", icon: "▲", color: "text-white" },
  { name: "TypeScript", icon: "TS", color: "text-blue-500" },
  { name: "Node.js", icon: "🟢", color: "text-green-400" },
  { name: "Python", icon: "🐍", color: "text-yellow-400" },
  { name: "AWS", icon: "☁️", color: "text-orange-400" },
];

export function TechStackOrbit() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Orbiting tech icons */}
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute animate-spin"
            style={{
              animationDuration: `${20 + index * 5}s`,
              animationDirection: index % 2 === 0 ? "normal" : "reverse",
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              style={{
                transform: `rotate(${index * 60}deg) translateX(${200 + index * 30}px) rotate(-${index * 60}deg)`,
              }}
            >
              <span className={cn("text-lg font-bold", tech.color)}>
                {tech.icon}
              </span>
            </div>
          </div>
        ))}
        
        {/* Central glow */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl animate-pulse" />
      </div>
    </div>
  );
}