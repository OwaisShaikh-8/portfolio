"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded:", container);
  };

  // Detect if device is mobile for performance optimization
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: isMobile ? 30 : 60, // Reduced FPS, especially on mobile
      interactivity: {
        events: {
          onClick: { enable: !isMobile, mode: "push" }, // Disable on mobile
          onHover: { enable: false }, // Disabled to save performance
        },
        modes: {
          push: { quantity: 2 },
        },
      },
      particles: {
        color: { value: "#6ae3ff" },
        links: {
          enable: true,
          color: "#6ae3ff",
          distance: isMobile ? 150 : 250, // Shorter distance on mobile
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.5 : 0.8, // Slower movement
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },
        number: { 
          value: isMobile ? 20 : 50, // Fewer particles on mobile
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
      pauseOnBlur: true, // Pause when tab is not active
      pauseOnOutsideViewport: true, // Pause when not visible
    }),
    [isMobile],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 w-full h-full pointer-events-none" // Added pointer-events-none for better performance
    />
  );
};

export default ParticlesBackground;