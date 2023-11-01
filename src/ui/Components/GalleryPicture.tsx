import {Card} from "react-bootstrap";
import { Image} from "../../data/Model/Gallery.ts";
import '../../Style/GalleryPicture.css'
import { FaThumbsUp }  from 'react-icons/fa'
import {useApi} from "../Context/ImageProvider.tsx";

type PictureProps = {
    pictures : Image,
    onPictureClick : (pictures : Image) => void,
}

export function GalleryPicture({pictures,onPictureClick } : PictureProps){
    const { searchQuery } = useApi()
    const {
        cover_photo,
        user,
        title
    } = pictures
    return(
        <>
            <Card className="mt-4 shadow-sm " onClick={()=> onPictureClick(pictures)}>
                <Card.Img
                    className="d-flex justify-content-center align-items-center flex-row image"
                    src={cover_photo.urls.thumb}
                />
                <Card.Body className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        <h5>{user.name}</h5>
                        {searchQuery &&
                            <p className="text-muted fs-13 d-flex flex-column justify-content-start align-items-center">{title}</p>
                        }
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <FaThumbsUp className="m-2"/>
                        {cover_photo.likes}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}