import React from "react";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import Vlogo from '../../Images/Vlogo.png'
import { Link } from 'react-router-dom'
import { CgInstagram} from 'react-icons/cg'
import { GrLinkedinOption} from 'react-icons/gr'
import { FaFacebookF} from 'react-icons/fa'
import { GoMarkGithub} from 'react-icons/go'
import { BsTwitter} from 'react-icons/bs'

function Naavbar() {
   
    

    return (
        <>
            <Navbar bg="dark" variant="dark" className="Appbar" sticky="top">
                <Container>
                    <Navbar.Brand className="logo" href="/"><img src={Vlogo} alt="LOGO" width="30px" /></Navbar.Brand>
                    <Nav className="me-auto links">
                        <Nav.Link> <Link className="Link" to="/">HOME</Link></Nav.Link>
                        <Nav.Link className="Link"  href="/#contact" >CONTACT</Nav.Link>
                        <Nav.Link> <Link className="Link" to="/resume">RESUME</Link></Nav.Link>
                        <Nav.Link className="Link" href="https://github.com/Vikas-0-Verma" >GITHUB</Nav.Link>
                        <Nav.Link className="Link" href="https://www.linkedin.com/mwlite/in/vikas-verma-558a5b176"> LINKEDIN </Nav.Link>
                        <Nav.Link> <Link className="Link" to="/MY_PROJECT">MY_PROJECT</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Row className="Follow_me">
                <p className="Follow">Follow Me</p>
                <ul className="ul">
                <a className="textdeco" href="https://www.facebook.com/profile.php?id=100004736400069"><li className="social_media facebook"><FaFacebookF/> </li></a>
                <a className="textdeco" href="https://github.com/Vikas-0-Verma"> <li className="social_media githubicon"><GoMarkGithub/> </li></a>
                <a className="textdeco" href="https://twitter.com/vikasverma84527"><li className="social_media twitter"><BsTwitter/> </li></a>
                <a className="textdeco" href="https://www.linkedin.com/login"> <li className="social_media linked"><GrLinkedinOption/> </li></a>
                <a className="textdeco" href="https://www.instagram.com/vikas_verma____/"> <li className="social_media instagram"><CgInstagram/> </li></a>
                </ul>
            </Row>

        </>
    );
}

export default Naavbar;
