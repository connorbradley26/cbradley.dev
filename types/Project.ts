import { StaticImageData } from "next/image"
import { HtmlElement } from "./HtmlElement"

export interface Project {
        position: number,
        name: string
        src: StaticImageData,
        alt: string,
        synopsis: string,
        tech: string[],
        description: HtmlElement[],
        priority?: boolean,
        url?: string,
        images?: ProjectImages[]
}

export interface ProjectImages {
        image: StaticImageData,
        desc: string
}