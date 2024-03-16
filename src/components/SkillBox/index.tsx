import { Skill } from ".."

interface Props {
    skills: Skill[]
}

export default function SkillBox({ skills }: Props) {

    return (
        <div className="border-[#413DF9] border-2 rounded-lg p-5 mt-8">
            <div className={`flex flex-wrap gap-3  justify-center items-center`}>
                {skills.map(skill => (
                    <Skill skill={skill}  key={skill.name} />
                ))}
            </div>
        </div>
    )
}
