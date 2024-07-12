import { ProjectCard } from "..";
import { useProjects } from "../../hooks/use-projects"

export default function ProjectBox() {
    const { projects } = useProjects();
    return (
        <div className="flex flex-col gap-10 mt-8">
            {projects.map(project =>
                <ProjectCard project={project} key={project.title}/>
            )}
        </div>
    )
}
