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
  url: "https://coverr.vercel.app",
  synopsis:
    "Revolutionize your job search with Coverr - the ultimate tool that analyzes job descriptions, scours your resume, and generates personalized cover letters! \n\nSimply paste in the job description URL and upload your resume, and let our AI-powered system do the rest. Get valuable insights into the technical and soft skills employers are seeking, and receive a custom-crafted cover letter that sets you apart from the competition.\n\nWith Coverr, your dream job is just a few clicks away!",
  tech: [
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "OpenAI",
    "TypeScript",
    "PostgreSQL",
    "Vercel",
  ],
  description: [
    {
      tag: "p",
      text: "As a developer, I've always been passionate about creating tools that make people's lives easier. And that's exactly what Coverr does - it streamlines the job search process and gives candidates a competitive edge in the job market. In this blog post, I'd like to share my experience developing Coverr and explain how it works.",
    },
    {
      tag: "p",
      text: "The idea for Coverr came to me when I was searching for a job myself. I noticed that many job descriptions included specific technical and soft skills that were essential for the position. However, it was difficult to tailor my resume and cover letter to each job I applied for, especially when I was applying for multiple positions at once. That's when I realized that there had to be a better way to match candidates with job requirements.",
    },
    {
      tag: "p",
      text: "That's when I started working on Coverr. The first step was to create a system that could analyze job descriptions and identify key details such as technical skills, soft skills, and other requirements. I used web scraping techniques to extract the necessary information from job postings and then utilised OpenAI's API to analyze the data and extract the most relevant details. This was no small feat, as job postings can vary greatly in terms of structure and content, but after a lot of trial and error, I was able to create an algorithm that could handle the task.",
    },
    {
      tag: "p",
      text: "The next step was to develop a system that could analyze resumes and match them with the job requirements identified by the AI. I used natural language processing techniques to identify the most important details in a resume, such as job titles, education, and work experience. This allowed the system to match a candidate's qualifications with the job requirements identified by the AI and generate a list of key details that the candidate should emphasize in their cover letter.",
    },
    {
      tag: "p",
      text: "Finally, I created a cover letter generator that could take the job requirements and the candidate's resume details and create a personalized cover letter that highlighted the candidate's strengths and qualifications. This was perhaps the most challenging part of the process, as I had to balance the need for personalization with the need for efficiency. However, after many iterations, I was able to create a system that could generate a high-quality cover letter in just a few minutes.",
    },
    {
        tag: "p",
        text: "The hardest problem to face was the inconsistency of the data format that was provided back from the LLM, my solution to this problem was to explicitly define the JSON format that I wanted, the code below shows how I did this:"
    },
    {
        tag: "Prism",
        text: `const message3: IChatGPTMessage = {
            role: "assistant",
            content: "Provide your answer in JSON format, with the following parameters: {softSkills: [], hardSkills: [], otherDetails: []}"
        }`        
    },
    {
      tag: "p",
      text: "Overall, creating Coverr was a challenging but rewarding experience. I'm proud of the tool I've created and the positive impact it can have on job seekers. With Coverr, candidates can spend less time crafting custom cover letters and more time preparing for interviews and networking. And that's what it's all about - making the job search process as smooth and stress-free as possible.",
    },
    {
      tag: "div",
      children: [
        {
          tag: "span",
          text: "It's currently in beta, but you can sign up for the beta ",
        },
        {
          tag: "a",
          text: "here",
          attributes: {
            href: "https://coverr.app",
            target: "_blank",
            rel: "noreferrer",
          },
        },
        {
          tag: "span",
          text: ".",
        },
      ],
    }
  ],
  images: [
    {
      image: jdAnalysis,
      desc: [
        {
          tag: "p",
          text: "The first step is to analyze the job description. This is done by using OpenAI's API to generate a summary of the job description.",
        },
      ],
    },
    {
      image: keyDetails,
      desc: [
        {
          tag: "p",
          text: "The summary is then used to generate a list of key details. These key details are then used to generate a list of keywords.",
        },
      ],
    },
    {
      image: resumeAnalysis,
      desc: [
        {
          tag: "p",
          text: "The next step is to analyze the resume. This is done by using OpenAI's API to generate a summary of the resume.",
        },
      ],
    },
    {
      image: coverLetter,
      desc: [
        {
          tag: "p",
          text: "The summary is then used to generate a list of key details. These key details are then used to generate a list of keywords.",
        },
      ],
    },
  ],
  priority: true,
};
