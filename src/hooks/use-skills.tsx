import { useEffect, useState } from "react";
import { MOCK_SKILLS } from "../utils/mock-data";

export const useSkills = () => {
    const [skills, setSkills] = useState<Skill[] | AuxSkill[]>(MOCK_SKILLS);
    
    useEffect(() => {
        (() => {
            const auxSkills: AuxSkill[] = MOCK_SKILLS.map(skill => ({
                ...skill,
                isActive: false
            }));
            setSkills(auxSkills);
        })
    }, [])

    const handleSkillClick = (index: number) => {
        setSkills(prevState => {
            const updatedSkills: AuxSkill[] = [...prevState] as AuxSkill[];
            updatedSkills[index] = {...updatedSkills[index], isActive: !updatedSkills[index].isActive};
            const sortedSkills = [...updatedSkills].sort((a, b) => {
                const aIsActive = 'isActive' in a ? (a as AuxSkill).isActive : (a as AuxSkill).isActive;
                const bIsActive = 'isActive' in b ? (b as AuxSkill).isActive : (b as AuxSkill).isActive;
                return aIsActive === bIsActive ? 0 : aIsActive ? -1 : 1;
            });
            return sortedSkills;
        })
    };

    return { skills, handleSkillClick };
}