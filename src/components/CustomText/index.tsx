import React, { ReactNode } from 'react'
import { secondary_text } from '../../utils/colors';

interface Props {
    readonly text_type: "title" | "subtitle" | "paragraph" | "gradient-text";
    readonly text: string;
}

export default function CustomText({ text_type, text }: Props) {
    let styleClasses = "";
    switch (text_type) {
        case "subtitle":
            styleClasses += "text"
            break;
        case "paragraph":
            styleClasses += `text-[#BCB6E1] xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-sm`
            break;
        case "gradient-text":
            styleClasses += "animated-gradient-text"
            break;
        default:
            styleClasses += "text"
            break;
    }
    return (
        <div className={styleClasses }>
            {text}
        </div>
    )
}
