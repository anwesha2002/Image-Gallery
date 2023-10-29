import {Container} from "react-bootstrap";
import {Navbar} from "../components/navbar.tsx";
import {GalleryItems} from "../components/galleryItems.tsx";

export function Home(){
    return(
        <>
            <Navbar />
            <Container fluid>
                <GalleryItems/>
            </Container>
        </>
    )
}