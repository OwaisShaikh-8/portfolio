"use client";
import {
  motion,
  useScroll,
  useTransform,
  Variant,
  Variants,
} from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useScrolling } from "./hooks/navbar-scroll";
import ParticlesBackground from "./components/ParticlesBackground";
import Link from "next/link";
import Image from "next/image";
import aboutimg from "@/public/assets/images/web.jpg";
import SkillCard from "./components/SkillCard";
import { skillsData } from "./components/SkillCard";

export default function Home() {
  const scaleX = useScrolling();

  // Page load (Hero)
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  // Scroll sections
  const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* TOP STRIP */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 h-1 transition-all ease-in duration-300 bg-primary z-50 origin-left w-full"
      />

      {/* HERO SECTION */}
      <section id="home" className="relative  overflow-hidden">
        {/* Particles in the background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(106,227,255,0.08)_0%,transparent_60%)] z-1]" />

        {/* Content layer */}
        <motion.div
          className="relative z-10 flex flex-col pt-32 pb-16 md:pb-40  md:pt-40 container text-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="floatingspan text-[12px] flex items-center gap-3 tracking-widest leading-4 py-2 px-4 border w-fit mx-auto rounded-full border-borderclr font-bold uppercase text-white">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
            Available for Collaboration
          </motion.span>

          <motion.h1 className="text-center h-[110px] mt-[30px] mb-0 md:mb-[20px] text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mx-auto bg-gradient-to-b from-white to-[#7c7b7b] bg-clip-text text-transparent">
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

          <motion.p className="text-txtdim text-[18px] md:text-[20px] max-w-2xl mx-auto mb-10">
            Crafting scalable solutions with modern technologies. Passionate
            about building high-performance applications and solving complex
            problems.
          </motion.p>
          <motion.div className="flex flex-col w-full md:w-fit md:flex-row mx-auto text-txt gap-4">
            <Link
              href="#"
              className="py-3 px-8 rounded-full font-bold text-[#0b1c24] bg-gradient-to-r from-[#6ae3ff] via-[#38c7e0] to-[#6ae3ff] bg-[length:200%_auto] transition-all duration-300 ease-in-out hover:bg-right hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(106,227,255,0.45)] active:translate-y-0 group text-center flex gap-4 justify-center"
            >
              View Selected Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#0b1c24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-6 6l6-6m-6-6l6 6"
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </svg>
            </Link>

            <Link
              href=""
              className="py-3 px-8 bg-base border border-borderclr hover:bg-primary font-medium hover:text-[#0b1c24] rounded-full transition-all duration-300"
            >
              Book Call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="  pt-10 md:pt-20 pb-10 md:pb-40 ">
        <motion.div
          className="container text-center capitalize "
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h3 className="text-white text-4xl md:text-6xl font-bold tracking-wide leading-10 md:leading-20">
            About Me
          </motion.h3>
          <motion.h2 className="text-primary tracking-wider text-xl md:text-2xl font-medium">
            Let me give you a brief insight into{" "}
            <span className="text-txt italic ">who I am</span> and{" "}
            <span className="text-txt italic">what I do</span>{" "}
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-start text-txt mt-15">
            <div className=" animate-border-pulse p-2 w-fit rounded-4xl shadow-2xl shadow-primary rotate-4 transition-all">
              <figure
                className="relative  md:h-[400px] md:w-[290px] h-[300px] w-[220px]
 rounded-3xl overflow-hidden "
              >
                <Image src={aboutimg} alt="img" fill />
              </figure>
            </div>
            <div className=" py-5 flex flex-col gap-4">
              <h4 className="text-primary font-semibold text-3xl md:text-4xl">
                Summary
              </h4>
              <p className="text-[18px] md:text-[20px] text-txtdim tracking-wide leading-loose font-medium">
                Hello! My name is Owais, and I am a passionate freelance MERN
                stack developer with a focus on React.js. Over the years, I have
                honed my skills in frontend development, ensuring seamless user
                experiences, and backend development, creating robust and
                scalable server-side solutions. I have knowledge and experience
                in building dynamic and responsive web applications using modern
                technologies like React, Node.js, Express, and MongoDB. I enjoy
                transforming ideas into functional web applications and am
                always eager to learn and explore new technologies in the web
                development ecosystem. My goal is to create applications that
                not only work efficiently but also provide intuitive and
                engaging user experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="tech" className="bg-baseSecondary  pt-10 md:pt-20 pb-40 ">
        <motion.div
          className="container text-center"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-white text-4xl md:text-6xl font-bold tracking-wide leading-10 md:leading-20">
            Teck Stack
          </h3>
          <h2 className="text-primary tracking-wider text-xl md:text-2xl font-medium">
            Leveraging modern technologies to build{" "}
            <span className="italic text-txt">robust</span> and{" "}
            <span className="italic text-txt">scalable</span> applications
          </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-20 mt-10">
                  {skillsData.map((skill) => <SkillCard key={skill.id} {...skill} />)}
              </div>
        

        </motion.div>
      </section>
    </div>
  );
}
