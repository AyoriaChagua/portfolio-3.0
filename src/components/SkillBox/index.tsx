import { Skill } from ".."
import { useSkills } from "../../hooks/use-skills";
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function SkillBox() {
    const { handleSkillClick, skills } = useSkills();
    const [parent, enableAnimation] = useAutoAnimate();
    return (
        <div className="border-[#413DF9] border-2 rounded-lg p-5 mt-8 flex flex-wrap gap-5 justify-center" ref={parent}>
            {skills.map((skill, index) => (
                <div key={skill.name}>
                    <Skill skill={skill as AuxSkill} onClickOrder={() => handleSkillClick(index)} />
                </div>
            ))}
        </div>
    )
}
