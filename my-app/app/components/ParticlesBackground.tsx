"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: isMobile ? 30 : 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" }, // Fixed: disabled on mobile
          onHover: { enable: false },
        },
        modes: {
          push: { quantity: isMobile ? 1 : 2 },
        },
      },
      particles: {
        color: { value: "#6ae3ff" },
        links: {
          enable: true,
          color: "#6ae3ff",
          distance: isMobile ? 150 : 250,
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.5 : 0.8,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },
        number: { 
          value: isMobile ? 40 : 50,
          density: { 
            enable: true,
            width: 1920,
            height: 1080
          } 
        },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 1 } },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [isMobile],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticlesBackground;