"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Boxes, LineChart, Database } from "lucide-react";

export function FeaturesSection() {
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
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-[#ffa500]/40" />
                Funcionalidades
              </span>
              <h2
                className={`text-5xl md:text-6xl lg:text-[104px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Tudo num só
                <br />
                <span className="text-muted-foreground">ambiente.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Substitua planilhas complexas por uma ferramenta unificada para
                projetar, simular e otimizar motores-foguete sólidos.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Editor de Geometria — large */}
          <div
            className={`lg:col-span-7 relative bg-card border border-foreground/10 rounded-lg min-h-[420px] overflow-hidden group flex flex-col justify-between p-8 lg:p-10 transition-all duration-700 hover-lift ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative z-10 max-w-md">
              <div className="w-11 h-11 flex items-center justify-center rounded-md border border-[#ffa500]/30 bg-[#ffa500]/10 text-[#ffa500] mb-6">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-4">Editor de Geometria</h3>
              <p className="text-muted-foreground leading-relaxed">
                Projete a carcaça, o bocal e o grão propelente (ex: BATES) com
                feedback visual em tempo real. Visualize as proporções do motor a
                cada ajuste.
              </p>
            </div>
            <img
                src="/images/grain-geometry.png"
                alt="Diagrama de seção transversal de um grão propelente BATES"
                className="w-full h-auto object-contain"
              />
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-[40%] opacity-60">
              <img
                src="/images/grain-geometry-icon.png"
                alt="Diagrama de seção transversal de um grão propelente BATES"
                className="w-full h-auto object-contain rounded-[50%]"
              />
            </div>
            <div className="absolute inset-0 bg-[#ff8a3d]/5 blur-3xl pointer-events-none" />
          </div>

          {/* Análise Termo-balística */}
          <div
            className={`lg:col-span-5 relative bg-card border border-foreground/10 rounded-lg min-h-[420px] overflow-hidden group flex flex-col p-8 lg:p-10 transition-all duration-700 delay-100 hover-lift ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative z-10">
              <div className="w-11 h-11 flex items-center justify-center rounded-md border border-[#ffa500]/30 bg-[#ffa500]/10 text-[#ffa500] mb-6">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-4">Análise Termo-balística</h3>
              <p className="text-muted-foreground leading-relaxed">
                Obtenha gráficos instantâneos de pressão, tempo e curvas de empuxo
                integradas a cada simulação.
              </p>
            </div>
            <div className="mt-6 -mx-4 -mb-4 h-full">
              <img
                src="/images/thrust-curve.png"
                alt="Gráficos de empuxo e pressão por tempo"
                className="w-full h-full object-contain opacity-90"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-5 -right-5 w-[40%]">
              <img
                src="/images/thrust-curve-icon.png"
                alt="Diagrama de seção transversal de um grão propelente BATES"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Arquitetura Desacoplada */}
          <div
            className={`lg:col-span-5 relative bg-card border border-foreground/10 rounded-lg overflow-hidden group p-8 lg:p-10 transition-all duration-700 delay-150 hover-lift ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-md border border-[#ffa500]/30 bg-[#ffa500]/10 text-[#ffa500] mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display mb-4">Arquitetura Desacoplada</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Frontend em Tauri/React consumindo uma API REST embutida em Spring
              Boot. Performance nativa com flexibilidade web.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Tauri", "React", "Spring Boot", "REST API"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono border border-foreground/15 rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Banco de Dados Local */}
          <div
            className={`lg:col-span-7 relative bg-card border border-foreground/10 rounded-lg overflow-hidden group p-8 lg:p-10 transition-all duration-700 delay-200 hover-lift ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-md border border-[#ffa500]/30 bg-[#ffa500]/10 text-[#ffa500] mb-6">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display mb-4">Banco de Dados Local</h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Persistência relacional nativa para catalogar materiais estruturais e
              térmicos. Seus dados ficam na sua máquina, prontos para uso mesmo sem
              conexão — versionados com Flyway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
