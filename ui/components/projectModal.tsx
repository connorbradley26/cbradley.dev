import { Project, ProjectImages } from '@/types/Project'
import Image from 'next/image'

const ProjectModal = ({ project, image, onClose, isOpen }: { project: Project, image: ProjectImages, onClose: Function, isOpen: boolean }) => {

    return (
        <>
            {isOpen && (
                <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/50 overflow-y-hidden">
                <div tabIndex={-1} className=" z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div className="relative mx-auto w-full h-full max-w-2xl md:h-auto">
                        <div className="relative rounded-lg shadow bg-zinc-700">
                            {/* header */}
                            {/* <div className="flex items-start justify-between p-4 border-b border-b-zinc-500 rounded-t"> */}
               

                            {/* Content */}
                            <div className="p-6 space-y-0">
                                <button onClick={() => onClose()} type="button" className=" absolute right-8  top-8 h-8 w-8 bg-red-400 text-gray-800  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <Image src={image.image} alt={image.desc} placeholder="blur" className='rounded' />
                                <p className="text-gray-400 text-sm">
                                    {image.desc}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            )}
        </>

    )
}

export default ProjectModal