"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-[#ffa500]/30 rounded-xl bg-card overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,165,0,0.12), transparent 45%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display tracking-tight mb-8 leading-[0.95] text-balance">
                  Simule motores-foguete
                  <br />
                  em qualquer lugar.
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Baixe o SRM Simulator e comece a projetar, simular e otimizar seus
                  motores hoje — sem nuvem, sem assinatura, 100% offline.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="bg-[#ffa500] hover:bg-[#ff9100] text-black px-8 h-14 text-base rounded-full group"
                  >
                    <a
                      href="https://github.com/dorneles-laboratory/solid-rocket-motor-simulator/releases/download/Production/SRM_0.2.0_x64-setup.exe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 text-sm sm:text-base"
                    >                      
                      <Download className="w-4 h-4 mr-2" />
                      Baixar v0.2.0 (Windows)
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5 group"
                  >
                    <a
                      href="https://github.com/dorneles-laboratory/solid-rocket-motor-simulator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 text-sm sm:text-base"
                    >                      
                      <Github className="w-4 h-4 mr-2" />
                      Ver no GitHub
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  Gratuito e open source • Tauri + Java 21
                </p>
              </div>

              {/* Right image */}
              <div className="hidden lg:flex items-center justify-center w-[440px] h-[440px] shrink-0 relative">
                <div className="absolute inset-0 rounded-full bg-[#ff8a3d]/15 blur-[90px]" />
                <img
                  src="/images/rocket-wireframe-3.svg"
                  alt="Wireframe CAD de um motor-foguete sólido"
                  className="relative w-full h-full object-contain border border-foreground/10 rounded-[20px]"
                />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#ffa500]/15" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-[#ffa500]/15" />
        </div>
      </div>
    </section>
  );
}
