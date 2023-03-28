import ProjectTile from './projectTile';
import { projectsData } from '@/data/Projects';



const ProjectsTiles = () => {
    const projects = projectsData;
    return (
        <>
            <div className='flex justify-center mb-4 font-light text-zinc-400'>
                <h2 className='text-3xl font-light border-b border-b-green-200'>Recent Projects</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 ">
                <div className="col-span-2">
                    <ProjectTile project={projects.find(x => x.name == "Coverr")} />
                </div>
                <div className="col-span-1 space-y-4">
                    <ProjectTile project={projects.find(x => x.name == "Crows Football")} />                  
                    {/* <ProjectTile project={projects.find(x => x.name == "Launches")} setSelectedProject={setSelectedProject} /> */}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-1 space-y-4">
                    <ProjectTile project={projects.find(x => x.name == "Baxter")}/>
                </div>
                <div className="col-span-2">
                    <ProjectTile project={projects.find(x => x.name == "Medows")}/>
                </div>
            </div>
        </>
    );
}

export default ProjectsTiles;

