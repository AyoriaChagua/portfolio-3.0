
interface Props {
    readonly text_type: "title" | "subtitle" | "paragraph" | "gradient-text" | "sub-paragraph" | "subtitle-white" | "subtitle-project" | "paragraph-project" | "dates-project" | "section";
    readonly text: string;
}

export default function CustomText({ text_type, text }: Props) {
    let styleClasses = "";
    switch (text_type) {
        case "subtitle":
            styleClasses += "dark:text-[#BCB6E1] text-indigo-600 xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm font-bold"
            break;
        case "paragraph":
            styleClasses += `dark:text-[#BCB6E1] text-indigo-600 xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm`
            break;
        case "gradient-text":
            styleClasses += "animated-gradient-text"
            break;
        case "sub-paragraph":
            styleClasses += "dark:text-[#BCB6E1] text-indigo-600 text-[14px]"
            break;
        case "subtitle-white":
            styleClasses += "text-white text-[14px] font-bold"
            break;
        case "subtitle-project":
            styleClasses += "dark:text-[#BCB6E1] text-indigo-600  xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm font-bold"
            break;
        case "dates-project":
            styleClasses += "dark:text-[#BCB6E1] text-indigo-600  xl:text-md lg:text-md md:text-md sm:text-sm  text-sm font-bold"
            break;
        case "paragraph-project":
            styleClasses += `dark:text-[#BCB6E1] text-indigo-600 text-sm`
            break;
        case "section": 
            styleClasses += "dark:text-white text-indigo-700 font-bold  text-2xl  font-bold"
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
