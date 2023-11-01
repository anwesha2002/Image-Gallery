import {Col, Container, Navbar as NavbarBs, Row} from 'react-bootstrap'
import '../../Style/Navbar.css'
import {SearchBar} from "./SearchBar.tsx";

export function Navbar(){
    return(
        <Container fluid  >
           <NavbarBs >
               <Row className="navbar d-flex flex-row justify-content-between align-items-center w-100">
                   <Col className="col-md-3 d-flex flex-row justify-content-center">
                    <h3>Image Gallery</h3>
                   </Col>
                   <Col className="col-md-4 d-flex flex-row justify-content-center">
                       <SearchBar  />
                       <div className="d-flex justify-content-center mt-3 " style={{backgroundColor : "#dddd"}}>
                       </div>
                   </Col>
                   <Col className="col-md-5 ">
                       <Row className="d-flex flex-row justify-content-around nav-menu w-100">
                           <Col className="d-flex flex-row justify-content-center"><h5>Explore</h5></Col>
                           <Col className="d-flex flex-row justify-content-center"><h5>Collection</h5></Col>
                           <Col className="d-flex flex-row justify-content-center"><h5>Community</h5></Col>
                       </Row>
                   </Col>
               </Row>

           </NavbarBs>
        </Container>
    )
}