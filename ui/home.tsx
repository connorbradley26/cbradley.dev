import Container from "./components/container";
import Header from "./components/header";
import Navbar from "./components/navbar";


export function Home() {
    return (
        <Container>
            <Navbar/>
            <Header title="Hello 👋" subtitle="Software Engineer from Cheshire, UK."/>
        </Container>
    )
}