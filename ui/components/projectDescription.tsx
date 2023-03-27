import { HtmlElement } from "@/types/HtmlElement"
import { Project } from "@/types/Project";
import Image, { StaticImageData} from "next/image";
import { createElement } from "react";


const ProjectDescription = ({ project }: {project: Project}) => {
    return (
        <>
        {project.description.map((desc, index) => {
            return (
                createElement(desc.tag, 
                        { key: index, ...desc.attributes },
                        desc.children ? desc.children.map(child => createElement(child.tag, { ...child.attributes }, child.text)) : desc.text)
            )}
        )}
        </>
    )
}

export default ProjectDescription