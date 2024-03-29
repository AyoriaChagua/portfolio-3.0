import { IconType } from "react-icons";
import { LiaHtml5 } from "react-icons/lia";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrDocker } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";




interface Props {
    readonly name: skill
    readonly size: number
    readonly color: string
    readonly isActive: boolean
    readonly typeIcon?: "link" | "icon"
    readonly url?: string
}


export default function CustomIcon({ name, size, color, isActive, typeIcon, url }: Props) {
    let MyIcon: IconType;
    switch (name) {
        case "html5":
            MyIcon = LiaHtml5
            break;
        case "css3":
            MyIcon = TbBrandCss3
            break;
        case "react":
            MyIcon = FaReact
            break;
        case "javascript":
            MyIcon = RiJavascriptLine
            break;
        case "typescript":
            MyIcon = TbBrandTypescript
            break;
        case "nodejs":
            MyIcon = FaNodeJs
            break;
        case "git":
            MyIcon = FaGitAlt
            break;
        case "java":
            MyIcon = FaJava
            break;
        case "spring":
            MyIcon = BiLogoSpringBoot
            break;
        case "postresql":
            MyIcon = SiPostgresql
            break;
        case "mongodb":
            MyIcon = TbBrandMongodb
            break;
        case "sqlserver":
            MyIcon = DiMsqlServer
            break;
        case "reactnative":
            MyIcon = TbBrandReactNative
            break;
        case "docker":
            MyIcon = GrDocker
            break;
        case "redux":
            MyIcon = SiRedux
            break;
        case "tailwind":
            MyIcon = TbBrandTailwind
            break;
        case "github":
            MyIcon = FaGithub
            break;
        default:
            MyIcon = FaCode
            break;
    }
    const variableCSS = isActive ? '--shaded-icon-color' : "";
    return (
        typeIcon === "link" ? 
        <a href={url} target="_blank" rel="noopener noreferrer">
            <MyIcon size={size} color={color} className="shaded-icon expand-icon cursor-pointer" />
        </a> : 
        <MyIcon size={size} color={color} className="shaded-icon expand-icon" style={{ [variableCSS]: color } as any} />
    )
}
