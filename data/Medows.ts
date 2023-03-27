import { Project } from "@/types/Project";
import medowsPicture from '../public/projects/medows.png';

export const Medows: Project = {
    position: 3,
    name: "Medows",
    src: medowsPicture,
    alt: "Medows Project",
    description:[
        {
            tag: "p",
            text: "Medows is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
        },
        {
            tag: "p",
            text: "Medows is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
        },
    ]
};
