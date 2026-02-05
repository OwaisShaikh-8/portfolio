import React from "react";

// types.ts
import { ReactNode } from "react";

export interface StackCardType {
  id: number;
  icon: ReactNode; // SVG or any React component
  heading: string; // The title of the skill category
  detail: string; // Array of skills
}

export const stackData: StackCardType[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><g fill="none" stroke="#6ae3ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44"/><path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44"/></g></svg>
    ),
    heading: "MERN Stack",
   detail: "Expert in building full-stack JavaScript applications using MongoDB, Express.js, React, and Node.js. Creating seamless, high-performance web applications with modern best practices."
  },
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#6ae3ff" d="M14.6 8.075q0-1.075-.712-1.725T12 5.7q-.725 0-1.312.313t-1.013.912q-.4.575-1.088.663T7.4 7.225q-.35-.325-.387-.8t.237-.9q.8-1.2 2.038-1.862T12 3q2.425 0 3.938 1.375t1.512 3.6q0 1.125-.475 2.025t-1.75 2.125q-.925.875-1.25 1.363T13.55 14.6q-.1.6-.513 1t-.987.4t-.987-.387t-.413-.963q0-.975.425-1.787T12.5 11.15q1.275-1.125 1.688-1.737t.412-1.338M12 22q-.825 0-1.412-.587T10 20t.588-1.412T12 18t1.413.588T14 20t-.587 1.413T12 22"/></svg>
    ),
    heading: "Lorem",
   detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto sit unde labore in! Quis repudiandae fugit quos sequi odio rerum iusto, delectus veritatis, est ad ex officiis quia nihil."
  }
  

];

const StackCard: React.FC<StackCardType> = ({ icon, heading, detail }) => {
  return (
    <div className="text-white p-8  border border-borderclr bg-black/30 hover:bg-base active:bg-base rounded-3xl hover:border-primary active:border-primary text-start group hover:-translate-y-1 active:-translate-y-1 transition-transform duration-500">
     
      <div className=" w-fit p-5 rounded-2xl transition-all duration-300 bg-[#06586b]">{icon}</div>

      {/* Heading */}
      <h3 className="mt-4 mb-3 text-[24px] font-bold">{heading}</h3>

      <p className="list-disc text-[16px] text-txtdim marker:text-primary flex flex-col gap-1 ">
       {detail}
      
      </p>
    </div>
  );
};

export default StackCard;
