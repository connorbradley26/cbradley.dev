/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/

import { projectsData } from "@/data/Projects";
import Image from "next/image";
import Link from "next/link";
export default function RecentProjects() {


    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Recent Projects</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-200">
                        Just some of the stuff I've been working on recently.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projectsData.map((project) => (
                        <article key={project.position} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    className="aspect-[16/9] w-full rounded-xl  object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> */}
                            </div>
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-500">
                                        <Link href={"/projects/" + project.name}>
                                            <span className="absolute inset-0" />
                                            {project.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-400 line-clamp-3">{project.description[0].text}</p>
                                </div>
                                
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
