import {Container} from "react-bootstrap";
import {Navbar} from "../components/navbar.tsx";
import {GalleryItems} from "../components/galleryItems.tsx";
import {useState} from "react";
import {Gallery} from "../../data/model/gallery.ts";
export function Home(){
    const [searchResults, setSearchResults] = useState<Gallery[]>([])
    const [input, setInput] = useState("");

    return(
        <>
            <Navbar input={input} setInput={setInput} searchResults={searchResults} setSearchResults={setSearchResults} />
            <Container fluid>
                <GalleryItems input={input} />
            </Container>
        </>
    )
}