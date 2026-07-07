import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  const metrics = [
    { value: "570k+", label: "users supported" },
    { value: "60k", label: "daily check-ins" },
    { value: "35%", label: "faster handling" },
    { value: "G100", label: "startup selection" },
  ];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ComputersCanvas />
      </div>
      <div className="absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-primary via-primary/90 to-transparent pointer-events-none" />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[112px] z-10 max-w-7xl mx-auto flex flex-row item-start gap-5 pointer-events-none`}
      >
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 sm:h-80 h-40 violet-gradient"></div>

        <div className="max-w-4xl">
          <p className="text-[#7dd3fc] text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.2em]">
            AI systems / full-stack product engineering
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Barry Chung</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-3xl text-white-100`}>
            I build AI agent systems and full-stack products for climate,
            education, and financial workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
            <a
              href="#work"
              className="rounded-lg bg-[#915eff] px-6 py-3 text-white font-semibold shadow-lg shadow-[#915eff]/30 hover:bg-[#7c3aed] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-6 py-3 text-white font-semibold hover:border-[#7dd3fc] hover:text-[#7dd3fc] transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-[#090325]/80 px-4 py-3 backdrop-blur"
              >
                <p className="text-white text-[22px] font-bold leading-none">
                  {metric.value}
                </p>
                <p className="mt-2 text-secondary text-[12px] leading-4">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 z-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex jusity-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>

        </a>
      </div>
    </section>
  );
};

export default Hero;
