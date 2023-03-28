import ProjectTile from './projectTile';
import { projectsData } from '@/data/Projects';



const ProjectsTiles = () => {
    const projects = projectsData;
    return (
        <div className='mt-20 sm:mx-10'>
           <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Recent Projects</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-200">
                        Just some of the stuff I've been working on recently.
                    </p>
            </div>
            <div className="sm:grid grid-cols-3 gap-8 ">
                <div className="col-span-2 mt-8 sm:mt-4">
                    <ProjectTile project={projects.find(x => x.name == "Coverr")} />
                </div>
                <div className="col-span-1 space-y-8 mt-8 sm:mt-4">
                    <ProjectTile project={projects.find(x => x.name == "Crows Football")} />                  
                    {/* <ProjectTile project={projects.find(x => x.name == "Launches")} setSelectedProject={setSelectedProject} /> */}
                </div>
            </div>
            <div className="sm:grid grid-cols-3 gap-8">
                <div className="col-span-1 space-y-8 mt-8 sm:mt-4">
                    <ProjectTile project={projects.find(x => x.name == "Baxter")}/>
                </div>
                <div className="col-span-2 mt-8 sm:mt-4">
                    <ProjectTile project={projects.find(x => x.name == "Medows")}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsTiles;

