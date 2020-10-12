import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import Avatar from '../Assets/Avatar/avatar.jpeg'

function JumbotronComponent(props) {
    return(
        <>
            <Jumbotron fluid className="text-white" style={{background: '#242526'}}>
                <Container>
                    <Row>
                        <Col xs="6" lg={{size: 3, offset: 3}} className="text-center">
                            <img src={Avatar} className="img-thumbnail img-avatar" alt="Avatar" />
                        </Col>
                        <Col xs="6" lg="4" className="mt-lg-4 mt-3">
                            <b className="lead">Hello There!</b>
                            <h1 className="display-3 head-style">I am Indra</h1>
                            <p style={{color: '#61dafb'}}>Web Developer</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}

export default JumbotronComponent