import { useState } from "react"
import { CustomIcon } from ".."

interface Props {
    readonly skill: Skill
    readonly onClickOrder: () => void
}
export default function Skill({ skill, onClickOrder }: Props) {
    const [isActive, setisActive] = useState(false);
    const onClickActive = () => {
        setisActive(!isActive);
        onClickOrder();
    }
    return (
        <div className="flex flex-row items-center gap-1 cursor-pointer" onClick={onClickActive}>
            <CustomIcon name={skill.icon} color={isActive ? skill.color : 'white'} size={40} isActive={isActive} />
            <div style={{ color: isActive ? skill.color : "white" }} className={`text-base font-bold skills ${isActive ? 'show-skills' : ''}`} >
                {skill.name}
            </div>
        </div>
    )
}
