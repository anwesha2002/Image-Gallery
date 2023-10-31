import { PopUpModalProps} from "../../data/model/gallery.ts";
import {Picture} from "./Picture.tsx";
import {Col, Row} from "react-bootstrap";
import '../../style/galleryItems.css'
import {useState} from "react";
import {ViewPictureModal} from "./viewPictureModal.tsx";
import {useApi} from "../../context/apiDataprovider.tsx";

type searchResultsProps = {
    input : string
}

export function GalleryItems({input} : searchResultsProps){
    //const [data] = useFetchData<Gallery[]>([] )
    const [clicked, setClicked] = useState<PopUpModalProps|null>(null)
    const { GetPicture } = useApi()
    //console.log(data);

    return(
        <>
            <Row md={2} lg={3} xs={1} className="gallery">
                {GetPicture(input).map(picture=>(
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