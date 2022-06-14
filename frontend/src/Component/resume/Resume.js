import React, {useEffect, Fragment} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import paper from '../../Component/Images/paper.png'
import { getResume, clearErrors } from '../../Action/PortfoliosAction'
import { useDispatch, useSelector } from 'react-redux'
import './resume.css'

const Resume = () => {
    const dispatch = useDispatch();
    const {resume, loading, error} = useSelector((state)=> state.resume)
    useEffect(() => {
        if(error){
            dispatch(clearErrors())
        }
      dispatch(getResume())
    }, [dispatch, error])
    
    return (
        <Fragment>
        {loading && 
        <Container>
            <div className='sresume'> 
               <Row>
                   <Col xxl={8} xl={8} lg={8} md={8} sm={8} >
                        <h1 className='myresume'>MY <br /> RESUME</h1> 
                        </Col>
                   <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                    <img src={paper} alt="documents" className='paperd' />
                   </Col>
               </Row>
            </div>
            <br />
            <embed  
            src={`${resume.Link}#toolbar=0`}
            type="application/pdf"
             frameborder="0" scrolling="auto"   height="100%"
             width="100%" className='iframeresume'></embed>
        </Container>
        }
        </Fragment>
    )
}

export default Resume