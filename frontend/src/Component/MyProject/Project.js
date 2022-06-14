import React, { Fragment, useEffect } from 'react'
import './project.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import webloader from 'webfontloader'
import { Getsingleport, clearErrors } from '../../Action/PortfoliosAction.js'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AnimationBTN, Github } from './AnimationBTN'



const Project = () => {
  const dispactch = useDispatch()
  const params = useParams()

  const { loading, portfoilo, error, } = useSelector((state) => state.single)

  useEffect(() => {
    webloader.load({
      google: {
        families: ['Festive', "Josefin Sans", 'Rowdies']
      }
    })

    if (error) {
      dispactch(clearErrors())
    }
    dispactch(Getsingleport(params.id))

  }, [dispactch, error, params.id])

  return (
    <Fragment>

      {loading &&
        <Container>
          <div className='Procontainer firstcontainer'>
            <Row className='CRow'>
              <Col sm={12}>
                <h2 className='Rowdies'> {portfoilo.projecttitle} </h2>
                <h6 className='Josefin'> {portfoilo.projecttitle} Application Backend and Frontend based on MERN </h6>
              </Col>
            </Row>
          </div>
          <div className='Procontainer default'>
            <Row className='CRow'>

              <Col >
                <AnimationBTN link={portfoilo.projectlink} />
              </Col>
              <Col className='gitttdiv'>
                <Github />
              </Col>
            </Row>
          </div>

          <div className='Procontainer default crsouel'>
            <Row className='CRow'>
              <Carousel className='maincc'>
                <Carousel.Item  >
                  <img
                    className="d-block w-100"
                    src={portfoilo.carouselimage[0].url}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={portfoilo.carouselimage[1].url}
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={portfoilo.carouselimage[2].url}
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>
            </Row>
          </div>

          <div className='Procontainer'>
            <Row className='CRow'>
            <h2 className='Rowdies'> About This Project </h2>
            <hr />
            <h6 className='Josefin'> {portfoilo.projectdes}</h6>
            </Row>
          </div>

          <div className='Procontainer'>
            <Row className='CRow'>
            <h2 className='Rowdies'> Technical Sheet </h2>
            <h6 className='Josefin'> Code technologies I got involved with while working on this project.</h6>
            <hr />
            <ul>
              { portfoilo.listoftypeodcode.map((list)=> 

                <li><h6 className='Josefin'> {list.name} </h6></li>
                ) }
            </ul>
            </Row>
          </div>

          <div className='Procontainer'>
            <Row className='CRow'>
            <h2 className='Rowdies'> Resources </h2>
            <hr />
            <h6 className='Josefin'> Visit the App at: {portfoilo.projectlink} </h6>
            </Row>
          </div>
          
          <Row className='ppRow lastrow' >
                <h2 className='textali'> Let's talk</h2>
               <h6 className='textali small'> Wanna get in touch or talk about a project?<br />
                Feel free to contact me via email at
                vikasverma84527@gmail.com <br />
                or drop a line in the form at the contact page</h6>
            </Row>
         



        </Container>

      }
    </Fragment>
  )
}

export default Project