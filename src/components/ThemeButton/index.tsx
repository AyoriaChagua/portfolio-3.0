import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";
import { useTheme } from "../../context/ThemeContext";



export default function ThemeButton() {
    const {handleChangeMode, theme} = useTheme();
    return (
        <button
            onClick={handleChangeMode}
        >
            {theme === "dark" ?
                <RiMoonClearLine size={23} color='#413DF9' /> :
                <IoSunnyOutline size={23} color='#413DF9' />
            }
        </button>
    )
}




