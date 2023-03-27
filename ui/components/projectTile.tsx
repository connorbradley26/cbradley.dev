import { Project } from "@/types/Project";
import Image from "next/image";

const ProjectTile = ({ project, setSelectedProject }: {project: Project, setSelectedProject: Function}) => {

    return (
        <div className='h-full' onClick={() => setSelectedProject(project)} >
           <Image {...project} placeholder="blur" className='hover:scale-105 object-cover h-full rounded' />
        </div>
    )
}

export default ProjectTile;