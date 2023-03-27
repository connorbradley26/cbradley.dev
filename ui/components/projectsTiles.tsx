import coverrPicture from '../../public/projects/coverr.png';
import baxterPicture from '../../public/projects/baxter.webp';
import crowsfootballPicture from '../../public/projects/crowsfootball.png';
import medowsPicture from '../../public/projects/medows.png';
import launchesPicture from '../../public/projects/launches.png';
import { useState } from 'react';
import ProjectModal from './projectModal';
import ProjectTile from './projectTile';

const projects = [
    {
        position: 0,
        name: "Coverr",
        src: coverrPicture,
        alt: "Coverr Project",
        description: "Coverr is an app I built to create a simple way to create a cover letter. I built it using Next.js, TailwindCSS, Prisma, and OpenAI.",
        priority: true
    },
    {
        position: 1,
        name: "Baxter",
        src: baxterPicture,
        alt: "Baxter Project",
        description: "Baxter is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
    },
    {
        position: 2,
        name: "Crows Football",
        src: crowsfootballPicture,
        alt: "Crows Football Project",
        description: "Crows Football is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
    },
    {
        position: 3,
        name: "Medows",
        src: medowsPicture,
        alt: "Medows Project",
        description: "Medows is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
    },
    {
        position: 4,
        name: "Launches",
        src: launchesPicture,
        alt: "Launches Project",
        description: "Launches is a project I built to help my friend with his business. I built it using Next.js, TailwindCSS, and Prisma."
    }
]

const ProjectsTiles = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <div className="grid grid-cols-3 gap-4 ">
                <div className="col-span-2">
                    <ProjectTile project={projects.find(x => x.name == "Coverr")} setSelectedProject={setSelectedProject} />
                </div>
                <div className="col-span-1 space-y-4">
                    <ProjectTile project={projects.find(x => x.name == "Crows Football")} setSelectedProject={setSelectedProject} />
                    
                    {/* <ProjectTile project={projects.find(x => x.name == "Launches")} setSelectedProject={setSelectedProject} /> */}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-1 space-y-4">
                    <ProjectTile project={projects.find(x => x.name == "Baxter")} setSelectedProject={setSelectedProject} />
                </div>
                <div className="col-span-2">
                    <ProjectTile project={projects.find(x => x.name == "Medows")} setSelectedProject={setSelectedProject} />
                </div>
            </div>

            {selectedProject && (
                <>
                    <ProjectModal project={selectedProject} onClose={() => { setSelectedProject(null) }} />
                </>
            )}
        </>
    );
}

export default ProjectsTiles;

