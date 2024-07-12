import { ExperienceCard } from '..'
import { useExperience } from '../../hooks/use-experience'

export default function ExperienceBox() {
    const { experiences } = useExperience();
    return (
        <div className='flex flex-col gap-4'>
            {experiences.map(experience => (
                <ExperienceCard
                    key={experience.company}
                    experience={experience}
                />
            ))}
        </div>
    )
}
