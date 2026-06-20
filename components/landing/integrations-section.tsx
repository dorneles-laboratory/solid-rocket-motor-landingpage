"use client";

import { useEffect, useState, useRef } from "react";
import { Cpu, Server, Atom, AppWindow, Database, GitBranch, Braces, LineChart, ArrowRight } from "lucide-react";

const stack = [
  { name: "Java 21", role: "Engine", icon: Cpu },
  { name: "Spring Boot", role: "API REST", icon: Server },
  { name: "React", role: "UI", icon: Atom },
  { name: "Tauri", role: "Desktop", icon: AppWindow },
  { name: "PostgreSQL", role: "Banco local", icon: Database },
  { name: "Flyway", role: "Migrations", icon: GitBranch },
  { name: "TypeScript", role: "Tipagem", icon: Braces },
  { name: "Recharts", role: "Gráficos", icon: LineChart },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="docs" ref={sectionRef} className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#ff8a3d]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-[#ffa500]/40" />
            Stack &amp; Documentação
            <span className="w-12 h-px bg-[#ffa500]/40" />
          </span>

          <h2 className={`text-5xl md:text-6xl lg:text-[104px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Tecnologia
            <br />
            <span className="text-muted-foreground">sólida.</span>
          </h2>

          <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            Uma engine analítica em Java exposta via API REST embutida, consumida
            por uma interface fluida em React + Tauri.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {stack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`group relative overflow-hidden rounded-lg p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                  hoveredIndex === index
                    ? "border-[#ffa500]/50 bg-foreground/[0.04] scale-[1.02]"
                    : "border-foreground/10 hover:border-foreground/30"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 30 + 300}ms` }}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setMousePos(null);
                }}
              >
                {hoveredIndex === index && mousePos && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,165,0,0.12) 0%, transparent 70%)`,
                    }}
                  />
                )}
                <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                  hoveredIndex === index
                    ? "bg-[#ffa500] text-black"
                    : "bg-foreground/10 text-muted-foreground"
                }`}>
                  {item.role}
                </span>

                <div className={`w-10 h-10 mb-6 flex items-center justify-center transition-colors ${
                  hoveredIndex === index ? "text-[#ffa500]" : "text-foreground/60"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                <span className="font-medium block relative z-10">{item.name}</span>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                  <div className={`h-full bg-[#ffa500] transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "Offline-first", label: "Sem dependência de nuvem" },
              { value: "REST", label: "API embutida" },
              { value: "Flyway", label: "Schema versionado" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <span className="text-2xl font-display">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>

          <a href="#community" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            Ler a documentação completa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
