import { Skill } from ".."
import { useSkills } from "../../hooks/use-skills";

export default function SkillBox() {
    const { handleSkillClick, skills } = useSkills();

    return (
        <div className="border-[#413DF9] border-2 rounded-lg p-5 mt-8">
            <div className={`flex flex-row gap-4  justify-center items-center`}>
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        style={{
                            transition: 'transform 0.5s ease',
                            transform: `translateY(${index * 100}%)`,
                        }}
                    >
                        <Skill skill={skill as AuxSkill} onClickOrder={() => handleSkillClick(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
