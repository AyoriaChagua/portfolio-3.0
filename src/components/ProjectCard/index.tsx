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
        <div className="grid grid-cols-7 gap-4 bg-blue-700 bg-opacity-10 shadow hover:shadow-slate-700 hover:bg-opacity-15 hover:shadow-sm transition duration-300 ease-in-out rounded-lg p-4">
             <div
                className={`text-nowrap col-span-7 cursor-pointer ${showVideo ? '2xl:col-span-7 xl:col-span-7' : '2xl:col-span-4 xl:col-span-4'}`}
            >
                {showVideo && project.video_link ? (
                    <Video autoPlay link={project.video_link} onClick={handleCard}/>
                ) : (
                    <button onClick={handleCard} className={`w-full h-64 sm:h-64 md:h-64 lg:h-64 xl:h-full rounded-lg p-0 border-0 ${showVideo && "xl:h-64 lg:h-64"}`} style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                )}
            </div>
            <div className={`col-span-7 relative ${showVideo ? '2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7' : '2xl:col-span-3 xl:col-span-3 lg:col-span-7 md:col-span-7 sm:col-span-7'}`}>
                <div className="mb-10">
                    <CustomText text={project.title} text_type="subtitle-project" />
                    <CustomText text={project.summary} text_type="paragraph-project" />
                    <br />
                    {showVideo && (
                        <>
                            <CustomText text={project.description} text_type="paragraph-project" />
                            <div className="flex items-center gap-x-3 mt-5">
                                {project.skills.map((tech) => (
                                    <CustomIcon key={tech} color="#fff" name={tech} size={25} isActive={false} typeIcon="icon" />
                                ))}
                            </div>
                            <div className="flex items-center gap-x-3 mt-5">
                                {project.tags.map((tag) => (
                                    <Tag key={tag} text={tag} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className="absolute bottom-0 w-full">
                    <div className="flex items-center justify-between">
                        <CustomText text={project.dates} text_type="dates-project" />
                        <div className="flex flex-row gap-3">
                        {project.link && <CustomIcon color="#fff" name="link" size={25} isActive={false} typeIcon="link" url={project.link} />}
                        {project.github && <CustomIcon color="#fff" name="github" size={25} isActive={false} typeIcon="link" url={project.github} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
