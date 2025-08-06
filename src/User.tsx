import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import pic1 from '../src/images/Screenshot 2024-11-19 000817.png';
import pic2 from '../src/images/hessel.png';
import pic3 from '../src/images/stacks.png';
import pic4 from '../src/images/ecom.png';
import pic5 from '../src/images/tracker.png';
import pic6 from '../src/images/ai-saas.png';


const Info = {
    name: "Fahim Nirjon",
    stack: ["Full Stack Web Developer","MERN Stack Developer", "Software Development Enthusiast","Competitive Programmer"],
    bio: "Hello! I’m Fahim Nirjon, a dedicated full-stack web developer from Bangladesh with a strong expertise in the MERN stack Technology. I’ve recently completed an intensive and comprehensive Full Stack Web Development course from Programming Hero, where I worked on multiple real-world projects that sharpened my ability to build scalable, dynamic applications."
}



const ProjectInfo = [
      {
        title: "Desire -A modern scalable E-commerce Site",
        desc: "Desire is a modern, responsive e-commerce website focused on tech gadgets and electronics. Built using the MERN stack, this platform offers seamless browsing, user authentication, product management, and a streamlined shopping experience.",
        image: `${pic4}`,
        live: true,
        technologies: ["Next.js", "React.js", "TypeScript","Sanity.io", "Node.js", "Express.js", "ShadCnUI", "Clerk", "Stripe", "Github", "Vercel"],
        link: "https://desire-nine.vercel.app/",
        github: "https://github.com/fahimnirjon/Desire"
    },
    {
        title: "Airbnb: A Full-Stack MERN Application",
        desc: "This project contains a full-stack Airbnb clone built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project replicates core functionalities of the Airbnb platform, including responsive design and dynamic user interfaces created with React.js and modern CSS frameworks like Tailwind CSS or Bootstrap. It features user authentication for login and signup, property listings with filtering options, interactive map integration for visualizing property locations, and a complete booking system for scheduling and confirming reservations. This project is designed to deliver a seamless user experience with optimized performance and modern development practices.",
        image: `${pic1}`,
        live: true,
        technologies: ["React.js","JavaScript", "MongoDB", "Node.js", "Express.js", "TailwindCSS", "Axios", "JWT","React Hook Form"],
        link: "https://comforth-be903.web.app/",
        github: "https://github.com/fahimnirjon/Airbnb"
    },
    {
        title: "Gaugearam Hesshel Restaurant",
        desc: " `Gaugearam-Hessel-Client` is a restaurant app project using modern web technologies like Firebase, Tailwind CSS, and Vite. The repository includes setup for Firebase integration, linting with ESLint, and uses Tailwind CSS for styling. It is configured with Vite for a fast development environment, and the source code is structured in the src folder. The app likely provides a seamless user experience with its efficient build system and real-time database setup through Firebase.",
        image: `${pic2}`,
        live: true,
        technologies: ["React", "Javascript", "MongoDB", "TailwindCSS", "Express.JS", "Firebase", "DaisyUi", "MUI"],
        link: "https://gaugeram-hessel.web.app/",
        github: "https://github.com/fahimnirjon/Gaugearam-Hessel-Client"
    },
    {
        title: "Beyond The Stacks",
        desc: "The Beyond-The-Stacks is a modern web application built with Next.js, showcasing an optimized and scalable architecture. It integrates advanced configuration files like `next-sitemap.config.js` for SEO optimization, `contentlayer.config.js` for efficient content handling, and leverages Tailwind CSS for responsive and elegant styling. The project employs environment variables through `.env.example` for secure configuration, and adheres to coding standards with `.eslintrc.json` for linting. With its modular structure in the `src` and `public` folders, this project is designed for seamless development and deployment. It is a robust and versatile application tailored for developers aiming for high performance and scalability..",
        image: `${pic3}`,
        live: false,
        technologies: ["Next.JS", "Typescript", "TailwindCSS", "NextUI", "NextAuth", "ShadcnUI", "Prisma"],
        link: "https://beyond-the-stacks.vercel.app/",
        github: "https://github.com/fahimnirjon/Beyond-The-Stacks"
    },
    {
        title: "Crypto-Tracker: Real-Time Cryptocurrency Monitoring App",
        desc: "Crypto-Tracker is a sleek and intuitive cryptocurrency tracking application designed to help users monitor real-time cryptocurrency prices, view detailed statistics, and stay updated with market trends. Built with modern web technologies, it offers a clean and responsive user interface, ensuring an optimal user experience for crypto enthusiasts.",
        image: `${pic5}`,
        live: false,
        technologies: ["Next.JS", "Typescript", "TailwindCSS","NextUI", "Clerk","ShadcnUI", "MongoDB", "Prisma"],
        link: "https://crypto-chronicles.vercel.app/",
        github: "https://github.com/fahimnirjon/Crypto-Tracker"
    },
    {
        title: "PixelForge AI",
        desc: "Hi there I am Fahim Nirjon. I have developed this Pixel Forge AI saas app.Dive into the trendiest topic on the internet– Artificial Intelligence– as we guide you through building your own AI Prompt Selling Marketplace.What makes this project even more exciting? It's fully completed and ready for deployment, allowing you to kickstart your AI startup effortlessly.Get ready to embark on your AI journey with this comprehensive and innovative project.",
        image: `${pic6}`,
        live: false,
        technologies: ["Next.JS", "Typescript", "TailwindCSS","NextUI", "Clerk","ShadcnUI", "MongoDB", "Prisma"],
        link: "https://pixel-forge04.vercel.app/",
        github: "https://github.com/fahimnirjon/Pixel-Forge-AI"
    },
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript","Typescript","Next.JS", "React JS", "Tailwind CSS", "DaisyUI", "Shadcn UI", "GSAP","Framer Motion", "Material UI", 
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS","MongoDB", "Firebase", "Prisma","JWT", "PostgreSQL", "SUPABASE", "AWS", "Sanity.io", "Netlify", "Vercel", "Render"], 
    },
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "C++", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman","Zustand", "MongoDB Compass", "Axios", "Tanstack Query", "Clerk"]
    }
]
const socialLinks = [
    { link: "https://github.com/fahimnirjon", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/fahimnirjon04", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/ramos_the.beast/", icon: IconBrandInstagram }, 
    { link: "https://www.facebook.com/fahimshahriar.nirjon/", icon: IconBrandFacebook },
    { link: "https://x.com/Fahim_Nirjon04", icon: IconBrandX }
];


const ExperienceInfo = [
    {
        role: "Jr. Full Stack Web Developer",
        company: "OKKHOR'S LLC",
        date: "Oct 2024 - Present",
        desc: "As a Junior Full Stack Developer (MERN Stack) at Okkhor's LLC, a Sweden-based Bangladeshi sister concern company. I develop and maintain scalable web applications using React.js, Next.js, MongoDB, Express.js, and Node.js, focusing on performance, API integration, and user experience.Passionate about coding, I continuously learn and adapt to new technologies, ensuring clean, maintainable code while collaborating with teams to deliver high-quality solutions. This role allows me to grow as a developer and contribute to impactful projects.",
        skills: ["Javascript", "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase"]
    },
    {
        role: "Internship (Full Stack Web Developer)",
        company: "Akbor Skills Development Limited",
        date: "Aug 2024- Sept 2024",
        desc:  "I completed a 4-month internship program at Akbor Skills Development Limited, though I left after 2 months as it was unpaid. During my time there, I gained valuable industry experience in MERN stack development and web technologies, working on real-world projects and improving my problem-solving and collaboration skills. This experience helped me gain a deeper understanding of the industry and prepare for a successful career in web development.",
        skills: ["Javascript", "React JS",  "ExpressJS", "MongoDB", "AWS", "Docker"]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "react",
    "python",
    "C",
    "C++",
    "html5",
    "css3",
    "mongodb",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "netlify",
    "vercel",
    "jest",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };