import { useState } from "react";
import { MOCK_PROJECTS } from "../utils/mock-data";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    
}