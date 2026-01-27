import React from "react";

// types.ts
import { ReactNode } from "react";

export interface SkillCardType {
  id: number;
  icon: ReactNode; // SVG or any React component
  heading: string; // The title of the skill category
  list: string[]; // Array of skills
}

export const skillsData: SkillCardType[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 12 12"><path fill="none" stroke="#6ae3ff" strokeLinecap="round" d="M3.5 4L1.9 5.6c-.2.2-.2.5 0 .7L3.5 8m5-4l1.6 1.6c.2.2.2.5 0 .7L8.5 8M7 2.5l-2 7" strokeWidth="1"/></svg>
    ),
    heading: "Frontend ",
    list: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux / Zustand",
    ],
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#6ae3ff" strokeLinejoin="round" strokeWidth="1.5"><path strokeLinecap="round" d="M10.5 2v2m3-2v2M8 6.5H6m2 3H6m12-3h-2m2 3h-2M13.333 4h-2.666C9.41 4 8.78 4 8.39 4.39C8 4.782 8 5.41 8 6.668v2.666c0 1.257 0 1.886.39 2.277c.391.39 1.02.39 2.277.39h2.666c1.257 0 1.886 0 2.277-.39c.39-.391.39-1.02.39-2.277V6.667c0-1.257 0-1.886-.39-2.276C15.219 4 14.59 4 13.333 4"/><path d="M3.617 21.924c.184.076.417.076.883.076s.699 0 .883-.076a1 1 0 0 0 .54-.541C6 21.199 6 20.966 6 20.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C5.199 19 4.966 19 4.5 19s-.699 0-.883.076a1 1 0 0 0-.54.541C3 19.801 3 20.034 3 20.5s0 .699.076.883a1 1 0 0 0 .541.54Zm7.5 0c.184.076.417.076.883.076s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C12.699 19 12.466 19 12 19s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54Z"/><path strokeLinecap="round" d="M12 19v-7m-7.5 7c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C5.893 15.5 6.596 15.5 8 15.5h8c1.404 0 2.107 0 2.611.337c.218.146.406.334.552.552c.337.504.337 1.207.337 2.611"/><path d="M18.617 21.924c.184.076.417.076.883.076s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C20.199 19 19.966 19 19.5 19s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54Z"/></g></svg>
    ),
    heading: "Backend ",
    list: ["Node.js", "Express.js", "RestAPIs"],
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#6ae3ff" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2"/></svg>
    ),
    heading: "Database",
    list: ["MongoDB", "PostgressSQL"],
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="#6ae3ff" d="M12.1 2a9.8 9.8 0 0 0-5.4 1.6l6.4 6.4a2.1 2.1 0 0 1 .2 3a2.1 2.1 0 0 1-3-.2L3.7 6.4A9.84 9.84 0 0 0 2 12.1a10.14 10.14 0 0 0 10.1 10.1a11 11 0 0 0 2.6-.3l6.7 6.7a5 5 0 0 0 7.1-7.1l-6.7-6.7a11 11 0 0 0 .3-2.6A10 10 0 0 0 12.1 2m8 10.1a7.6 7.6 0 0 1-.3 2.1l-.3 1.1l.8.8l6.7 6.7a2.88 2.88 0 0 1 .9 2.1A2.72 2.72 0 0 1 27 27a2.9 2.9 0 0 1-4.2 0l-6.7-6.7l-.8-.8l-1.1.3a7.6 7.6 0 0 1-2.1.3a8.27 8.27 0 0 1-5.7-2.3A7.63 7.63 0 0 1 4 12.1a8.3 8.3 0 0 1 .3-2.2l4.4 4.4a4.14 4.14 0 0 0 5.9.2a4.14 4.14 0 0 0-.2-5.9L10 4.2a6.5 6.5 0 0 1 2-.3a8.27 8.27 0 0 1 5.7 2.3a8.5 8.5 0 0 1 2.4 5.9"/></svg>
    ),
    heading: "Tools",
    list: ["Git & GitHub", "Docker"],
  },
];

const SkillCard: React.FC<SkillCardType> = ({ icon, heading, list }) => {
  return (
    <div className="text-white p-8 h-[300px] border border-borderclr bg-black/30 hover:bg-base rounded-3xl hover:border-primary text-start group hover:-translate-y-1 transition-transform duration-500">
      {/* Icon */}
      <div className="w-10 h-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">{icon}</div>

      {/* Heading */}
      <h3 className="mt-6 mb-4 text-[20px] font-bold">{heading}</h3>

      {/* Skills List */}
      <ul className="list-disc text-[14px] text-txtdim marker:text-primary flex flex-col gap-1 pl-4">
        {list.map((item, index) => (
          <li
            className="hover:translate-x-2 transition-all duration-300 hover:text-primary"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
