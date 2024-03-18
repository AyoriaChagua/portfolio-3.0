import React from 'react'
import { ExperienceCard } from '..'
import { useExperience } from '../../hooks/use-experience'

export default function ExperienceBox() {
    const { experiences } = useExperience();
    return (
        <div>
            {experiences.map(experience => (
                <ExperienceCard
                    key={experience.company}
                    experience={experience}
                />
            ))}
        </div>
    )
}
