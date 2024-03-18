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
                    <div key={index} className="relative mb-4">
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-[12px] h-[12px] bg-[#BCB6E1] rounded-full left-0 " />
                        <div className="ml-4"><CustomText text={event} text_type="sub-paragraph" /></div>
                    </div>
                );
            })}
        </div>
    )
}
