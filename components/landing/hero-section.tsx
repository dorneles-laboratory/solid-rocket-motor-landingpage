"use client";

import { useEffect, useState } from "react";
import { Download, Github } from "lucide-react";
import styles from "./hero-section.module.css";

const metrics = [
  { value: "Java 21", label: "Motor analítico de alta performance" },
  { value: "Tauri + React", label: "Interface nativa ultraleve" },
  { value: "Offline-first", label: "Ideal para testes de campo" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroGlow} ${styles.heroGlowTop}`}></div>
      <div className={`${styles.heroGlow} ${styles.heroGlowBottom}`}></div>

      <div className={styles.heroGridLines}>
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className={styles.horizontalLine}
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}

        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className={styles.verticalLine}
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div
              className={`${styles.fadeUp} ${
                isVisible ? styles.visible : ""
              }`}
            >
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowLine}></span>
                Offline-first thermochemical simulation
              </span>
            </div>

            <h1
              className={`${styles.heroTitle} ${
                isVisible ? styles.visible : ""
              }`}
            >
              Projete motores-foguete,
              <br />
              simulações de{" "}
              <span className={styles.gradientText}>
                alta precisão.
              </span>
            </h1>

            <p
              className={`${styles.heroSubtitle} ${
                isVisible ? styles.visible : ""
              }`}
            >
              Uma suíte de simulação termo-química e balística de código aberto.
              Projete, simule o desempenho e otimize a geometria de grãos com uma
              arquitetura moderna e offline-first.
            </p>

            <div
              className={`${styles.heroButtons} ${
                isVisible ? styles.visible : ""
              }`}
            >
              <button className={styles.btnPrimary}>
                <Download size={18} />
                Baixar v0.1.10 (Windows)
              </button>

              <button className={styles.btnSecondary}>

                <a
                  href="https://github.com/dorneles-laboratory/solid-rocket-motor-simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 text-sm sm:text-base"
                >                      
                  <Github size={18} />
                  Ver no GitHub
                </a>
              </button>
            </div>
          </div>

          <div
            className={`${styles.heroRight} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.rocketContainer}>
              <div className={styles.rocketGlow}></div>

              <img
                src="/images/rocket-wireframe-3.svg"
                alt="Rocket CAD"
                className={styles.rocketImage}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.stats} ${
          isVisible ? styles.visible : ""
        }`}
      >
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.statCard}>
            <span className={styles.statValue}>{metric.value}</span>
            <span className={styles.statLabel}>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}