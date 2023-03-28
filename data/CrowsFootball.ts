import { Project } from "@/types/Project";
import crowsfootballPicture from '../public/projects/crowsfootball.png';

export const CrowsFootball: Project =
    {
        position: 2,
        name: "Crows Football",
        src: crowsfootballPicture,
        alt: "Crows Football Project",
        synopsis: "A home page for the Manchester Crows, an American Flag Football team, with a heavy focus on SEO.",
        tech: [
            "Next.js",
            "TailwindCSS",
            "GraphQL",
            "Firebase"
        ],
        description:[
            {
                tag: "p",
                text: "Crows Football is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
            },
        ]
    }