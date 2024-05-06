import { FaHtml5, FaCss3Alt, FaReact,} from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { TbBrandNextjs, TbBrandPrisma, TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss, SiJest } from "react-icons/si";

export const links = [
    {label:"Home", href:"#home"},
    {label:"Projects", href:"#projects"},
    {label:"Skills", href:"#skills"},
    {label:"My Joruney", href:"#journey"},
    {label:"Contact", href:"#contact"},
]

export const journeyCards = [
    {
      id: 1,
      title: "November 2022",
      description:
        "At first, I already knew the basics of HTML and CSS because I learned them in my IT school. But I really got into programming in November 2022 by watching beginner videos on YouTube channels. After that, I learned more advanced stuff in these two programming languages.",
    },
    {
      id: 2,
      title: "January 2023",
      description:
        "I started creating my first projects using JavaScript. For example, I created an advanced to-do list and a finance manager.",
    },  
    {
      id: 3,
      title: "April 2023",
      description:
        "After creating a few larger projects in JavaScript, I thought I could take the next step in my programming journey. As my framework for creating websites, I chose React.",
    },
    {
      id: 4,
      title: "July 2023",
      description:
        "During this time, I began expanding my knowledge by exploring Tailwind CSS and other libraries to improve my workflow. Additionally, I took my first steps into backend technology with Firebase.",
    },
    {
      id: 5,
      title: "November 2023",
      description:
        "During this time, I began to feel confident in my knowledge of React. So, I started learning Node.js, Next.js and MongoDB.",
    },
    {
      id: 6,
      title: "February 2024",
      description: "after making a few applications in node js and next.js, I felt better in nextjs, so I started creating the rest of the projects in this framework.",
    },
    {
      id: 7,
      title: "Now",
      description: "I created two big projects, 'shop-nextjs' and 'CalendarCollabore,' on my own in Next.js. Now I'm expanding my knowledge in testing applications using Jest.",
    },
  ];

  
export const projects = [
    {
      link: "https://shop-nextjs-beta.vercel.app/",
      github: "https://github.com/SebastianLib/shop-nextjs",
      title: "Shop-nextjs",
      description:
        "In this project, you can create your own products, filter items by various categories, add them to your shopping cart, and buy them if you are logged in. You can also see your purchased products in the 'Purchased Items' section.",
      image: "/shopImg.PNG",
    },
    {
      link: "https://calendar-collaborate.vercel.app/",
      github: "https://github.com/SebastianLib/CalendarCollaborate",
      title: "CalendarCollaborate",
      description:
        "With this app, you and your teammates can create tasks for yourselves and your team, then view them on your calendar. You can also create and join teams, follow others, and track daily task progress.",
      image: "/calendarImg.PNG",
    },
    {
      link: "#",
      github: "https://github.com/SebastianLib/portfolio",
      title: "Portfolio Website",
      description:
        "On this website, I showcase my best projects and demonstrate all my acquired skills. In the hero section, you can download my CV by clicking the button, and through the contact form, you can easily send me an email.",
      image: "/portfolioImg.PNG",
    },
  ];
  
  export interface ProjectTypes {
    title: string, 
    image: string,
    github: string, 
    link: string,
    description: string
  }


export const skillsList = [
    {icon:  FaHtml5, label: "HTML"},
    {icon:  FaCss3Alt, label: "CSS"},
    {icon:  DiJavascript, label: "JAVASCRIPT"},
    {icon:  FaReact, label: "REACT"},
    {icon:  TbBrandNextjs, label: "NEXTJS"},
    {icon:  DiMongodb, label: "MONGODB"},
    {icon:  TbBrandPrisma, label: "PRISMA"},
    {icon:  SiTailwindcss, label: "TAILWIND CSS"},
    {icon:  TbBrandFramerMotion , label: "FRAMER MOTION"},
    {icon:  SiJest , label: "JEST"},
]