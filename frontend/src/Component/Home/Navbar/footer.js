import React, {useState} from 'react';
// import {Container} from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHomeAlt } from 'react-icons/bi'
import { MdPermContactCalendar } from 'react-icons/md'
import { HiOutlineDocument } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaShareAlt } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css";
import Vlogo from '../../Images/Vlogo.png'
import { Nav, Container, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    function Contactus(){
        window.scrollTo(0, 9999)
      }
    

    return <>
           <Container fluid className='text'>
            <p className='ptext'>Vikas Verma © 2022</p>
            <Container fluid  className='footer'>
            <div className="bar">
                <span variant="dark" bg="dark" onClick={handleShow} className="burgur">
                    <GiHamburgerMenu />
                </span>
                <Offcanvas className="canvas" show={show} onHide={handleClose}>
                    <Offcanvas.Header >
                        <img src={Vlogo} alt="LOGO" width="30px" className="HeaderCAnvas" />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto offcanvaslink">

                            <Nav.Link className="navlink"><Link className="Link" to="/" onClick={handleClose}><BiHomeAlt /> &nbsp;&nbsp;HOME</Link></Nav.Link>
                            <Nav.Link className="navlink Link"  onClick={()=>(Contactus(), handleClose())}><MdPermContactCalendar /> &nbsp;&nbsp;CONTACT</Nav.Link>
                            <Nav.Link className="navlink"> <Link className="Link" to="/resume" onClick={handleClose}><HiOutlineDocument />&nbsp;&nbsp;RESUME</Link></Nav.Link>
                            <Nav.Link className="navlink Link" href="https://github.com/Vikas-0-Verma" onClick={handleClose}><BsGithub /> &nbsp;&nbsp;GITHUB</Nav.Link>
                            <Nav.Link className="navlink Link" href="https://www.linkedin.com/mwlite/in/vikas-verma-558a5b176" onClick={handleClose}><FiLinkedin /> &nbsp;&nbsp;LINKEDIN</Nav.Link>
                            <Nav.Link className="navlink"> <Link className="Link" to="/MY_PROJECT" onClick={handleClose}><AiOutlineFundProjectionScreen /> &nbsp;&nbsp;MY_PROJECT</Link></Nav.Link>
                            

                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <img  src={Vlogo} alt="LOGO" width="30px" />
            </Container>

            </Container>

          </>;
};

export default Footer;
