import {useFetchData} from "../../data/remote/api.ts";
import {Gallery} from "../../data/model/gallery.ts";
import {Picture} from "./Picture.tsx";
import {Col, Row} from "react-bootstrap";
import '../../style/galleryItems.css'
import {useState} from "react";
import {ViewPictureModal} from "./viewPictureModal.tsx";

export function GalleryItems(){
    const [data] = useFetchData<Gallery[]>([] )
    const [clicked, setClicked] = useState<Gallery|null>(null)
    console.log(data);

    return(
        <>
            <Row md={2} lg={3} xs={1} className="gallery">
                {data.map(picture=>(
                    <Col key={picture.id}>
                        <Picture
                            pictures={picture}
                            onPictureClick={setClicked}
                        />
                    </Col>
                ))}
                {clicked &&
                    <ViewPictureModal
                        clicked={clicked}
                        onDismiss={()=>setClicked(null)}
                    />
                }
            </Row>
        </>
    )
}