import coverrPicture from "../public/projects/coverr/coverr.png";
import { Project } from "@/types/Project";
import coverLetter from "../public/projects/coverr/coverr-coverletter.png";
import jdAnalysis from "../public/projects/coverr/coverr-jdanalysis.png";
import keyDetails from "../public/projects/coverr/coverr-keydetails.png";
import resumeAnalysis from "../public/projects/coverr/coverr-resumeanalysis.png";


export const Coverr: Project = {
    position: 0,
    name: "Coverr",
    src: coverrPicture,
    alt: "Coverr Project",
    description: [            
        {
            tag: "p",
            text: "Coverr is an app I built to create a simple way to create a cover letter. I built it using Next.js, TailwindCSS, Prisma, and OpenAI."
        },
        {
            tag: "div",
            children:[
                {
                    tag: "span",
                    text: "It's currently in beta, but you can sign up for the beta "
                },
                {
                    tag: "a",
                    text: "here",
                    attributes: {
                        href: "https://coverr.app",
                        target: "_blank",
                        rel: "noreferrer"                
                    }
                },
                {
                    tag: "span",
                    text: "."
                },
            ]
        },        
        {
            tag: "p",
            text: "I built this project to learn more about Next.js, TailwindCSS, and Prisma. I also wanted to learn more about how to use OpenAI's API."
        }
    ],
    images: [
        
        {
            image: jdAnalysis,
            desc:[
                {
                    tag: "p",
                    text: "The first step is to analyze the job description. This is done by using OpenAI's API to generate a summary of the job description."
                }
            ] 
        },
        {
            image: keyDetails,
            desc: [
                {
                    tag: "p",
                    text: "The summary is then used to generate a list of key details. These key details are then used to generate a list of keywords."
                }
            ]
        },
        {
            image: resumeAnalysis,
            desc: [
                {
                    tag: "p",
                    text: "The next step is to analyze the resume. This is done by using OpenAI's API to generate a summary of the resume."
                }
            ]
        },
        {
            image: coverLetter,
            desc: [
                {
                    tag: "p",
                    text: "The summary is then used to generate a list of key details. These key details are then used to generate a list of keywords."
                }
            ]
        }
    ],
    priority: true
}