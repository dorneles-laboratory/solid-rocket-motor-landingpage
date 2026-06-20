"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, BookOpen, MessageCircle, Bug, GitPullRequest, Star } from "lucide-react";

const contributions = [
  { icon: Bug, title: "Reporte issues", description: "Encontrou um bug ou comportamento inesperado? Abra uma issue." },
  { icon: GitPullRequest, title: "Contribua com código", description: "Pull requests são bem-vindos — da engine em Java à interface em React." },
  { icon: Star, title: "Sugira funcionalidades", description: "Tem uma ideia para melhorar a simulação? A comunidade quer ouvir." },
  { icon: BookOpen, title: "Documentação aberta", description: "Arquitetura local, migrations Flyway e guias técnicos disponíveis." },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="community" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff8a3d]/8 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-[#ffa500]/40" />
            Open Source
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[88px] font-display tracking-tight leading-[0.95] max-w-4xl text-balance">
            Construído de forma transparente.
            <br />
            <span className="text-muted-foreground">Movido pela comunidade.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: description + CTAs */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              O SRM Simulator é totalmente open source. Reporte issues, solicite
              novas funcionalidades ou contribua com código — toda a comunidade
              aeroespacial é bem-vinda para construir essa ferramenta junto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#ffa500] hover:bg-[#ff9100] text-black h-13 px-7 rounded-full gap-2"
              >
                <a
                  href="https://github.com/dorneles-laboratory/solid-rocket-motor-simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 text-sm sm:text-base"
                >                      
                  <Github size={18} />
                  Acessar repositório
                </a>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="h-13 px-7 rounded-full border-foreground/20 hover:bg-foreground/5 gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Entrar no Discord
              </Button> */}
            </div>
            <p className="text-sm text-muted-foreground mt-6 font-mono">
              Licença open source • contribuições abertas
            </p>
          </div>

          {/* Right: contribution grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {contributions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 rounded-lg border border-foreground/10 bg-card hover-lift transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 60 + 200}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-md border border-[#ffa500]/30 bg-[#ffa500]/10 text-[#ffa500] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
