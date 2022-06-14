import React, { Fragment, useState, useEffect } from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import letter from '../Images/letter1.png'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { GrSend } from 'react-icons/gr'
import { createForm } from '../../Action/PortfoliosAction'
import './contact.css'
import { useDispatch } from 'react-redux'
const Contactus = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMeassage] = useState("")
    const dispatch = useDispatch()


    const submitHandler = (e) => {
        
        const myForm = {
            name: name,
            email: email,
            message: message

        }
        dispatch(createForm(myForm))
        window.alert("Message Sent Successfully")
    }   


    return <Fragment>
        <Container className='contactdiv' id='contact'>
            <Row>
                <Col className='imagecol' md={5} >

                    <img src={letter} alt="letter" className='letter side' draggable={false}/>
                    {/* <img src={feMale} alt="letter" className='male side' />  */}
                </Col>


                <Col md={7}>
                    <Form className=''>
                        <Form.Group className="mb-3 fon" >
                            <Form.Label><BsPerson /> Name</Form.Label>
                            <Form.Control type="name" className='place fon' placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3 fon" controlId="formGroupEmail">
                            <Form.Label> <AiOutlineMail /> Email address</Form.Label>
                            <Form.Control type="email" className='place fon' placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3 fon" >
                            <Form.Label ><BiMessageRoundedDots /> Message</Form.Label>
                            <Form.Control type="description" className='place fon' placeholder="Message" onChange={(e) => setMeassage(e.target.value)} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" className='submit' size="lg" type="submit" onClick={submitHandler}>
                                <GrSend /> Send Message
                            </Button>
                        </div>
                    </Form>

                </Col>
            </Row>

        </Container>
    </Fragment>;
};

export default Contactus;
