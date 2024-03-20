export const MOCK_EXPERIENCE: Experience[] = [
    {
        title: "Jr Developer",
        company: "Petroamerica",
        location: "Miraflores, Lima - Perú",
        dates: "December 2023 - actuality",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1710465893/portfolio/petroamerica.jpg",
        tasks: [
            "Development of web applications using React, Angular, and Vue.js",
            "Design and implementation of APIs in NodeJS with Express framework.",
        ]
    },
    {
        title: "Mobile Developer",
        company: "A365",
        location: "Remote",
        dates: "October 2023 - February 2024",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1710466029/portfolio/ceec.jpg",
        tasks: [
            "Development of web applications using React, Angular, and Vue.js",
            "Design and implementation of APIs in NodeJS with Express framework.",
            "Participation in code reviews to ensure the quality of the project."
        ]
    },
    {
        title: "Intern Developer",
        company: "Diajo S.A.C.",
        location: "Remote",
        dates: "January 2023 - March 2023",
        image: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1710465949/portfolio/diajo.png",
        tasks: [
            "Development of web applications using React, Angular, and Vue.js",

        ]
    },

];

export const MOCK_SKILLS: Skill[] = [
    {
        icon: "css3",
        name: "CSS3",
        color: "#264de4"
    },
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
        icon: "git",
        name: "Git",
        color: "#999999"
    },
    {
        icon: "java",
        name: "Java",
        color: "#007396"
    },
    {
        icon: "spring",
        name: "Spring Boot",
        color: "#6DB33F"
    },
    {
        icon: "postresql",
        name: "PostgreSQL",
        color: "#336791"
    },
    {
        icon: "mongodb",
        name: "MongoDB",
        color: "#4DB33D"
    },
    {
        icon: "sqlserver",
        name: "SQL Server",
        color: "#CC2927"
    },
    {
        icon: "typescript",
        name: "TypeScript",
        color: "#007ACC"
    },
    {
        icon: "reactnative",
        name: "React Native",
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
    }
];

export const MOCK_PROJECTS: Project[] = [
    {
        title: "Mesa de partes",
        description: "Fullstack solution developed at my work. a web system in charge of managing the company's acquisitions, creating purchase, payment or service orders.",
        image: "",
        dates: "15 January, 2024 - actuality",
        skills: ["nodejs", "react", "sqlserver", "css3", "javascript"],
        tags: ["for company", "follow up", "full-stack"]
    },
    {
        title: "LMS CEEC",
        description: "Solution for the management and distribution of online educational content. Designed for the CEEC, it offers an intuitive and customizable learning experience.",
        image: "",
        dates: "15 January, 2024",
        skills: ["reactnative", "css3", "postresql", "git", "nodejs", "express", "typescript"],
        tags: ["finished", "for company", "full-stack"]
    },
    {
        title: "Monitorme",
        description: "Thesis project that seeks to control the use of programs during class hours in the laboratory. The system is responsible for monitoring students, notifying teachers and providing statistical analysis.",
        image: "",
        link: "https://github.com",
        dates: "2024-07-01 - actuality",
        skills: ["tailwind", "react", "nodejs", "postresql", "javascript", "express", "git", "mongodb"],
        tags: ["follow up", "personal", "full-stack"]
    },
    {
        title: "FruitTrack",
        description: "Fullstack solution developed at my work. a web system in charge of managing the company's acquisitions, creating purchase, payment or service orders.",
        image: "",
        link: "https://github.com",
        dates: "2024-04-15 - actuality",
        skills: ["reactnative", "typescript", "redux", "spring", "java", "postresql", "git"],
        tags: ["personal", "developing", "full-stack"]
    },
    {
        title: "Ayoria.X.Blog",
        description: "My personal blog",
        image: "",
        link: "https://github.com",
        dates: "2024-06-01 - actuality",
        skills: ["react", "tailwind", "redux", "spring", "java", "postresql", "docker","git"],
        tags: ["personal", "developing", "full-stack"]
    }
]
