
import Image from "next/image";
import Connor from "../public/connor.png";

export function Contact() {
    return (

        <div className="relative grid grid-cols-2 ">
            <div className="my-auto">
                <Image
                    className="w-full object-cover  rounded shadow"
                    src={Connor}
                    alt="Picture of me and my cat Vimto"
                />
                <p className="text-sm font-extralight">Me and Vimto, my supervisor. He accepts tuna and chicken as payment.</p>
            </div>
            <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl  lg:pt-32">
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-200">Let's work together</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-400">
                            I&apos;m currently looking for a new role and I am open to a wide range of opportunities. I&apos;m also keen to hear about any interesting projects you may be working on.
                        </p>
                        <form action="#" method="POST" className="mt-16">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-200">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-200">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-200">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-200">
                                        Company
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                               
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-200">
                                            How can I help you?
                                        </label>
                                        <p id="message-description" className="text-gray-400">
                                            Max 500 characters
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            aria-describedby="message-description"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                               
                            </div>
                            <div className="mt-10 flex justify-end border-t border-gray-200/10 pt-8">
                                <button
                                    type="submit"
                                    className="rounded-md bg-green-200 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-700 shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}