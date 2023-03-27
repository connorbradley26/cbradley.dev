import { Project } from "@/types/Project";
import launchesPicture from '../public/projects/launches.png';

export const Launches: Project = {
    position: 4,
    name: "Launches",
    src: launchesPicture,
    alt: "Launches Project",
    description: [
        {
        tag: "p",
        text: "Launches is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
        }
    ]
}