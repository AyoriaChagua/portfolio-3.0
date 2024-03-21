import { CustomIcon, CustomText } from ".."

interface Props {
    readonly project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col gap-3 mb-10 ">
            <div className="text-nowrap">
                <img src={project.image} alt="project" className="w-full h-auto rounded-xl" />
            </div>
            <div className="flex flex-col gap-1 ">
                <CustomText text={project.title} text_type="subtitle-project"/>
                <CustomText text={project.description} text_type="paragraph-project" />
                <div className="flex flex-row justify-between">
                    <CustomText text={project.dates} text_type="subtitle-project" />
                    {project.link && <CustomIcon color="#fff" name="github" size={25} isActive={false} typeIcon="link" url={project.link} />}
                </div>
            </div>
        </div>
    )
}