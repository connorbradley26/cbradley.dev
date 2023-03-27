import Container from "./container";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <Navbar />
                <main>{children}</main>
            </Container>
        </>
    )
}
