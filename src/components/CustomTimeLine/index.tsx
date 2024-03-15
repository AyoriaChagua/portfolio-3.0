import { CustomText } from "..";

interface Props {
    events: string[];
}

export default function CustomTimeLine({ events }: Props) {
    return (
        <div className="ml-4 mt-5 relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-[0.1rem] bg-[#BCB6E1]" />
            {events.map((event, index) => {
                return (
                    <div key={index} className="flex items-center mb-4">
                        <div className="w-[.7rem] h-[.7rem] bg-[#BCB6E1] rounded-full mr-4" />
                        <div><CustomText text={event} text_type="sub-paragraph" /></div>
                    </div>
                );
            })}
        </div>
    )
}
