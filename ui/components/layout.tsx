import Container from "./container";
import Navbar from "./navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({subsets: ['latin', 'latin-ext'], weight: ["400", "500", "600", "700"]});

export default function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <Container>
                <Navbar />
                <main className={poppins.className}>{children}</main>
            </Container>
        </>
    )
}
