"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Rocket } from "lucide-react";

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-[#ffa500]/40" />
            Sobre o projeto
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* About the developer */}
          <div
            className={`lg:col-span-7 relative rounded-lg border border-foreground/10 bg-card p-8 lg:p-12 overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#ffa500]/15 border border-[#ffa500]/30 flex items-center justify-center text-[#ffa500] font-display text-2xl shrink-0">
                FD
              </div>
              <div>
                <h3 className="text-xl font-medium">Fernando Dorneles</h3>
                <p className="text-sm text-muted-foreground">
                  Eng. de Computação — UFSM
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O SRM Simulator é mantido por{" "}
              <span className="text-foreground">Fernando Dorneles</span>, estudante
              de Engenharia de Computação na UFSM e apaixonado pelo desenvolvimento
              de tecnologias para o setor aeroespacial. Este projeto nasceu da necessidade de substituir
              planilhas complexas por um ecossistema sólido, unificado e profissional.
            </p>

            <div className="absolute -bottom-8 -right-8 text-[#ffa500]/10 pointer-events-none">
              <Rocket className="w-40 h-40" />
            </div>
          </div>

          {/* Support card */}
          <div
            className={`lg:col-span-5 relative rounded-lg border border-[#ffa500]/30 bg-[#ffa500]/[0.06] p-8 lg:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ff8a3d]/15 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-md bg-[#ffa500]/20 border border-[#ffa500]/40 flex items-center justify-center text-[#ffa500] mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-4">Apoie o Desenvolvimento</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                O SRM Simulator é gratuito e sempre será. Seu apoio ajuda a manter o
                foco em novas atualizações, correções e funcionalidades para toda a
                comunidade.
              </p>
            </div>
            <Button
              size="lg"
              className="relative z-10 bg-[#ffa500] hover:bg-[#ff9100] text-black h-13 px-7 rounded-full gap-2 w-full sm:w-auto"
            >
              <a
                href="https://github.com/sponsors/dornelesfernando/sponsorships?sponsor=dornelesfernando&tier_id=629003&preview=false"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 text-sm sm:text-base"
              >                      
                <Coffee className="w-4 h-4" />
                Buy me a Coffee
              </a>
              
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
