type skill = "html5" | "css3" | "javascript" | "react" | "nodejs" | "git" | "java" | "spring" | "postresql" | "mongodb" | "sqlserver" | "typescript" | "reactnative" | "docker" | "redux" | "express" | "tailwind" | "github" | "react-native" | "supabase";
type tag = "finished" | "follow up" | "for company" | "personal" | "developing" | "in maintenance" | "full-stack" | "freelance"

type VisitData = {
    user_id: string;
    page_url: string;
}

type LikeData = {
    user_id: string;
    page_url: string;
}

type themeMode = "dark" | "light"