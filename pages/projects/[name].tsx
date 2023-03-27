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
                <ProjectDescription project={project} />
                <figure>
                    <Image {...project} placeholder="blur" className='rounded' />
                    <figcaption>{project.name} - Home page</figcaption>
                </figure>
                <div>
                    {project.images.length > 0 && project.images.map((details, index) => {
                        return (<ProjectImages key={index} images={details} />)
                        
                    })}
                </div>
            </article>


        </>
    )
}