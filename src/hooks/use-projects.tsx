import { useEffect, useState } from "react";
import { MOCK_PROJECTS } from "../utils/mock-data";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        setProjects(MOCK_PROJECTS)
    }, [])
    
    return {
        projects
    }
}