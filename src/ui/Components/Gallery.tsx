import { Image} from "../../data/Model/Gallery.ts";
import {GalleryPicture} from "./GalleryPicture.tsx";
import {Col, Row} from "react-bootstrap";
import '../../Style/Gallery.css'
import {useState} from "react";
import {ViewPictureModal} from "./ViewPictureModal.tsx";
import {useApi} from "../Context/ImageProvider.tsx";



export function Gallery(){
    const [clicked, setClicked] = useState<Image|null>(null)
    const { data } = useApi()

    return(
        <>
            <Row md={2} lg={3} xs={1} className="gallery">
                {data.map(picture=>(
                    <Col key={picture.id}>
                        <GalleryPicture
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