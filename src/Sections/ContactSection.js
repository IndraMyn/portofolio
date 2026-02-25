import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import content from "../content.json";
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

function ContactSection(props) {

    const { profile } = content;

    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-center text-white">Contact Me</h1>
                    </Col>
                    <Col xs="12" lg={{size:6, offset: 3}}>
                        <div className="text-center">
                            <a target="_blank" rel="noopener noreferrer" href={profile.whatsapp} >
                                <Button className="mr-2 mr-lg-3" outline color="dark" size="lg" style={{borderColor: '#4FCE5D', color: '#4FCE5D'}} ><FontAwesomeIcon icon={faWhatsapp} /></Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={profile.sendemail} >
                                <Button className="mr-2 mr-lg-3" outline color="dark" size="lg" style={{borderColor: '#0088CC', color: '#0088CC'}} ><FontAwesomeIcon icon={faMailBulk} /></Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactSection