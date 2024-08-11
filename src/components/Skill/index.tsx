import { CustomIcon } from ".."
import { useTheme } from "../../context/ThemeContext";

interface Props {
    readonly skill: AuxSkill
    readonly onClickOrder: () => void
}

export default function Skill({ skill, onClickOrder }: Props) {
    const { theme } = useTheme();
    return (
        <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={onClickOrder}>
            <CustomIcon name={skill.icon} color={skill.isActive ? skill.color : theme === "light" ? "#3730A3": "white"} size={40} isActive={skill.isActive} />
            <div style={{ color: skill.isActive ? skill.color : theme === "light" ? "#3730A3": "white"}} className={`text-base font-bold `} >
                {skill.name}
            </div>
        </div>
    )
}
