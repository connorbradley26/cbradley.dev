import { Project } from "@/types/Project";
import launchesPicture from '../assets/projects/launches.png';

export const Launches: Project = {
    position: 4,
    name: "Launches",
    src: launchesPicture,
    url: "https://launches-pairing-pi.vercel.app/",
    alt: "Launches Project",
    synopsis: "A NextJS project to display SpaceX launches, built as a test for a job. Code quality was the main focus with only a few hours to complete the project.",
    tech: [
        "Next.js",
        "TailwindCSS",
        "Vercel",
    ],
    description: [
        {
        tag: "p",
        text: "Launches is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
        }
    ]
}