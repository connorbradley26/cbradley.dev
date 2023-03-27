import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

const ProjectTile = ({ project } : { project: Project }) => {

    return (
        <div className='h-full' >
            <Link href={`/projects/${project.name}`} key={project.name}>
                <Image {...project} placeholder="blur" className='hover:scale-105 object-cover h-full rounded' />
            </Link>
        </div>
    )
}

export default ProjectTile;