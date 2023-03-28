import Image from "next/image";
import Connor from "../../public/connor.png"
import Socials from "./socials";


// const Header = (props: Props) => {
//     return (
//         // <header className="py-24 sm:py-32 ">
//         //     <h1 className="text-6xl font-extrabold eading-none tracking-tight ">{props.title}</h1>
//         //     <h2 className="text-zinc-400">{props.subtitle}</h2>
//         // </header>
//         <header className="py-6 sm:py-32 flex flex-col sm:flex-row">
//             <Image src={Connor} alt="Connor Bradley" width={200} height={200} className="rounded-lg shadow aspect-square object-cover mb-10" />
//             <div className=" flex-grow flex items-center flex-col my-auto">
//                 <p className="mb-4 text-zinc-400">Hi, I'm </p>
//                 <h1 className="text-7xl font-extrabold leading-none tracking-tight mb-1 ">Connor Bradley 👋</h1>
//                 <h2 className="text-lg text-zinc-600"> Software Developer based in Cheshire, UK </h2>
//                 <Socials />
//             </div>


//         </header>
//     );
// };

// export default Header;

export default function Header() {
    return (
        <div className="">
            <div className="rounded pb-20 sm:pb-24 xl:pb-0">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">

                    <div className="w-full max-w-2xl flex flex-col md:flex-row xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
                            <Image
                                className="inline-block mx-auto md:mx-0 my-auto mt-10 md:mr-10 h-40 w-40 rounded-full object-cover "
                                src={Connor}
                                alt=""
                            />
                        <figure className="relative isolate pt-6 sm:pt-12 mx-auto">

                            <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">

                                <p className="text-zinc-400">Hi, I'm </p>
                                <h1 className="text-7xl font-extrabold my-2 ">Connor Bradley 👋</h1>

                                <h2 className="text-lg text-zinc-600"> Software Developer based in Cheshire, UK </h2>

                            </blockquote>
                            <figcaption className="mt-8 text-base w-full">
                                <Socials />
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
