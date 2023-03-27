import ProjectTile from './projectTile';
import { projectsData } from '@/data/Projects';



const ProjectsTiles = () => {
    const projects = projectsData;
    return (
        <>
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

