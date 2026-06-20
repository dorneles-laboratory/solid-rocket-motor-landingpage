"use client";

import { ArrowUpRight, Coffee, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Produto: [
    { name: "Funcionalidades", href: "#features" },
    { name: "Fluxo de trabalho", href: "#how-it-works" },
    { name: "Análise termo-balística", href: "#docs" },
    { name: "Baixar", href: "#" },
  ],
  Documentação: [
    { name: "Arquitetura local", href: "#docs" },
    { name: "Migrations (Flyway)", href: "#docs" },
    { name: "API REST", href: "#docs" },
    { name: "Guia de contribuição", href: "#community" },
  ],
  Comunidade: [
    { name: "GitHub", href: "https://github.com/dorneles-laboratory/solid-rocket-motor-simulator" },
    { name: "Reportar issue", href: "https://github.com/dorneles-laboratory/solid-rocket-motor-simulator/issues" },
    // { name: "Discord", href: "#" },
    { name: "Sobre o autor", href: "#about" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/dorneles-laboratory/solid-rocket-motor-simulator" },
  // { name: "Discord", href: "#" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fernandodorneles/" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Final download strip */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-display text-white mb-1">Pronto para decolar?</h3>
            <p className="text-white/50 text-sm">Baixe a versão mais recente e simule offline.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#ffa500] hover:bg-[#ff9100] text-black rounded-full gap-2">
              <Download className="w-4 h-4" />
              Baixar v0.1.10
            </Button>
            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/5 gap-2">
              <a
                href="https://github.com/sponsors/dornelesfernando"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 text-sm sm:text-base"
              >                      
                <Coffee className="w-4 h-4" />
                Apoie o Desenvolvimento
              </a>
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffa500] shadow-[0_0_12px_rgba(255,165,0,0.7)]" />
                <span className="text-2xl font-display text-white">SRM Simulator</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                Suíte de simulação termo-química e balística de código aberto para
                motores-foguete sólidos. Offline-first, moderna e profissional.
              </p>

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2026 SRM Simulator. Software livre sob licença open source.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffa500]" />
              v0.1.10 disponível
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
