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

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false, // THIS IS THE KEY - disable fullscreen mode
        zIndex: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          push: { quantity: 10 },
        },
      },
      particles: {
        color: { value: "#6ae3ff" },
        links: {
          enable: true,
          color: "#6ae3ff",
          distance: 250,
          opacity: .5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: { default: "bounce" }, // changed to bounce so particles stay in container
        },
        number: { value: 100, density: { enable: true } },
        opacity: { value: 1 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 1 } },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default ParticlesBackground;