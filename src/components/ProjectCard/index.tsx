import { CustomIcon, CustomText } from ".."

interface Props {
    readonly project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className="grid grid-cols-7 gap-4 bg-blue-700 bg-opacity-10 shadow hover:shadow-slate-700 hover:bg-opacity-15 hover:shadow-sm transition duration-300 ease-in-out cursor-pointer rounded-lg p-4">
            <div className="text-nowrap 2xl:col-span-4 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-7">
                <img src={project.image} alt="project" className="w-full h-auto rounded-lg" />
            </div>
            <div className="2xl:col-span-3 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-7 relative" >
                <div className="mb-10">
                    <CustomText text={project.title} text_type="subtitle-project" />
                    <CustomText text={project.description} text_type="paragraph-project" />
                </div>
                <div className="absolute bottom-0 w-full" >
                    <div className="flex items-center justify-between">
                        <CustomText text={project.dates} text_type="subtitle-project" />
                        {project.link && <CustomIcon color="#fff" name="github" size={25} isActive={false} typeIcon="link" url={project.link} />}
                    </div>
                </div>
            </div>

        </div>
    )
}