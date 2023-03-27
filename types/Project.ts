import { StaticImageData } from "next/image"
import { HtmlElement } from "./HtmlElement"

export interface Project {
        position: number,
        name: string
        src: StaticImageData,
        alt: string,
        description: HtmlElement[],
        priority?: boolean,
        images?: {
                image: StaticImageData,
                desc: string
        }[]
}