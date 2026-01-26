"use client";
import navImg from "@/public/assets/images/nav-img.jpg";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const navLinks = ["Tech Stack", "Experience", "Education", "Projects"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          Owais Shaikh <span className="text-primary">.</span>
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
        <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center md:hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl text-primary transition hover:rotate-90"
            >
              ✕
            </button>

            <ul className="flex flex-col items-center gap-8 text-lg text-txt">
              {navLinks.map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </li>
              ))}

              <button className="mt-6 rounded-full border border-borderclr px-8 py-3 text-sm transition-all duration-300 hover:border-primary hover:text-white">
                Let’s talk
              </button>
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
