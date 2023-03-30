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
        tag: "h4",
        text: "Web Scraping"
    },
    {
      tag: "p",
      text: "That's when I started working on Coverr. The first step was to create a system that could analyze job descriptions and identify key details such as technical skills, soft skills, and other requirements. I used web scraping techniques to extract the necessary information from job postings and then utilised OpenAI's API to analyze the data and extract the most relevant details. This was no small feat, as job postings can vary greatly in terms of structure and content, but after a lot of trial and error, I was able to create an algorithm that could handle the task.",
    },
    {
        tag: "h4",
        text: "Resume Analysis"
    },
    {
      tag: "p",
      text: "The next step was to develop a system that could analyze resumes and match them with the job requirements identified by the AI. I used natural language processing techniques to identify the most important details in a resume, such as job titles, education, and work experience. This allowed the system to match a candidate's qualifications with the job requirements identified by the AI and generate a list of key details that the candidate should emphasize in their cover letter.",
    },
    {
        tag: "h4",
        text: "Generating the Cover Letter"
    },
    {
      tag: "p",
      text: "Finally, I created a cover letter generator that could take the job requirements and the candidate's resume details and create a personalized cover letter that highlighted the candidate's strengths and qualifications. This was perhaps the most challenging part of the process, as I had to balance the need for personalization with the need for efficiency. However, after many iterations, I was able to create a system that could generate a high-quality cover letter in just 30 seconds.",
    },
    {
        tag: "h4",
        text: "Problems I Encountered"
    },
    {
      tag: "p",
      text: "A problem I had to face was the inconsistency of the data format that was provided back from the LLM, my solution to this problem was to explicitly define the JSON format that I wanted, the code below shows how I did this:",
    },
    {
      tag: "Prism",
      text: `const message3: IChatGPTMessage = {
            role: "assistant",
            content: "Provide your answer in JSON format, with the following parameters: {softSkills: [], hardSkills: [], otherDetails: []}"
        }`,
    },
    {
        tag: "p",
        text: "One of the trickiest problems was making the Cover Letter generator be able to provide multiple options for the user to choose from if the AI wasn't quite sure on what to say. I solved this problem by using a combination of the OpenAI API and a custom algorithm that would generate multiple options for the user to choose from. The code below shows how I did this:",
    },
    {
        tag: "Prism",
        text: `

/**
 * Expected data format:
 * "This is a {test|test2|test3} string"
 */

    // Split the text into parts that are surrounded by curly braces
    const textParts = [...text.matchAll(/{[^}]*}/g)];

    let previousIndex = [0];
    return (
        <div className="prose prose-invert whitespace-pre-wrap" 
            ref={innerRef} contentEditable={true} 
            suppressContentEditableWarning={true}>
        { 
        textParts.map((textPart, i) => {
            const match = textPart[0];
            const index = textPart.index;
            // Split the options by the pipe character
            const options = match.slice(1, -1).split("|");
            const selectedOptionIndex = selectedOptions[index] ?? 0;
            previousIndex.push(index + match.length)
    
            return (
                <>
                {text.slice(previousIndex[i], index)}
                {/* If there are multiple options, 
                render a <select> 
                otherwise render an <input type="text"> component */}
                { options.length > 1 ?
                    <OptionsSelector
                        key={index}
                        options={options}
                        selectedOptionIndex={selectedOptionIndex}
                        onOptionSelect={optionIndex => 
                                handleOptionSelect(index, optionIndex)}
                    /> :
                    <InputSelector initialValue={options[0]} />
                }
                </> 
            )
        })}
        <>{text.slice(previousIndex[previousIndex.length - 1], text.length)}</>
    </div>)`
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
          text: "It's not currently finished, but you can check it out  ",
        },
        {
          tag: "a",
          text: "here",
          attributes: {
            href: "https://coverr.vercel.app",
            target: "_blank",
            rel: "noreferrer",
          },
        },
        {
          tag: "span",
          text: ".",
        },
      ],
    },
  ],
  images: [
    {
      image: jdAnalysis,
      desc: "The first step is to analyze the job description. This is done by using OpenAI's API to generate a summary of the job description.",

    },
    {
      image: keyDetails,
      desc: "The summary is then used to generate a list of key details. These key details are then used to generate a list of keywords.",
    },
    {
      image: resumeAnalysis,
      desc: "The next step is to analyze the resume. This is done by using OpenAI's API to generate a summary of the resume.",
    },
    {
      image: coverLetter,
      desc: "The summary is then used to generate a list of key details. These key details are then used to generate a list of keywords.",
    },
  ],
  priority: true,
};
