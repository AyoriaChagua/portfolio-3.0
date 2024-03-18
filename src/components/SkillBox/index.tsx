import { Skill } from ".."
import { useSkills } from "../../hooks/use-skills";

interface Props {
    skills: Skill[]
}

export default function SkillBox() {
    const { handleSkillClick, skills } = useSkills();
    return (
        <div className="border-[#413DF9] border-2 rounded-lg p-5 mt-8">
            <div className={`flex flex-wrap gap-4  justify-center items-center`}>
                {skills.map((skill, index) => (
                    <Skill skill={skill} key={skill.name} onClickOrder={() => handleSkillClick(index)} />
                ))}
            </div>
        </div>
    )
}
