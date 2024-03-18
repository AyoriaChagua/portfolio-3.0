import { useState } from "react";
import { MOCK_SKILLS } from "../utils/mock-data";

export const useSkills = () => {
    const [skills, setSkills] = useState(MOCK_SKILLS);
    const handleSkillClick = (index: number) => {
        const newSkills = [...skills];
        const skillClicked = newSkills.splice(index, 1)[0];
        newSkills.unshift(skillClicked);
        setSkills(newSkills);
    };

    return { skills, handleSkillClick };
}