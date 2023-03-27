import Image from 'next/image';
import coverrPicture from '../../public/projects/coverr.png';
import baxterPicture from '../../public/projects/baxter.webp';
import crowsfootballPicture from '../../public/projects/crowsfootball.png';
import medowsPicture from '../../public/projects/medows.png';
import launchesPicture from '../../public/projects/launches.png';


const projects = [
    {
        position: 0,
        name: "Coverr",
        src: coverrPicture,
        alt: "Coverr Project",
        priority: true
    },
    {
        position: 1,
        name: "Baxter",
        src: baxterPicture,
        alt: "Baxter Project"
    },
    {
        position: 2,
        name: "Crows Football",
        src: crowsfootballPicture,
        alt: "Crows Football Project"
    },
    {
        position: 3,
        name: "Medows",
        src: medowsPicture,
        alt: "Medows Project"
    },
    {
        position: 4,
        name: "Launches",
        src: launchesPicture,
        alt: "Launches Project"
    }
]


const ProjectsTile = () => {

    return (
        <div className="w-full shadow-inner border border-zinc-600 bg-zinc-700  ">
                   
            <div className='snap-x snap-mandatory  inline-flex flex-row overflow-x-scroll '>
                {projects.map((project, i) => (               
                    <div className='mx-10 my-10 snap-center shadow-sm flex-shrink-0 flex object-fit'>
                        <Image {...project} placeholder="blur" className='w-96 rounded' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsTile;

