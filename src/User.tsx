import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import pic1 from '../src/images/Screenshot 2024-11-19 000817.png';
import pic2 from '../src/images/hessel.png';
import pic3 from '../src/images/stacks.png';
import pic4 from '../src/images/blog.png';
import pic5 from '../src/images/tracker.png';
import pic6 from '../src/images/ai-saas.png';


const Info = {
    name: "Fahim Nirjon",
    stack: ["Full Stack Web Developer","MERN Stack Developer", "Software Development Enthusiast","Competitive Programmer"],
    bio: "Hello! I’m Fahim Nirjon, a dedicated full-stack web developer from Bangladesh with a strong expertise in the MERN stack Technology. I’ve recently completed an intensive and comprehensive Full Stack Web Development course from Programming Hero, where I worked on multiple real-world projects that sharpened my ability to build scalable, dynamic applications."
}



const ProjectInfo = [
    {
        title: "Airbnb: A Full-Stack MERN Application",
        desc: "This project contains a full-stack Airbnb clone built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project replicates core functionalities of the Airbnb platform, including responsive design and dynamic user interfaces created with React.js and modern CSS frameworks like Tailwind CSS or Bootstrap. It features user authentication for login and signup, property listings with filtering options, interactive map integration for visualizing property locations, and a complete booking system for scheduling and confirming reservations. This project is designed to deliver a seamless user experience with optimized performance and modern development practices.",
        image: `${pic1}`,
        live: true,
        technologies: ["React.js","JavaScript", "MongoDB", "Node.js", "Express.js", "TailwindCSS", "Axios", "JWT","React Hook Form"],
        link: "comforth-be903.web.app/",
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
        title: "Ehya- A Modern full stack blog management",
        desc: "Welcome to Ehya, an interactive and intuitive forum platform where users engage through conversations in the form of posted messages. Whether it’s asking questions, sharing insights, or building a vibrant community, Ehfy ensures seamless discussions in a modern environment. 1.Upvote & Downvote System. 2.Admin Dashboard Control. 3.Categories & Topics Management",
        image: `${pic4}`,
        live: false,
        technologies: ["React", "MongoDB", "Javascript", "Express.JS", "TailwindCSS", "Firebase", "Daisy UI", "Tanstack Query", "MUI", "ShadcnUI", "Sweet Alert"],
        link: "https://blog-management-frontend-crafted.onrender.com/",
        github: "https://github.com/fahimnirjon/Blog-Management-Frontend"
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