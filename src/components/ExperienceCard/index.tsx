import { useExperienceCard } from '../../hooks/use-experience-card'

interface Props {
  readonly experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  const { show, showDescription } = useExperienceCard();
  return (
    <div className="experience-card">
      <div className="flex flex-row gap-x-4   cursor-pointer" onClick={showDescription}>
        <div className='w-12 h-12'>
          <img src={experience.image} className='w-full h-full' />
        </div>
        <div>
          <h3 className="text-white font-bold">{experience.company}</h3>
          <p className="text-white">{experience.dates}</p>
          <p className="text-white">{experience.location}</p>
        </div>
      </div>
      <div className={`tasks ${show ? 'show' : ''}`}>
        {experience.tasks.map((task, index) => (
          <div key={index} className="task text-white " >{task}</div>
        ))}
      </div>
    </div>
  );
}