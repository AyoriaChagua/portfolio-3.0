export const MOCK_EXPERIENCE: Experience[] = [
    {
        title: "Jr Developer",
        company: "Petroamerica",
        location: "Miraflores, Lima - Perú",
        dates: "December 2023 - actuality",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1710465893/portfolio/petroamerica.jpg",
        tasks: [
            "I was in charge of maintaining the billing systems that had direct communication with Sunat.",
            "Work as a team to develop projects for different areas of the company, I was in charge of front and back development.",
            "Provide maintenance to web applications previously developed within the company.",
        ]
    },
    {
        title: "Fullstack Developer (web & mobile)",
        company: "Freelance",
        location: "Remote",
        dates: "September 2023 - July 2024",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1724728752/portfolio/hbo8kmgwokmg4qhoqnbw.png",
        tasks: [
            "I analyzed the requirements and made an architectural design for a mobile education application.",
            "Design and Development of a responsive landing page for an educational institution capable of tracking visits and likes."
        ]
    },
    {
        title: "Intern Developer",
        company: "Diajo S.A.C.",
        location: "Remote",
        dates: "January 2023 - March 2023",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1710465949/portfolio/diajo.png",
        tasks: [
            "I analyzed  advertising alternatives for the company.",
            "I analyzed  best email sending practices",
            "Develop a massive email sending automation script."
        ]
    },

];

export const MOCK_SKILLS: Skill[] = [
    {
        icon: "javascript",
        name: "JavaScript",
        color: "#F7DF1E"
    },
    {
        icon: "react",
        name: "React",
        color: "#61DAFB"
    },
    {
        icon: "nodejs",
        name: "NodeJS",
        color: "#339933"
    },
    {
        icon: "nestjs",
        color: "#ea2845",
        name: "NestJS"
    },
    {
        icon: "java",
        name: "Java",
        color: "#007396"
    },
    {
        icon: "spring",
        name: "SpringBoot",
        color: "#6DB33F"
    },
    {
        icon: "postresql",
        name: "PostgreSQL",
        color: "#336791"
    },
    {
        icon: "sqlserver",
        name: "SQLServer",
        color: "#CC2927"
    },
    {
        icon: "typescript",
        name: "TypeScript",
        color: "#007ACC"
    },
    {
        icon: "reactnative",
        name: "ReactNative",
        color: "#61DAFB"
    },
    {
        icon: "docker",
        name: "Docker",
        color: "#0db7ed"
    },
    {
        icon: "redux",
        name: "Redux",
        color: "#764abc"
    },
    {
        icon: "tailwind",
        name: "Tailwind",
        color: "#06B6D4"
    },
    {
        icon: "supabase",
        name: "Supabase",
        color: "#3ecf8e"
    }
];

export const MOCK_PROJECTS: Project[] = [
    {
        title: "PETRO SYSTEM TLMP ",
        summary: "Fullstack solution developed at my work. A web system in charge of managing the company's acquisitions, creating purchase, payment, or service orders.",
        description: "I created a full-stack application to manage the company's financial operations, including purchase, payment, and service orders. Utilized Node.js for the backend, React for the frontend, Node.js for the backend and SQL Server for the database. The UI is styled with CSS3, and React components allow mobile access for real-time updates.",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1724727934/portfolio/yue06xoc9x60k6gukuvf.png",
        dates: "1 July, 2024 - 1 May, 2024",
        skills: ["nodejs", "react", "sqlserver", "css3", "typescript"],
        tags: ["for company", "follow up", "full-stack", "responsive"],
        video_link: "https://res.cloudinary.com/dcxg13hqx/video/upload/v1720793925/portfolio/whcbcrtcz0rn5mb3rgko.mp4",
        github: "https://github.com/AyoriaChagua/petro-tlmp-web",
    },
    {
        title: "ORDERING APP",
        summary: "Fullstack solution developed at my work. A web system in charge of managing the company's acquisitions, creating purchase, payment, or service orders.",
        description: "Developed a comprehensive full-stack solution to streamline the company's procurement process. The app manages acquisitions, creating and tracking purchase, payment, and service orders. Built with Node.js for the backend, React for the frontend, SQL Server for database management, and styled with CSS3. Also includes a React Native component for mobile access.",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1720794251/portfolio/vdtdwvfiiauwbkm2rmyn.png",
        dates: "5 August, 2024 - 15 July, 2024",
        skills: ["nodejs", "react", "sqlserver", "css3", "javascript", "react-native"],
        tags: ["for company", "follow up", "full-stack"],
        video_link: "https://res.cloudinary.com/dcxg13hqx/video/upload/v1720804255/portfolio/ty67hvkzw8plwbhyqgpj.mp4",
        github: "https://github.com/AyoriaChagua/petroamerica-app"
    },
    {
        title: "LANDING PAGE - ZEGEL IPAE",
        summary: "The responsive page tracks visits and likes, using serverless functions in Supabase that can be applied to other projects.",
        description: "Project developed for a research project at the institute. Fully responsive design to receive visits from different devices, the main task of the page is to track the visits that are made and how many people like the page, this functionality is also implemented in this portfolio so the development of the serverless functions in Supabase can be implemented in other projects.",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1723176742/portfolio/ovcc5ykwb4xfgjyrs0aq.png",
        dates: "5 June, 2024",
        skills: ["react", "tailwind", "git", "typescript", "supabase"],
        tags: ["finished", "freelance", "full-stack", "responsive"],
        github: "https://github.com/AyoriaChagua/landing-page-zegel",
        link: "https://ayoriachagua.github.io/landing-page-zegel/"
    },
    {
        title: "LMS CEEC",
        summary: "Solution for the management and distribution of online educational content. Designed for the CEEC, it offers an intuitive and customizable learning experience.",
        description: "Developed an LMS for CEEC to manage and distribute online educational content. The platform provides an intuitive, customizable experience for educators and students. Built with React Native for mobile, Node.js and Express for the backend, and PostgreSQL for data storage. TypeScript ensures code quality, and Git is used for version control.",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1720815641/portfolio/wbcqtq6wlbmksrtmdmo6.png",
        dates: "15 January, 2024",
        skills: ["reactnative", "css3", "postresql", "git", "nodejs", "express", "typescript"],
        tags: ["finished", "for company", "full-stack"],
        github: "https://github.com/AyoriaChagua/ceec-mobile-"
    },
];

