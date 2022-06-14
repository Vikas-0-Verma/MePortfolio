import React, { Fragment, useEffect } from 'react';
import './home.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Studyman from '../Images/Studyman.png'
import javascript from '../Images/icons8-javascript.png'
import react from '../Images/icons8-react.png'
import node from '../Images/icons8-nodejs-48.png'
import mongodb from '../Images/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import redux from '../Images/icons8-redux-48.png'
import bootstrap from '../Images/icons8-bootstrap-48.png'
import css from '../Images/icons8-css3-48.png'
import html from '../Images/icons8-html-5-48.png'
import { RiDashboardFill } from 'react-icons/ri'
import Git from './github.js'
import { BsGithub } from 'react-icons/bs'
import Contact from './Contactus.js'
import { DeskPortfolios, clearErrors } from '../../Action/PortfoliosAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = () => {
  const dispactch = useDispatch()
  const { portfoilo, loading, error } = useSelector((state) => state.deskPort)

  useEffect(() => {
    if (error) {
      dispactch(clearErrors())
    }
    dispactch(DeskPortfolios())
  }, [dispactch, error]);

  if (portfoilo) {
    if (portfoilo.at(0)) {
      var url1 = portfoilo.at(0).carouselimage[0].url
    }
    if (portfoilo.at(1)) {
      if (portfoilo.at(1).carouselimage.length > 0) {
        console.log("first");
        var url2 = portfoilo.at(1).carouselimage[0].url
      } else {
        var url2 = ""
      }
    }

    if (portfoilo.at(2)) {
      if (portfoilo.at(2).carouselimage.length > 0) {
        var url3 = portfoilo.at(2).carouselimage[0].url
      } else {
        var url3 = ""
      }
    }

    if (portfoilo.at(3)) {
      if (portfoilo.at(3).carouselimage.length > 0) {
        var url4 = portfoilo.at(3).carouselimage[0].url
      } else {
        var url4 = ""
      }
    }


  }

  function Contactus(){
    window.scrollTo(0, 9999)
  }



  return (

    <Fragment>
      <div className='bgdiv'>
        <h1 className='bgtext'>FULL <br /> STACK</h1>
      </div>
      <Container fluid>
        <Row>
          <Col className="font" sm={7}>
            <div className='iwrite '>
              <h1 className='hi'> Hi, I am <span className='vikas'> Vikas Verma </span></h1>
              <h1 className='write'>i write </h1>
              <h1 className='write'>code<span className='span'>_</span></h1>
            </div>
            <div className='language'>
              <img src={javascript} alt="logo" width='30px' draggable={false}/>
              <img src={react} alt="logo" width='30px' draggable={false}/>
              <img src={node} alt="logo" width='30px' draggable={false}/>
              <img src={mongodb} alt="logo" width='30px'draggable={false} />
              <img src={redux} alt="logo" width='30px' draggable={false}/>
              <img src={bootstrap} alt="logo" width='30px' draggable={false}/>
              <img src={css} alt="logo" width='30px' draggable={false}/>
              <img src={html} alt="logo" width='30px' draggable={false}/>

            </div>

            <Container>
              <Row className='btnrow'>
                <Col> <Button onClick={Contactus} className='btn contect'>CONTACT ME</Button></Col>
                <Col> <Button className='btn resume'> <Link className='Link' to="/resume"> VIEW RESUME </Link> </Button></Col>
              </Row>
            </Container>

          </Col>



          <Col sm={5}><img src={Studyman} alt="study" className='Studyman' draggable={false} /></Col>
        </Row>
      </Container >


      <Container className='Con'>

        <Row className='mainrow'>
          <Col className='alittle'>a little <span className='about'> about </span> me ...</Col>
          <Col ></Col>
          <Col></Col>
        </Row>
        <Row className='Row Aboutme'>
          <Col className='Col me' sm={4}>
            Hi, I am all things product! Working as a
            product specialist. I am also a full-stack
            developer, in other words, pretty good at
            searching stackoverflow. I done BCA from
            IGNOU. I am doing Freelancing , and when
            not, I play games. I live and breathe product
            management every day, with a mask on.
            😷 #staySafe
          </Col>

          <Col className='Col' sm={8}>
            <Row className='Row'>
              <Col className='work Colgr alittle'>featured <span className='about'> work </span></Col>
              <Col className='Colgr'><Button className='btn seemore resume'><RiDashboardFill /> <Link to="/MY_PROJECT" style={{ "textDecoration": "none" }}> SEE MORE</Link> </Button></Col>
            </Row>
            <Link to="/MY_PROJECT" className='myprolink'>
            <Row className='Row'>
              <Col className='Col'>
                <div className='productdiv' style={{ backgroundImage: `url(${url1})`, backgroundRepeat: "no-repeat ", backgroundPosition: "center", backgroundSize: "cover", }}>
                  <div className='productdiv div1' >

                    <h6>{portfoilo && portfoilo.at(0) && portfoilo.at(0).projecttitle}</h6>
                  </div>
                </div>
              </Col>
              <Col className='Col'>
                <div className='productdiv' style={{ backgroundImage: `url(${url2})`, backgroundRepeat: "no-repeat ", backgroundPosition: "center", backgroundSize: "cover", }}>
                  <div className='productdiv div2' >
                    <h6>{portfoilo && portfoilo.at(0) && portfoilo.at(1).projecttitle}</h6>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='Row'>
              <Col className='Col'>
                <div className='productdiv' style={{ backgroundImage: `url(${url3})`, backgroundRepeat: "no-repeat ", backgroundPosition: "center", backgroundSize: "cover", }}>
                  <div className='productdiv div3'>
                    <h6>{portfoilo && portfoilo.at(0) && portfoilo.at(2).projecttitle}</h6>
                  </div>
                </div>
              </Col>
              <Col className='Col'>
                <div className='productdiv' style={{ backgroundImage: `url(${url4})`, backgroundRepeat: "no-repeat ", backgroundPosition: "center", backgroundSize: "cover", }}>
                  <div className='productdiv div4'>
                    <h6>{portfoilo && portfoilo.at(0) && portfoilo.at(3).projecttitle}</h6>
                  </div>
                </div>
              </Col>
            </Row>
            </Link>

          </Col>
        </Row>

      </Container>

      <Container className='git'>
        <Row>
          <Col className='work Colgr alittle gittext'><span className='about'> github</span>contributions</Col>
          <Col className='Colgr'><Button className='btn seemore resume'><BsGithub /><a href="https://github.com/Vikas-0-Verma" draggable={false} style={{ "textDecoration": "none" ,"userSelect":"none" }}> VISIT </a></Button></Col>
        </Row>
        <Row className='gith'>
          <Git />
        </Row>
      </Container>

      <Contact />





    </Fragment>

  );
};

export default Home;
