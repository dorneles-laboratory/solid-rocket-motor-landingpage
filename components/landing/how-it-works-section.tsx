"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Projete",
    subtitle: "a geometria",
    description:
      "Defina a carcaça, o bocal e o grão propelente. Ajuste diâmetros, número de segmentos BATES e materiais com feedback visual imediato.",
  },
  {
    number: "02",
    title: "Simule",
    subtitle: "o desempenho",
    description:
      "O motor analítico em Java 21 resolve as equações termo-químicas e balísticas, gerando curvas de pressão, empuxo e impulso em segundos.",
  },
  {
    number: "03",
    title: "Otimize",
    subtitle: "& itere",
    description:
      "Compare versões, refine a geometria do grão e exporte resultados. Tudo offline, perfeito para testes em bancada de campo.",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff8a3d]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — title + dashboard preview */}
        <div className="relative mb-12 lg:mb-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div className="overflow-hidden pb-0 lg:pb-16">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#ffb27a] mb-8">
                <span className="w-12 h-px bg-[#ffa500]/40" />
                Fluxo de trabalho
              </span>
            </div>

            <h2 className={`text-6xl md:text-7xl lg:text-[120px] font-display tracking-tight leading-[0.85] transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}>
              <span className="block">Projete.</span>
              <span className="block text-white/30">Simule.</span>
              <span className="block text-white/10">Otimize.</span>
            </h2>
          </div>

          {/* Dashboard preview */}
          <div className={`relative h-[280px] lg:h-[460px] transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="absolute inset-0 bg-[#ff8a3d]/15 blur-[80px] rounded-full" />
            <div className="relative h-full rounded-xl border border-white/10 overflow-hidden bg-black">
              <img
                src="/images/dashboard.png"
                alt="Dashboard do SRM Simulator mostrando geometria do grão e gráficos de simulação"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`relative text-left p-8 lg:p-12 border rounded-lg transition-all duration-500 ${
                activeStep === index
                  ? "bg-black border-[#ffa500]/60"
                  : "bg-black border-white/20 hover:border-white/40"
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-4xl font-display transition-colors duration-300 ${
                  activeStep === index ? "text-[#ffa500]" : "text-white/20"
                }`}>
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-white/10 overflow-hidden">
                  {activeStep === index && <div className="h-full bg-[#ffa500]/50 animate-progress" />}
                </div>
              </div>

              <h3 className="text-3xl lg:text-4xl font-display mb-2">{step.title}</h3>
              <span className="text-xl text-white/40 font-display block mb-6">{step.subtitle}</span>

              <p className={`text-white/60 leading-relaxed transition-opacity duration-300 ${
                activeStep === index ? "opacity-100" : "opacity-60"
              }`}>
                {step.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#ffa500] transition-transform duration-500 origin-left ${
                activeStep === index ? "scale-x-100" : "scale-x-0"
              }`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
}
