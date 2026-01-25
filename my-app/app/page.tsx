"use client";
// import "./globals.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useScrolling } from "./hooks/navbar-scroll";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  const scaleX = useScrolling();
  return (
    <div className=" ">
      {/* TOP STRIP */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 h-1 transition-all duration-500 bg-primary z-50 origin-left w-full"
      />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Particles in the background - contained within hero section */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(106,227,255,0.08)_0%,transparent_60%)] z-[1]"></div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col pt-[200px] container text-center">
          <span className="floatingspan text-[12px] flex items-center gap-3 tracking-widest leading-4 py-2 px-4 border w-fit mx-auto rounded-full border-borderclr font-bold uppercase text-white">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
            Open for Opportunities
          </span>

          <h1 className="text-center h-[110px] mt-[50px] mb-0 md:mb-[10px] text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mx-auto bg-gradient-to-b from-white to-[#7c7b7b] bg-clip-text text-transparent">
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
          </h1>

          <p className="text-txtdim text-[18px] md:text-[20px] max-w-2xl mx-auto">
            Crafting scalable solutions with modern technologies. Passionate
            about building high-performance applications and solving complex
            problems.
          </p>
        </div>
      </section>

      {/* EXTRA CONTENT TO ENABLE SCROLL - No particles here */}
      <section className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl">Scroll to see the progress bar animation</p>
      </section>
    </div>
  );
}
