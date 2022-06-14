import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../Images/github.svg'
const ProjectBox = ({data}) => {
    return (
        <Fragment>
           
            <Col className='ppCol' md={4}   >
            <Link to={`/MY_PROJECT/${data._id}`} className="link" >
                <div className='header'>
                    <div className='red dot'></div>&nbsp;
                    <div className='yellow dot'></div>&nbsp;
                    <div className='green dot'></div>
                    <span className='title'>{data.projecttitle}</span>
                </div>
               
                <div className='imagedivpp'>
                    <img src={data.carouselimage[0].url} alt="gdfg" />
                </div>
                
                </Link>
                <a href="https://github.com/Vikas-0-Verma"><img src={img}  alt="git" className='githubpp' /></a> 
            </Col>
            
           
        </Fragment>
    )
}

export default ProjectBox