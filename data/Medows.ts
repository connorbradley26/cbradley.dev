import { Project } from "@/types/Project";
import medowsPicture from '../public/projects/medows.png';

export const Medows: Project = {
    position: 3,
    name: "Medows",
    src: medowsPicture,
    alt: "Medows Project",
    synopsis: "A communication tool to aide GP's and care home staff in the management of the medical needs of care home residents, which now runs within the NHS.",
    tech: [
        "Vue.js",
        "Buefy",
        "Firebase"
    ],
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
