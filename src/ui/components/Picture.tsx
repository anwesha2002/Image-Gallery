import {Card} from "react-bootstrap";
import { Image} from "../../data/model/gallery.ts";
import '../../style/Picture.css'
import { FaThumbsUp }  from 'react-icons/fa'

type PictureProps = {
    pictures : Image,
    onPictureClick : (pictures : Image) => void,
    input : string
}


export function Picture({pictures,onPictureClick, input } : PictureProps){
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
                        {input &&
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