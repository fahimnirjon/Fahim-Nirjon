import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import pic1 from '../src/images/threads.png';
import pic2 from '../src/images/hessel.png';
import pic3 from '../src/images/ai-saas.png';
import pic4 from '../src/images/avenue.png';
import pic5 from '../src/images/car.png';
import pic6 from '../src/images/paradise.png';
import pic7 from '../src/images/interior.png';
import pic8 from '../src/images/world.png';
import pic9 from '../src/images/bnk.png';


const Info = {
    name: "Fahim Nirjon",
    stack: ["Full Stack Web Developer","MERN Stack Developer", "Software Development Enthusiast","Competitive Programmer"],
    bio: "Hello! I’m Fahim Nirjon, a dedicated full-stack web developer from Bangladesh with a strong expertise in the MERN stack Technology. I’ve recently completed an intensive and comprehensive Full Stack Web Development course from Programming Hero, where I worked on multiple real-world projects that sharpened my ability to build scalable, dynamic applications."
}



const ProjectInfo = [
    {
        title: "Threads Clone with NextJS",
        desc: "This project is a comprehensive community platform with authentication using Clerk (email, password, Google, GitHub), featuring a visually appealing home page showcasing the latest threads. Users can create threads, comment, and engage in nested discussions. The platform offers user and community search with pagination, user profiles, activity notifications, and community creation with member management. Admins can create exclusive threads, and community profiles showcase threads and members. The application is optimized for blazing-fast performance using Next.js, MongoDB with complex schemas, real-time event listening, and file uploads. It also includes form management with React Hook Form, data validation with Zod, and modern features like Next.js layout route groups. Figma designs are implemented with pixel-perfect precision for a responsive experience.",
        image: `${pic1}`,
        live: true,
        technologies: ["Next.JS","TypeScript", "MongoDB", "TailwindCSS","ShadCN UI", "Redux", "Clerk","Serverless Api","Web Hooks","ZOD", "React Hook Form"],
        link: "https://threads-fsn.vercel.app/",
        github: "https://github.com/fahimnirjon/Threads-Nextjs"
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
        title: "PixelForge AI",
        desc: "Hi there I am Fahim Nirjon. I have developed this Pixel Forge AI saas app.Dive into the trendiest topic on the internet– Artificial Intelligence– as we guide you through building your own AI Prompt Selling Marketplace.What makes this project even more exciting? It's fully completed and ready for deployment, allowing you to kickstart your AI startup effortlessly.Get ready to embark on your AI journey with this comprehensive and innovative project.",
        image: `${pic3}`,
        live: false,
        technologies: ["Next.JS", "Typescript", "TailwindCSS","NextUI", "Clerk","ShadcnUI", "MongoDB", "Prisma"],
        link: "https://pixel-forge04.vercel.app/",
        github: "https://github.com/fahimnirjon/Pixel-Forge-AI"
    },
    {
        title: "Affluence Avenue",
        desc: "This is Resort Management Website. Explore Real States unveils a world of opulence with its luxury properties. From lavish penthouses overlooking glittering cityscapes to sprawling estates nestled in serene landscapes, each residence exudes elegance and sophistication. Immerse yourself in unparalleled comfort and style, where every detail is crafted to indulge the most discerning tastes.",
        image: `${pic4}`,
        live: false,
        technologies: ["React", "MongoDB", "Javascript", "Express.JS", "TailwindCSS", "Firebase", "Daisy UI", "Tanstack Query", "MUI", "ShadcnUI", "Sweet Alert"],
        link: "https://affluence-avenue-20b28.web.app/",
        github: "https://github.com/fahimnirjon/Affluence-Avenue"
    },
    {
        title: "Car Doctor",
        desc: "This is the client-side code for the Car Doctor application, which offers a comprehensive solution for managing car services and appointments. Built with modern web technologies, it provides a smooth and responsive user experience. The project is structured with scalability in mind, using tools like Firebase for backend integration and Tailwind CSS for clean and efficient styling.",
        image: `${pic5}`,
        live: false,
        technologies: ["React","MongoDB", "NodeJs", "TailwindCSS", "Heroicons", "Firebase", "Express.JS"],
        link: "https://car-doc-b10ae.web.app/",
        github: "https://github.com/fahimnirjon/Car-Doctor-Client"
    },
    {
        title: "Reader`s Paradise",
        desc: "The Reader`s paradise repository features the client-side code for an book e-store platform application, utilizing React.js, Vite, and Tailwind CSS for a responsive and visually appealing user experience. The structure includes a public folder for static assets and a src directory for core components. With PostCSS and ESLint for improved CSS processing and code quality, this project aims to deliver a modern interface for interior design services on all devices",
        image: `${pic6}`,
        live: false,
        technologies: ["React", "Javascript", "Tailwind","firebase","mongoDB", "Daisy UI", "MUI"],
        link: "https://readers-paradise.netlify.app/",
        github: "https://github.com/fahimnirjon/Reader-s-Paradise"
    },
    {
        title: "VR World",
        desc: "VR-World: This repository contains a virtual reality project built with modern web technologies. It utilizes Vite for development, along with Tailwind CSS for styling. The project structure includes essential configuration files, source code, and a comprehensive README to guide users through setup and usage.",
        image: `${pic8}`,
        live: false,
        technologies: ["React","Javascript", "Tailwind", "Daisy UI", "MUI", "Framer Motion", "Three.JS"],
        link: "https://vr-world-00.netlify.app/",
        github: "https://github.com/fahimnirjon/VR-World"
    },
    {
        title: "Interior Design",
        desc: "The Interior Frontend repository features the client-side code for an interior design application, utilizing React.js, Vite, and Tailwind CSS for a responsive and visually appealing user experience. The structure includes a public folder for static assets and a src directory for core components. With PostCSS and ESLint for improved CSS processing and code quality, this project aims to deliver a modern interface for interior design services on all devices",
        image: `${pic7}`,
        live: false,
        technologies: ["React","Javascript", "Tailwind", "Daisy UI", "MUI"],
        link: "https://interior-freak.netlify.app/",
        github: "https://github.com/fahimnirjon/Interior-Frontend/"
    },
    {
        title: "Modern Bank",
        desc: "Bank-Design: This repository showcases a modern banking application design built using Vite and styled with Tailwind CSS. It features a clean and responsive user interface, with source code and configuration files organized for easy navigation. The README provides setup instructions and details on the project's features.",
        image: `${pic9}`,
        live: false,
        technologies: ["React","Javascript", "Tailwind", "ShadcnUI", "Daisy UI", "MUI"],
        link: "https://hoo-bank-00.netlify.app/",
        github: "https://github.com/fahimnirjon/Bank-Design"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript","Typescript","Next.JS", "React JS", "Redux", "Tailwind CSS", "GSAP","Framer Motion", "Material UI", 
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS","MongoDB", "Firebase", "Prisma","JWT", "MySQL", "PostgreSQL"]
    },
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "C", "C++", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Axios", "Tanstack Query", "Clerk"]
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
        role: "MERN Stack Developer",
        company: "Programming Hero.Com",
        date: "Jan 2024 - June 2024",
        desc: "I embarked on an enriching journey by enrolling in a MERN Stack course on Programming Hero. Throughout the course, I gained hands-on experience in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. The curriculum was structured to provide a deep understanding of both frontend and backend technologies, focusing on building dynamic, responsive web applications. From database management to server-side logic and frontend user interfaces, this course helped me strengthen my skills in modern web development practices. It also emphasized real-world projects, which significantly boosted my problem-solving abilities and coding efficiency.",
        skills: ["HTML","CSS", "TailwindCSS", "React JS", "Javascript", "Node JS", "ExpressJS", "MongoDB", "NextJS"]
    },
    {
        role: "Full Stack Web Developer",
        company: "Ostaad Online E-Learning",
        date: "Oct 2023- Feb 2024",
        desc:  "Ostaad is an e-learning platform where I learned full stack development, gaining comprehensive knowledge of both frontend and backend technologies. The platform offers hands-on learning experiences, allowing me to develop real-world projects using modern web technologies and tools. Ostaad's structured courses helped enhance my coding skills and understanding of full stack web development.",
        skills: ["HTML", "CSS", "Python", "Javascript", "PostgreSql", "NextJS", "Dev Tools"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "python",
    "C",
    "C++",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "netlify",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };