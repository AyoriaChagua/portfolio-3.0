import { useState } from 'react';
import { CustomText, CustomTimeLine } from '..';
import { useExperience } from '../../hooks/use-experience';
import { BsFillBriefcaseFill, BsBriefcase } from "react-icons/bs";
import { PiHouseFill, PiHouse } from "react-icons/pi";

import './styles.css';

interface Props {
    readonly experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
    const { show, showDescription } = useExperience();
    const [selected, setSelected] = useState(false);

    const handleIconClick = () => {
        showDescription();
        setSelected(!selected);
    };

    let icon;
    if (experience.location === "Remote") {
        icon = selected ? <PiHouse color='#413DF9' size={25} /> : <PiHouseFill color='#413DF9' size={25} />;
    } else {
        icon = selected ? <BsBriefcase color='#413DF9' size={25} /> : <BsFillBriefcaseFill color='#413DF9' size={25} />;
    }

    return (
        <div className="experience-card flex flex-col justify-center w-full">
            <div className="flex flex-row gap-x-4 items-center justify-between">
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-12 h-12 rounded-2xl overflow-hidden'>
                        <img src={experience.image} className='w-full h-full' alt={`experience-${experience.title}`} />
                    </div>
                    <div>
                        <CustomText text={`${experience.title} - ${experience.company}`} text_type='subtitle' />
                        <CustomText text={experience.dates} text_type='sub-paragraph' />
                        <CustomText text={experience.location} text_type='sub-paragraph' />
                    </div>
                </div>
                <button onClick={handleIconClick} className="relative focus:outline-none icon-button">
                    {icon}
                </button>
            </div>
            <div className={`tasks ${show ? 'show' : ''}`}>
                <CustomTimeLine events={experience.tasks} />
            </div>
        </div>
    );
}