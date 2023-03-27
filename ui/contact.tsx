import Container from "./components/container";
import Header from "./components/header";
import Navbar from "./components/navbar";


export function Contact() {
    return (
        <Container>
            <Navbar/>
            <Header title="Contact 👋" subtitle="Software Engineer from Cheshire, UK."/>
        </Container>
    )
}