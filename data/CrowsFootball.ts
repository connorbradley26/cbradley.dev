import { Project } from "@/types/Project";
import crowsfootballPicture from '../public/projects/crowsfootball.png';

export const CrowsFootball: Project =
    {
        position: 2,
        name: "Crows Football",
        src: crowsfootballPicture,
        alt: "Crows Football Project",
        description:[
            {
                tag: "p",
                text: "Crows Football is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
            },
        ]
    }