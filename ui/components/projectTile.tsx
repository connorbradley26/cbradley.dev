import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

const ProjectTile = ({ project } : { project: Project }) => {

    return (
        <div className='h-full relative group' >
            <div className=" h-full w-full hidden group-hover:block group-hover:scale-105 absolute z-30 ">
                <div className="absolute bottom-0 bg-gradient-to-t from-zinc-900 p-10 pt-32">
                    <h2 className="text-2xl font-medium text-white title-font">{project.name}</h2>
                    <p className="mt-1 text-sm text-gray-300">{project.description[0].text}</p>
                </div>
            </div>
            <Link href={`/projects/${project.name}`} key={project.name}>
                <Image {...project} placeholder="blur" className='group-hover:scale-105 object-cover h-full rounded' />
            </Link>
            
        </div>
    )
}

export default ProjectTile;