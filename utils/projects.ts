
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