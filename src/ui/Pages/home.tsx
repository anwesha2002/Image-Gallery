import {Container} from "react-bootstrap";
import {Navbar} from "../Components/Navbar.tsx";
import {Gallery} from "../Components/Gallery.tsx";
export function Home(){

    return(
        <>
            <Navbar  />
            <Container fluid>
                <Gallery  />
            </Container>
        </>
    )
}