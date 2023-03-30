import { projectsData } from "@/data/Projects"
import { Project } from "@/types/Project";
import ProjectDescription from "@/ui/components/projectDescription";
import ProjectImages from "@/ui/components/projectImages";
import ProjectPage from "@/ui/components/projectPage";
import Image from "next/image";
import Link from "next/link";

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
        <ProjectPage project={project}/>
         {/* <div className="mt-20 snap-x snap-mandatory flex overflow-x-scroll overflow-y-hidden">
            {project.images && project.images.length > 0 && project.images.map((details, index) => {
                return (
                    <Image
                    src={details.image}
                    alt={details.desc}
                    className="h-64 w-64 mx-20 object-center snap-center"
                  />
                )
            })}   
        </div> */}
            {/* <article className="prose sm:prose-lg prose-invert mx-auto mt-20">
                {project.images && project.images.length > 0 &&
                        <ProjectImages images={project.images} />
                }
                <Image src={project.src} priority={project.priority} placeholder="blur" alt={project.alt} className='rounded' />
                <h1>{project.name}</h1>
                <blockquote>
                <Link href={project.url}>{project.url}</Link>
                </blockquote>
                <br />
                <p className="whitespace-pre-wrap  lead">{project.synopsis}</p>
                
               <h4>How and Why I built {project.name}</h4>
                <ProjectDescription project={project} />

                <div>
                </div>
            </article>  */}


        </>
    )
}