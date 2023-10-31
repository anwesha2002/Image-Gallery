import { PopUpModalProps} from "../../data/model/gallery.ts";
import {Button, Card, Modal} from "react-bootstrap";
import '../../style/Picture.css'
import { FaInstagram, FaThumbsUp, FaTwitter} from "react-icons/fa";

interface ViewPictureModalProps {
    onDismiss : () => void
    clicked?: PopUpModalProps
}

const PopUp = ({urls, user, likes} : PopUpModalProps)  => {

    return(
        <Card >
            <Card.Title className="position-relative">
                <Card.Img
                    className="image"
                    src={urls.raw}
                />

                <a
               // href={links.download}
                download={user.username}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Button className="position-absolute bottom-0 mb-1  download-button" >Download Image</Button>
                </a>
            </Card.Title>
            <Card.Body className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row justify-content-start align-items-center vh-auto">
                    <img alt="profile_picture" className="rounded-5 me-2 d-flex justify-content-center align-items-center" src={user.profile_image.medium}/>
                    <div className="d-flex flex-column justify-content-center align-items-start fs-10">
                        <h6>{user.name}</h6>
                        <p className="text-muted">@{user.username}</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <FaThumbsUp className="me-1 "/>
                    {likes}
                </div>
            </Card.Body>
            <Card.Body>
                <div className="d-flex justify-content-start align-items-start fs-13">
                    {user.social.instagram_username &&
                        <p className="text-muted">
                            {user.social.instagram_username}/
                            <FaInstagram/>
                        </p>
                    }
                    {user.social.twitter_username &&
                        <p className="text-muted ms-2">
                            {user.social.twitter_username}/
                            <FaTwitter/>
                        </p>
                    }
                    {user.social.portfolio_url &&
                        <a className="ms-2" href={user.social.portfolio_url}>
                            Portfolio
                        </a>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export function ViewPictureModal({onDismiss,clicked } : ViewPictureModalProps){
    //const [data] = useFetchData<PopUpModalProps[]>([])

    return(
        <>
            <Modal show onHide={onDismiss} >
                <Modal.Body className="position-relative ">
                    {clicked &&
                        <PopUp key={clicked.id} {...clicked}/>
                    }
                </Modal.Body>
                <Modal.Header closeButton className="position-absolute rounded shadow-lg" style={{right : 0, backgroundColor: "white"}}>
                </Modal.Header>
            </Modal>
        </>
    )
}