import Container from "./components/container";
import Header from "./components/header";
import Navbar from "./components/navbar";


export function Projects() {
    return (
        <Container>
            <Navbar />
            <Header title="Projects 👋" subtitle="Software Engineer from Cheshire, UK."/>
        </Container>
    )
}