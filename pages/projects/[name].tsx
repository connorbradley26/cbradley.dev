import { projectsData } from "@/data/Projects"
import { Project } from "@/types/Project";
import Header from "@/ui/components/header";
import Image from "next/image";
import { createElement } from "react";

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
                {project.description.map((desc, index) => {
                    return (
                        createElement(desc.tag, 
                                { key: index, ...desc.attributes },
                                desc.children ? desc.children.map(child => createElement(child.tag, { ...child.attributes }, child.text)) : desc.text)
                    )}
                )}
                <figure>
                    <Image {...project} placeholder="blur" className='rounded' />
                    <figcaption>{project.name} - Home page</figcaption>
                </figure>
                {project.images && project.images.map((image, index) => {
                    return (
                        <figure key={image.desc}>
                            <Image src={image.image} alt={project.name} width={1920} height={1080}
                                placeholder="blur" className='rounded' />
                            <figcaption>{image.desc}</figcaption>
                        </figure>
                    )
                })}
            </article>


        </>
    )
}