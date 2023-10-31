import {Container} from "react-bootstrap";
import {Navbar} from "../components/navbar.tsx";
import {GalleryItems} from "../components/galleryItems.tsx";
import {useState} from "react";
export function Home(){
    //const [searchResults, setSearchResults] = useState<Gallery[]>([])
    const [input, setInput] = useState("");

    return(
        <>
            <Navbar input={input} setInput={setInput}  />
            <Container fluid>
                <GalleryItems input={input} />
            </Container>
        </>
    )
}