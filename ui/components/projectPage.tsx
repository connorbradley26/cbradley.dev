
import techNameToImage from '@/lib/techNameToImage'
import { Project } from '@/types/Project'
import Image from 'next/image'
import Link from 'next/link'
import ProjectDescription from './projectDescription'


export default function ProjectPage({ project }: { project: Project }) {

  return (
    <div className="mt-20">
      <div className="pt-6">
        {/* Image gallery */}
        {project.images && project.images.length > 3 ?
          <div className="mx-auto bg-zinc-800 py-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className=" aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <Image
                src={project.images[0] && project.images[0].image}
                alt={project.images[0] && project.images[0].desc}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <Image
                  src={project.images[1] && project.images[1].image}
                  alt={project.images[1] && project.images[1].desc}
                  className="h-full w-ful&& object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <Image
                  src={project.images[2] && project.images[2].image}
                  alt={project.images[2] && project.images[2].desc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <Image
                src={project.images[3] && project.images[3].image}
                alt={project.images[3] && project.images[3].desc}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div> : project.images ?
          <Image
            src={project.images[0] && project.images[0].image}
            alt={project.images[0] && project.images[0].desc}
            className="h-full w-full object-cover object-center"
          />
          : <></>
        }

        {/* Product info */}
        <div className="border-b border-b-zinc-700 mx-auto max-w-2xl px-4 pt-10  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-r-zinc-700 lg:pr-8 ">
            <div className="prose prose-invert">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h1>
              <blockquote className=''>
                <Link href={project.url}>{project.url}</Link>
              </blockquote>
            </div>
          </div>

          {/* Tech */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="text-2xl mb-10">Tech Stack</h2>
            <ul>
              {project.tech.map((tech) => (
                <li key={tech} className="text-lg font-extralight mb-2 flex my-4 text-gray-400">
                  {techNameToImage(tech) ? <Image className='w-8 h-8 mr-4 !fill-slate-400 ' src={techNameToImage(tech)} alt={tech} /> : null}
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-zinc-700 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="whitespace-pre-wrap font-extralight">{project.synopsis}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <article className="prose sm:prose-lg prose-invert mx-auto ">
        <br />
        <ProjectDescription project={project} />

        <div>
        </div>
      </article>
    </div>
  )
}
