import { useState } from "react";
import { CustomIcon, CustomText } from ".."
import Video from "../Video";
import Tag from "../Tag";

interface Props {
    readonly project: Project
}

export default function ProjectCard({ project }: Props) {
    const [showVideo, setShowVideo] = useState(false);
    const handleCard = () => setShowVideo(!showVideo);
    return (
        <div className="grid grid-cols-7 gap-4 bg-blue-700 bg-opacity-10 shadow hover:shadow-slate-700 hover:bg-opacity-15 hover:shadow-sm transition duration-300 ease-in-out rounded-lg p-4" >
            <div className={`text-nowrap 2xl:col-span-${showVideo ? "7" : "4"} xl:col-span-${showVideo ? "7" : "4"} lg:col-span-4 md:col-span-7 sm:col-span-7 col-span-7 cursor-pointer `} onClick={handleCard}>
                {(showVideo && project.video_link) ?
                    <Video autoPlay link={project.video_link} /> :
                    <img src={project.image} alt="project" className="w-full h-auto rounded-lg" />
                }
            </div>
            <div className={`2xl:col-span-${showVideo ? "7" : "3"} xl:col-span-${showVideo ? "7" : "3"} lg:col-span-${showVideo ? "7" : "3"} md:col-span-${showVideo ? "7" : "3"} sm:col-span-${showVideo ? "7" : "3"} col-span-7 relative`} >
                <div className="mb-10">
                    <CustomText text={project.title} text_type="subtitle-project" />
                    <CustomText text={project.summary} text_type="paragraph-project" />
                    <br />
                    {
                        showVideo &&
                        <>
                            <CustomText text={project.description} text_type="paragraph-project" />
                            <div className="flex items-center gap-x-3 mt-5">
                                {project.skills.map((tech, index) => (
                                    <CustomIcon key={index} color="#fff" name={tech} size={25} isActive={false} typeIcon="icon" />
                                ))}
                            </div>
                            <div className="flex items-center gap-x-3 mt-5">
                                {project.tags.map((tag, index) => (
                                    <Tag key={index} text={tag} />
                                ))}
                            </div>
                        </>
                    }
                </div>
                <div className="absolute bottom-0 w-full" >
                    <div className="flex items-center justify-between">
                        <CustomText text={project.dates} text_type="dates-project" />
                        {project.github && <CustomIcon color="#fff" name="github" size={25} isActive={false} typeIcon="link" url={project.github} />}
                    </div>
                </div>
            </div>
        </div>
    )
}