import {Card} from "react-bootstrap";
import {Gallery} from "../../data/model/gallery.ts";
import '../../style/Picture.css'
import { FaThumbsUp }  from 'react-icons/fa'

type PictureProps = {
    pictures : Gallery,
    onPictureClick : (pictures : Gallery) => void
}


export function Picture({pictures,onPictureClick } : PictureProps){
    const {
        urls,
        user,
        likes
    } = pictures

    //const [showDialogue, setShowDialogue] = useState(false)



    return(
        <>
            <Card className="mt-4 shadow-sm " onClick={()=> onPictureClick(pictures)}>
                <Card.Img
                    className="d-flex justify-content-center align-items-center flex-row image"
                    src={urls.thumb}
                />
                <Card.Body className="d-flex flex-row justify-content-between">
                    <h5>{user.name}</h5>
                    <div className="d-flex justify-content-center align-items-center">
                        <FaThumbsUp className="m-2"/>
                        {likes}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}