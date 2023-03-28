import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "CV", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {

    return (
        <div className="mx-auto flex justify-center">
            <nav className="grid grid-cols-3 flex-wrap border-2 border-zinc-700 rounded-full ">
                {navItems.map((item, i) => (
                    <div className="flex flex-row ">
                        <div className={`${i == navItems.length - 1 ? "rounded-r-full" : i == 0 ? "rounded-l-full" : ""}
                                           hover:bg-zinc-800 text-zinc-200  hover:text-zinc-400 w-full h-full text-center mx-auto px-4 py-2`}>
                            <Link href={item.href} key={item.name}>
                                {item.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </nav>
        </div>

    );
};

export default Navbar;