import React, { useEffect } from 'react'
import './myproject.css'
import { Container, Row } from 'react-bootstrap'
import ProjectBox from './ProjectBox'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getPortfolios } from '../../Action/PortfoliosAction'

const Myproject = () => {
    const dispatch = useDispatch()
    const { error, portfoilo } = useSelector(state => state.portfoilos)

    useEffect(() => {
        if (error) {
            dispatch(clearErrors())
        }

        dispatch(getPortfolios())
    }, [dispatch, error])

    return (

        <Container >
            <Row className='ppRow' >
                <h1 className='textali'>Web Developer Portfolio</h1>
                &nbsp; <br />
                <h6 className='textali'>From Web Components and UI/UX animations to React.JS, MongoDB, Express.js,
                    Redux, and Node.JS. Check out my latest web software
                    development portfolio projects.</h6>
            </Row>
            <Row className='ppRow' >
                {portfoilo && portfoilo.map((portfoilo) => <ProjectBox data={portfoilo} />)}

            </Row>
            <Row className='ppRow lastrow' >
                <h2 className='textali'> Let's talk</h2>
               <h6 className='textali small'> Wanna get in touch or talk about a project?<br />
                Feel free to contact me via email at
                vikasverma84527@gmail.com <br />
                or drop a line in the form at the contact page</h6>
            </Row>

        </Container>

    )
}

export default Myproject