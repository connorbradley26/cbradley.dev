import Image from "next/image";
import Connor from "../../public/connor.png"
import Socials from "./socials";

type Props = {
    title: string;
    subtitle?: string;
};

const Header = (props: Props) => {
    return (
        // <header className="py-24 sm:py-32 ">
        //     <h1 className="text-6xl font-extrabold leading-none tracking-tight ">{props.title}</h1>
        //     <h2 className="text-zinc-400">{props.subtitle}</h2>
        // </header>
        <header className="py-6 sm:py-32 flex flex-col sm:flex-row">
            <Image src={Connor} alt="Connor Bradley" width={200} height={200} className="rounded-lg shadow aspect-square object-cover mb-10" />
            <div className=" flex-grow flex items-center flex-col my-auto">
                <p className="mb-4 text-zinc-400">Hi, I'm </p>
                <h1 className="text-7xl font-extrabold leading-none tracking-tight mb-1 ">Connor Bradley 👋</h1>
                <h2 className="text-lg text-zinc-600"> Software Developer based in Macclesfield, Cheshire (UK)! </h2>
                <Socials />
            </div>
        

        </header>
    );
};

export default Header;