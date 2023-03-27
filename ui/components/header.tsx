type Props = {
    title: string;
    subtitle?: string;
};

const Header = (props: Props) => {
    return (
        <header className="py-24 sm:py-32 ">
            <h1 className="text-6xl font-extrabold leading-none tracking-tight ">{props.title}</h1>
            <h2 className="text-zinc-400">{props.subtitle}</h2>
        </header>
    );
};

export default Header;