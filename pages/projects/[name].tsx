import { projectsData } from "@/data/Projects"
import { Project } from "@/types/Project";
import ProjectDescription from "@/ui/components/projectDescription";
import ProjectImages from "@/ui/components/projectImages";
import Image from "next/image";

export function getStaticProps(context: { params: { name: string; }; }) {
    const project = projectsData.find(x => x.name == context.params.name);
    return {
        props: {
            project: project
        }
    }
}

export function getStaticPaths() {
    const paths = projectsData.map(x => ({ params: { name: x.name } }));
    return {
        paths: paths,
        fallback: false
    }
}

export default function Projects({ project }: { project: Project }) {
    return (
        <>
            <article className="prose prose-sm sm:prose-invert sm:prose lg:prose-lg xl:prose-xl mx-auto mt-20">
                <h1>{project.name}</h1>
                <h4>Synopsis</h4>
                <i className="whitespace-pre-wrap font-extralight text-gray-400">"{project.synopsis}"</i>
                    <Image {...project} placeholder="blur" className='rounded' />
               <h4>How and Why I built {project.name}</h4>
                <ProjectDescription project={project} />

                <div>
                    {project.images && project.images.length > 0 && project.images.map((details, index) => {
                        return (<ProjectImages key={index} images={details} />)
                    })}
                </div>
            </article>


        </>
    )
}