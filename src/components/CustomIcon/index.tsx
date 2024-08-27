import { IconType } from "react-icons";
import { LiaHtml5 } from "react-icons/lia";
import { FaReact, FaNodeJs, FaJava, FaLink, FaCode, FaGithub } from "react-icons/fa";
import { TbBrandTypescript, TbBrandCss3, TbBrandMongodb, TbBrandReactNative, TbBrandTailwind } from "react-icons/tb";
import { RiJavascriptLine, RiSupabaseLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiNestjs, SiPostgresql, SiRedux } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrDocker } from "react-icons/gr";



interface Props {
    readonly name: skill | "link"
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
        case "link":
            MyIcon = FaLink
            break;
        case "supabase":
            MyIcon = RiSupabaseLine
            break;
        case "nestjs":
            MyIcon = SiNestjs
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
