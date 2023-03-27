import Image from 'next/image';
import { useState } from 'react';

const projects = [
    {   
        position: 0,
        name: "Coverr",
        el: <Image width={800} height={900} className="h-auto max-w-full rounded-lg" src="/projects/coverr.png" alt="" />
    },
    {
        position: 1,
        name: "Baxter",
        el: <Image width={800} height={900} className="h-auto max-w-full rounded-lg" src="/projects/baxter.webp" alt="" />
    },
    {
        position: 2,
        name: "Crows Football",
        el: <Image width={800} height={900} className="h-auto max-w-full rounded-lg" src="/projects/crowsfootball.png" alt="" />
    },
    {
        position: 3,
        name: "Medows",
        el: <Image width={800} height={900} className="h-auto max-w-full rounded-lg" src="/projects/medows.png" alt="" />
    },
    {
        position: 4,
        name: "Launches",
        el: <Image width={800} height={200} className="h-auto max-w-full rounded-lg" src="/projects/launches.png" alt="" />
    }
]


const ProjectsTile = () => {
    const [currPos, setCurrPos] = useState(0);

    const changeProject = (isRight: boolean) => {
        if (isRight) {
            if (currPos == projects.length - 1) {
                setCurrPos(0);
                return;
            }
            setCurrPos(currPos + 1);
        }
        else {
            if (currPos == 0) {
                setCurrPos(projects.length - 1);
                return;
            }
            setCurrPos(currPos - 1);
        }
    }

    return (
        <div className="relative flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                {projects.map((project, i) => (
                    <div key={project.name} className={`${project.position == currPos ? "" : "hidden"} w-full flex flex-col items-center`}>
                        
                        <div className="w-full flex flex-col items-center">
                            {project.el}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Right Button */}
            <button onClick={() => changeProject(true)} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            {/* Left Button */}
            <button onClick={() => changeProject(false)} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
        
        </div>
    );
}

export default ProjectsTile;

