import { CustomText, CustomTimeLine } from '..';
import { useExperience } from '../../hooks/use-experience'

interface Props {
    readonly experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    const { show, showDescription } = useExperience();
    return (
        <div className="experience-card flex flex-col justify-center w-full">
            <div className="flex flex-row gap-x-4   cursor-pointer items-center " onClick={showDescription}>
                <div className='w-12 h-12 rounded-2xl overflow-hidden'>
                    <img src={experience.image} className='w-full h-full' />
                </div>
                <div>
                    <CustomText text={`${experience.title} - ${experience.company}`} text_type='subtitle' />
                    <CustomText text={experience.dates} text_type='sub-paragraph' />
                    <CustomText text={experience.location} text_type='sub-paragraph' />
                </div>
            </div>

            <div className={`tasks ${show ? 'show' : ''}`}>
                <CustomTimeLine events={experience.tasks} />
            </div>
        </div>
    );
}