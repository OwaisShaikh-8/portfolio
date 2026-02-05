import React from "react";

// types.ts
import { ReactNode } from "react";

export interface EducationCardType {
  id: number;
  icon:ReactNode;
  title: string; // The title of the skill category
  institute: string; // Array of skills
  duration: string;
  detail: String;
  achievements: String[]
}

// experienceData.ts
export const educationData: EducationCardType[] = [
  {
    id: 1,
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#6ae3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></g></svg>
    ),
    title: "Bachelor of Information Technologgy-BSIT",
    institute: "University of Sindh, Jamshoro",
    duration: "Sep 2023 – Sep 2024",
    detail:
      "Intensive program focusing on modern web technologies and industry best practices.",
    achievements: [
      "Built responsive web pages using HTML, CSS, and JavaScript",
      "Implemented Bootstrap for faster UI development",
      "Collaborated using Git and GitHub for version control",
      
    ]
  },
  {
    id: 2,
    icon:(
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#6ae3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></g></svg>
    ),
    title: "BootCamp Front End Developer",
    institute: "Institute of Emerging Careers,Gujranwala Punjab",
    duration: "Sep 2025 – Feb 2026",
    detail:
      "Focused on computer science fundamentals and software development.",
    achievements: [
      "Developed reusable React components",
      "Implemented Tailwind CSS for modern UI styling",
      "Used Redux and Zustand for state management",
      
    ]
  }
];


const EducationCard: React.FC<EducationCardType> = ({ icon,title, institute,duration, detail, achievements }) => {
  return (
    <div className=" bg-black/30 hover:bg-base text-white p-8  min-h-[450px] border border-borderclr   rounded-3xl hover:border-primary active:border-primary text-start  transition-all duration-600 max-w-5xl">
     
    {
        icon
    }


      <div className=" flex flex-col  justify-between  gap-2 items-start mt-5">

        <span>
      <h3 className="text-[20px] md:text-[20px] font-bold">{title}</h3>
        <p className="text-primary text-[16px] font-semibold " >{institute}</p>
        </span>
        <span className="bg-baseSecondary border border-borderclr text-[12px] py-2 px-4  rounded-full">
            {duration}
        </span>
      </div>

      <p className="text-[14px] text-txtdim my-4">
       {detail}
      </p>

        <h4 className="mb-2 text-[14px] text-primary flex gap-2 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="#6ae3ff" stroke-width="2" d="M10.325 14.763A6 6 0 0 1 6 9V1h12v9M6 3H1v4c0 2.509 1.791 4 4 4h1m14.034-.115C21.742 10.49 23 9.103 23 7V3h-5m-8 16H5v4h11.5m0-13a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13Zm3.5 4l-4.5 4.5L13 16m-2.794-.576A4 4 0 0 0 8 19"/></svg>  Key Achievements:</h4>


      <ul className="flex flex-col text-txtdim list-disc text-[14px] gap-2 pl-5 marker:text-primary">
        {
            achievements.map((item,index) => (
                <li key={index} className="hover:text-primary  active:text-primary ">
                    {item}
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default EducationCard;
