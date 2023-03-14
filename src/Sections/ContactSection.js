import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { faFacebook, faInstagram, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import content from "../content.json";

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
                            <a target="_blank" rel="noopener noreferrer" href={profile.telegram} >
                                <Button className="mr-2 mr-lg-3" outline color="dark" size="lg" style={{borderColor: '#0088CC', color: '#0088CC'}} ><FontAwesomeIcon icon={faTelegram} /></Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={profile.instagram} >
                                <Button className="mr-2 mr-lg-3" outline color="dark" size="lg" style={{borderColor: '#E1306C', color: '#E1306C'}} ><FontAwesomeIcon icon={faInstagram} /></Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={profile.facebook} >
                                <Button className="mr-2 mr-lg-3" outline color="dark" size="lg" style={{borderColor: '#3b5998', color: '#3b5998'}} ><FontAwesomeIcon icon={faFacebook} /></Button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={profile.twitter} >
                                <Button className="mr-2 mr-lg-3" outline color="dark" size="lg" style={{borderColor: '#1DA1F2', color: '#1DA1F2'}} ><FontAwesomeIcon icon={faTwitter} /></Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactSection