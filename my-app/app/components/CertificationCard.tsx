import Link from "next/link";
import React from "react";

// types.ts
import { ReactNode } from "react";

// types.ts
export interface CertificationCardType {
  id: number;
  title: string;
  link: string; // URL to the certificate or course
  img: string; // Path to the image or imported React component
}

// experienceData.ts
export const CertificationData: CertificationCardType[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    link: "https://example.com/certificate/web-developer-intern",
    img: "/images/cert-web-dev-intern.png", // or imported like: img: WebDevInternImg
  },
  {
    id: 2,
    title: "Front End Developer BootCamp",
    link: "https://example.com/certificate/frontend-bootcamp",
    img: "/images/cert-frontend-bootcamp.png",
  },
  {
    id: 3,
    title: "React JS Advanced Course",
    link: "https://example.com/certificate/react-advanced",
    img: "/images/cert-react-advanced.png",
  }
];


const CertificationCard: React.FC<CertificationCardType> = ({ title,link,img,}) => {
  return (
    <Link href={link} className="text-white p-8  border border-borderclr   rounded-3xl hover:border-primary active:border-primary  text-start  transition-all duration-600 max-w-5xl">
     
      <div className=" flex flex-col    gap-2 items-start">

        <span>
      <h3 className="text-[20px] md:text-[24px] font-bold">{title}</h3>
        <p className="text-primary text-[16px] font-semibold " >{title}</p>
        </span>
        <span className="bg-baseSecondary border border-borderclr text-[12px] py-2 px-4  rounded-full">
            {title}
        </span>
      </div>
      

    </Link>
  );
};

export default CertificationCard;
