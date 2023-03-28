import { Project } from "@/types/Project";
import { createElement } from "react";
import { Prism } from '@mantine/prism'

const ProjectDescription = ({ project }: {project: Project}) => {
    return (
        <>
        
        {project.description.map((desc, index) => {
            
                if (desc.tag == "Prism"){
                    return (
                        <Prism withLineNumbers colorScheme="dark" language="tsx" key={index}>
                            {desc.text}
                        </Prism>
                    )
                }
                else if (desc.tag == "iframe"){
                    return (
                        <iframe key={index} {...desc.attributes} className="w-full h-96" />
                    )
                }
                else if (desc.tag == "h4") {
                    return (
                        <h4 key={index} {...desc.attributes} className="text-gray-300 ">{desc.text}</h4>
                    )
                }
                else {
                    return (                
                        createElement(desc.tag, 
                                { key: index, ...desc.attributes, class: `${desc.attributes?.className} text-gray-300 whitespace-pre-wrap font-extralight` },
                                desc.children ? desc.children.map((child, index) => createElement(child.tag, { key: index, ...child.attributes }, child.text)) : desc.text)
                    )
                }
            })}
        </>
    )
}

export default ProjectDescription