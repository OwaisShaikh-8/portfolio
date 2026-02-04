import React from "react";

// types.ts
import { ReactNode } from "react";

export interface ExperienceCardType {
  id: number;
  designation: string; // The title of the skill category
  company: string; // Array of skills
  duration: string;
  detail: String;
  skills: String[]
}

export const experienceData: ExperienceCardType[] = [
  {
    id: 1,
    designation: "Web Developer Intern",
    company: "Digimarketing Singapor",
    duration: "Sep 2023 - Sep 2024 ",
   detail: "Expert in building full-stack JavaScript applications using MongoDB, Express.js, React, and Node.js. Creating seamless, high-performance web applications with modern best practices.",
   skills: ["Html","CSS","JavaScript","Bootstrap","Git", "GitHub", "UI/UX Design"]
  },
  {
    id: 1,
    designation: "Front Developer",
    company: "Frototype Agency",
    duration: "Sep 2025 - Feb 2026 ",
   detail: "Expert in building full-stack JavaScript applications using MongoDB, Express.js, React, and Node.js. Creating seamless, high-performance web applications with modern best practices.",
   skills: [  "React", "Next.js","Tailwind CSS", "Redux", "Zustand", "Node.js", "Express.js", "MongoDB", ]

  }
];

const ExperienceCard: React.FC<ExperienceCardType> = ({ designation, company,duration, detail, skills }) => {
  return (
    <div className="text-white p-8  border border-borderclr   rounded-3xl hover:border-primary text-start  transition-all duration-600 max-w-5xl">
     
      <div className=" flex flex-col md:flex-row justify-between  gap-2 items-start">

        <span>
      <h3 className="text-[20px] md:text-[24px] font-bold">{designation}</h3>
        <p className="text-primary text-[16px] font-semibold " >{company}</p>
        </span>
        <span className="bg-baseSecondary border border-borderclr text-[12px] py-2 px-4  rounded-full">
            {duration}
        </span>
      </div>

      <p className="text-[16px] text-txtdim my-4">
       {detail}
      </p>

      <ul className="flex flex-wrap gap-2">
        {
            skills.map((item,index) => (
                <li key={index} className="border text-[14px] border-borderclr  text-txtdim rounded-full px-4 py-3 bg-baseSecondary hover:-translate-y-1 hover:text-primary hover:bg-[#06586b] transition-all duration-300 mt-2 ">
                    {item}
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default ExperienceCard;
