import {Card} from "react-bootstrap";
import { PopUpModalProps} from "../../data/model/gallery.ts";
import '../../style/Picture.css'
import { FaThumbsUp }  from 'react-icons/fa'

type PictureProps = {
    pictures : PopUpModalProps,
    onPictureClick : (pictures : PopUpModalProps) => void
}


export function Picture({pictures,onPictureClick } : PictureProps){
    const {
        urls,
        user,
        likes,
        alt_description
    } = pictures
    return(
        <>
            <Card className="mt-4 shadow-sm " onClick={()=> onPictureClick(pictures)}>
                <Card.Img
                    className="d-flex justify-content-center align-items-center flex-row image"
                    src={urls.thumb}
                />
                <Card.Body className="d-flex flex-row justify-content-between">
                    <div>
                        <h5>{user.name}</h5>
                        <p className="text-muted fs-13 d-flex flex-column justify-content-start align-items-center">{alt_description}</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <FaThumbsUp className="m-2"/>
                        {likes}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}