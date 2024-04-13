"use client";
import { useState } from "react";
import Body from "./Body";
import Card from "./Card";

const features = [
  {
    link: "https://shop-nextjs-beta.vercel.app/",
    github: "https://github.com/SebastianLib/shop-nextjs",
    title: "Shop-nextjs",
    description:
      "In this project, you can create your own products, add them to your shopping cart, and buy them if you are logged in.",
    image: "/shopImg.png",
  },
  {
    link: "https://calendar-collaborate.vercel.app/",
    github: "https://github.com/SebastianLib/CalendarCollaborate",
    title: "CalendarCollaborate",
    description:
      "With this app, you and your teammates can create tasks for yourselves and your team, then view them on your calendar. You can also create and join teams, follow others, and track daily task progress.",
    image: "/calendarImg.png",
  },
  {
    link: "#",
    github: "https://github.com/SebastianLib/portfolio",
    title: "Portfolio Website",
    description:
      "On this website, I showcase my best projects and demonstrate all my acquired skills. In the hero section, you can download my CV by clicking the button, and through the contact form, you can easily send me an email.",
    image: "/portfolioImg.png",
  },
];

const StickyScroll = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="md:-mt-32 z-0 px-2 flex w-full md:gap-4 xl:gap-20 items-start">
      <div className="w-full md:py-[40vh]">
        <div>
          {features.map((feature, index) => (
            <Body
              key={index}
              setCurrentIndex={setCurrentIndex}
              index={index}
              features={features[index]}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:flex w-full sticky top-0 h-screen items-center">
        <div className="w-full rounded-2xl aspect-square">
          <Card 
          currentImage={features[currentIndex].image} 
          link={features[currentIndex].link}
          github={features[currentIndex].github}
          />
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
