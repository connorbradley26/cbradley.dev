import { Project } from "@/types/Project";
import baxterPicture from "../public/projects/baxter.webp";

export const Baxter: Project = {
  position: 1,
  name: "Baxter",
  src: baxterPicture,
  alt: "Baxter Project",
  synopsis: "A 3D interactive training tool for a Blood Dialysis machine, with hours of highly detailed training content.",
  tech: ["React", "BabylonJS", "TypeScript", "Redux", "AWS"],
  description: [
    {
      tag: "p",
      text: "Baxter is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma.",
    }
  ]
};
