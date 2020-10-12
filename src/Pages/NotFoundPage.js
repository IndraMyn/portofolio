import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import NotFound from '../Assets/Illustration/not_found.svg'

function NotFoundPage(props) {
    return(
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs="12" className="mb-3 mt-5">
                        <h1 className="text-center text-white">404 Not Found :(</h1>
                    </Col>
                    <Col xs={{size: 4, offset: 4}} className="mb-3">
                        <img src={NotFound} className="img-fluid" alt="illustration" />
                    </Col>
                    <Col xs="12" className="mb-3 text-center">
                        <Link to="/"><Button outline className="btn-outline-blue">Back to Home</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NotFoundPage