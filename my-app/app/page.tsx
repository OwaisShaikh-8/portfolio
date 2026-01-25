"use client";
import { motion, useScroll, useTransform, Variant, Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useScrolling } from "./hooks/navbar-scroll";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  const scaleX = useScrolling();

  // Fade-in variants for hero content
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 }, // start slightly down & invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div>
      {/* TOP STRIP */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 h-1 transition-all duration-500 bg-primary z-50 origin-left w-full"
      />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Particles in the background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(106,227,255,0.08)_0%,transparent_60%)] z-[1]" />

        {/* Content layer */}
        <motion.div
          className="relative z-10 flex flex-col pt-[200px] container text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="floatingspan text-[12px] flex items-center gap-3 tracking-widest leading-4 py-2 px-4 border w-fit mx-auto rounded-full border-borderclr font-bold uppercase text-white"
            variants={childVariants}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
            Available for Collaboration
          </motion.span>

          <motion.h1
            className="text-center h-[110px] mt-[50px] mb-0 md:mb-[10px] text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mx-auto bg-gradient-to-b from-white to-[#7c7b7b] bg-clip-text text-transparent"
            variants={childVariants}
          >
            <Typewriter
              words={[
                "Mern Stack Developer",
                "React-Engineer",
                "Web Application Specialist",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>

          <motion.p
            className="text-txtdim text-[18px] md:text-[20px] max-w-2xl mx-auto"
            variants={childVariants}
          >
            Crafting scalable solutions with modern technologies. Passionate
            about building high-performance applications and solving complex
            problems.
          </motion.p>
        </motion.div>
      </section>

      {/* EXTRA CONTENT TO ENABLE SCROLL */}
      <section className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl">Scroll to see the progress bar animation</p>
      </section>
    </div>
  );
}
