
interface Props {
    skill: Skill
}
export default function Skill({ skill }: Props) {
    return (
        <div>{skill.name}</div>
    )
}
