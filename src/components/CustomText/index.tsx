
interface Props {
    readonly text_type: "title" | "subtitle" | "paragraph" | "gradient-text" | "sub-paragraph" | "subtitle-white" | "subtitle-project" | "paragraph-project" | "dates-project" | "section";
    readonly text: string;
}

export default function CustomText({ text_type, text }: Props) {
    let styleClasses = "";
    switch (text_type) {
        case "subtitle":
            styleClasses += "text-[#BCB6E1] xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm font-bold"
            break;
        case "paragraph":
            styleClasses += `text-[#BCB6E1] xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm`
            break;
        case "gradient-text":
            styleClasses += "animated-gradient-text"
            break;
        case "sub-paragraph":
            styleClasses += "text-[#BCB6E1] text-[14px]"
            break;
        case "subtitle-white":
            styleClasses += "text-white text-[14px] font-bold"
            break;
        case "subtitle-project":
            styleClasses += "text-[#BCB6E1]  xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm font-bold"
            break;
        case "dates-project":
            styleClasses += "text-[#BCB6E1]  xl:text-md lg:text-md md:text-md sm:text-sm  text-sm font-bold"
            break;
        case "paragraph-project":
            styleClasses += `text-[#BCB6E1] text-sm`
            break;
        case "section": 
            styleClasses += "text-white font-bold  xl:text-xl lg:text-xl md:text-xl sm:text-lg  text-sm font-bold"
            break;
        default:
            styleClasses += "text"
            break;
    }
    return (
        <div className={styleClasses}>
            {text}
        </div>
    )
}
