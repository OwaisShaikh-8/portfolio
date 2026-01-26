"use client";
import navImg from "@/public/assets/images/nav-img.jpg";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent,AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = ["Tech Stack", "Experience", "Education", "Projects"];

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Start above the screen
      animate={{ y: 0, opacity: 1 }} // Slide down to original position
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 2,
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-borderclr"
            : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-5 text-txt">
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-lg cursor-pointer group">
          <span className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-borderclr group-hover:border-primary transition">
            <Image src={navImg} alt="profile" fill className="object-cover" />
          </span>
          <p>
            Owais Shaikh<span className="text-primary">.</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-txtdim">
            {navLinks.map((item) => (
              <li key={item} className="relative group">
                <a
                  href="#"
                  className="inline-block transition-colors duration-300 group-hover:text-txt"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button className="rounded-full border border-borderclr px-6 py-2.5 text-sm transition-all duration-300 hover:border-primary hover:text-white">
            Let’s talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl hover:text-primary"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
<AnimatePresence>


        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center md:hidden"
            initial={{ x: "100%", rotate: 90, opacity: 0 }} // start off-screen and rotated
            animate={{ x: 0, rotate: 0, opacity: 1 }} // slide in and straighten
            exit={{ x: "100%", rotate: 90, opacity: 0 }} // slide out with roll
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-xl text-txt hover:text-primary  transition hover:rotate-90"
            >
              ✕
            </button>
            <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-txt">
              <span className="relative h-25 w-25 rounded-full overflow-hidden border-2 border-primary  ">
                <Image
                  src={navImg}
                  alt="profile"
                  fill
                  className="object-cover"
                />
              </span>

              {navLinks.map((item) => (
                <li
                  key={item}
                  className="relative group cursor-pointer hover:text-primary transition-all duration-300"
                >
                  {item}
                </li>
              ))}

              <button
                className="mt-6 rounded-full bg-primary px-8 py-4 text-lg text-black 
                    shadow-[0_10px_20px_rgba(0,0,0,0.25)] 
                    hover:shadow-[0_15px_25px_rgba(0,0,0,0.35)] 
                    transition-shadow duration-300"
              >
                Let’s talk
              </button>
            </ul>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
