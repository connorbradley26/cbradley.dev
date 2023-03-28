import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

const ProjectTile = ({ project } : { project: Project }) => {
    console.log("PROJJJEECCCTTTT", project)
    if (!project) return (<div>loading</div>);
    return (
        <div className='h-full relative group' >
            <div className=" h-full w-full hidden group-hover:block group-hover:scale-105 absolute z-30 ">
                <div className="absolute bottom-0 bg-gradient-to-t from-zinc-900 p-10 pt-64">
                    <h2 className="text-2xl font-medium text-white title-font">{project.name}</h2>
                    <p className="mt-1 text-sm text-gray-300 whitespace-pre-wrap">{project.synopsis}</p>
                    <Link href={`/projects/${project.name}`} key={project.name}>
                    <button className="mt-2 text-sm text-white bg-zinc-500 border-0 py-1 px-2 focus:outline-none hover:bg-zinc-600 rounded">View Project</button>
                    </Link>
                </div>
            </div>
           
                <Image {...project} placeholder="blur" className='group-hover:scale-105 object-cover h-full rounded' />
            
            
        </div>
    )
}

export default ProjectTile;