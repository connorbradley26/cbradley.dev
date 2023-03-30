import { Project } from "@/types/Project";
import baxterPicture from "../assets/projects/baxter.webp";

export const Baxter: Project = {
  position: 1,
  name: "Baxter",
  src: baxterPicture,
  alt: "Baxter Project",
  url: "https://www.wearecassette.com/baxter",
  synopsis: "A 3D interactive training tool for a Blood Dialysis machine, with hours of highly detailed training content.",
  tech: ["React", "BabylonJS", "TypeScript", "Redux", "AWS"],
  description: [
    {
      tag: "p",
      text: "As a Senior Software Developer, I had the opportunity to work on a 10-month contract for an immersive technology company called Cassette. The task was to develop a 3D application using BabylonJS and React, which was a 3D twin of a PRISMAX 2 Blood Dialysis Machine. The goal of the project was to create a simulator that could be used to train nurses and doctors on how to use the machine without having to physically be there.",
    },
    {
      tag: "p",
      text: "The project was challenging, but also rewarding. It really required pushing the boundaries of what the web is capable of. Initially I did not believe it was going to be possible to finish this project to a standard that would really do it justice. However, with the help of my team and many hours optimsing technology, we were able to overcome the challenges and deliver a product that we were all proud of."
    },
    {
      tag: "iframe",
      attributes: {
        src: "https://player.vimeo.com/video/725980903?h=f0affd81e2&amp;title=0&amp;app_id=122963",
        
      }
    },
    {
      tag: "h4",
      text: "The Challenge"
    },
    {
      tag: "p",
      text: "We used BabylonJS to create a realistic 3D environment for the simulator. We also used React to build the different modules that users would interact with to complete various tasks and to manage the state of the Web App."
    },
    {
      tag: "p",
      text: "The simulator consists of 9 different modules, each with a unique set of tasks for the user to complete. The tasks are designed to simulate real-life scenarios that nurses and doctors may encounter when using the PRISMAX 2 Blood Dialysis Machine. This way, users can practice and gain the necessary experience and skills without the need for physical access to the machine."
    },
    {
      tag: "p",
      text: "The simulator also has a built-in assessment system that allows users to take a test at the end of each module. The test is designed to test the user’s knowledge and understanding of the module’s content. The test is also used to generate a report that can be used to track the user’s progress and performance."
    },
    {
      tag: "p",
      text: "To ensure that the simulator was accessible to users from different parts of the world, we made it available in 10 different languages. This was challenging, but we were able to overcome the language barriers by hiring professional translators to help us with the translations."
    },
    {
      tag: "p",
      text: "One of the exciting things about this project was the VR version of the simulator. Although I didn't work on this part of the project, it was amazing to see how the VR version could take the simulator to a whole new level by giving users a fully immersive experience."
    },
    {
      tag: "p",
      text: "The assets used in the simulator are 3D models of the actual machine and its components. We worked hard to ensure that the models were accurate and realistic so that users could easily identify them and learn how to use the machine effectively."
    },
    {
      tag: "p",
      text: "In conclusion, working on Baxter was an incredible experience that challenged my skills as a software developer. It was an honor to be part of a team that is revolutionizing medical training by creating a simulator that is accessible to people all over the world. I am proud of what we accomplished and hope that Baxter will continue to have a positive impact on the medical field for years to come."
    }
  ]
};


