import { useState } from "react"
import { CustomIcon } from ".."

interface Props {
    readonly skill: AuxSkill
    readonly onClickOrder: () => void
}

export default function Skill({ skill, onClickOrder }: Props) {

    return (
        <div className="flex flex-row items-center gap-1 cursor-pointer" onClick={onClickOrder}>
            <CustomIcon name={skill.icon} color={skill.isActive ? skill.color : 'white'} size={40} isActive={skill.isActive} />
            <div style={{ color: skill.isActive ? skill.color : "white" }} className={`text-base font-bold skills ${skill.isActive ? 'show-skills' : ''}`} >
                {skill.name}
            </div>
        </div>
    )
}
