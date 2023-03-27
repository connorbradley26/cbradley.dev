import { StaticImageData } from "next/image"

export interface Project {
        position: number,
        name: string
        src: StaticImageData,
        alt: string,
        description: string,
        priority?: boolean 
}