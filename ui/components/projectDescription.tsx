import { Project } from "@/types/Project";
import { createElement } from "react";


const ProjectDescription = ({ project }: {project: Project}) => {
    return (
        <>
        {project.description.map((desc, index) => {
            return (
                
                createElement(desc.tag, 
                        { key: index, ...desc.attributes },
                        desc.children ? desc.children.map((child, index) => createElement(child.tag, { key: index, ...child.attributes }, child.text)) : desc.text)
            
            )}
        )}
        </>
    )
}

export default ProjectDescription