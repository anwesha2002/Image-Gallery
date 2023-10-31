import {Col, Container, Navbar as NavbarBs, Row} from 'react-bootstrap'
import '../../style/navbar.css'
import {SearchBar} from "./sesrchBar.tsx";
import {SearchResults} from "./searchresults.tsx";
import {Dispatch, SetStateAction} from "react";

type searchResultProps = {
    input : string,
    setInput : Dispatch<SetStateAction<string>>
}

export function Navbar({ input, setInput} : searchResultProps){
    return(
        <Container fluid  >
           <NavbarBs >
               <Row className="navbar d-flex flex-row justify-content-between align-items-center w-100">
                   <Col className="col-md-3">
                    <h3>Image Gallery</h3>
                   </Col>
                   <Col className="col-md-4 ">
                       <SearchBar input={input} setInput={setInput} />
                       <div className="d-flex justify-content-center mt-3 " style={{backgroundColor : "#dddd"}}>
                        <SearchResults setInput={setInput} />
                       </div>
                   </Col>
                   <Col className="col-md-5 ">
                       <div className="d-flex flex-row justify-content-around nav-menu w-100">
                           <h5>Explore</h5>
                           <h5>Collection</h5>
                           <h5>Community</h5>
                       </div>
                   </Col>
               </Row>

           </NavbarBs>
        </Container>
    )
}