import { Skill } from ".."

interface Props {
    skills: Skill[]
}

export default function SkillBox({ skills }: Props) {
    return (
        <>
            {skills.map(skill => (
                <Skill skill={skill} />
            ))}
        </>
    )
}
