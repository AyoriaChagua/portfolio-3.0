import { IoIosPricetag } from "react-icons/io";

interface Props {
    readonly text: string,
}
export default function Tag({ text }: Props) {
    return (
        <div className="relative inline-block cursor-default">
            <IoIosPricetag className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/4 " color="#7973E3" size={20}/>
            <div className={`border-2 border-indigo-600 dark:bg-indigo-950 bg-indigo-200 rounded px-2`} >
                <span className="text-xs font-medium tracking-wider dark:text-gray-300 text-indigo-800">
                    {text}
                </span>
            </div>
        </div>
    )
}
