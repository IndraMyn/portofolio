import React from 'react'
import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button } from 'reactstrap'
import { faAddressCard, faEnvelope, faPhone, faUserTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileDetails from '../Assets/Illustration/profile_details.svg'
import Resume from '../Assets/Resume/resume.pdf'
import content from "../content.json";

function AboutSection(props) {

    const { profile } = content;

    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-center text-white"> About Me </h1>
                    </Col>
                    <Col xs="12" lg="6" className="mb-3 mt-lg-5">
                        <img src={ProfileDetails} alt="illustration" className="img-fluid mt-lg-5" />
                    </Col>
                    <Col xs="12" lg="6" className="mb-3">
                        <Card style={{background: '#18191a'}}>
                            <CardBody className="text-white">
                                <Row>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faUserTag} /> Description</Label>
                                            <small><p>{profile.description}</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faEnvelope} /> Email</Label>
                                            <small><p>{profile.email}</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faPhone} style={{transform: 'rotate(90deg)'}} /> Phone</Label>
                                            <small><p>{profile.phone}</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faAddressCard} /> Address</Label>
                                            <small><p>{profile.address} <br /> <small><a href="#address" className="text-blue">detail</a></small></p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <a href={Resume} target="_blank" rel="noopener noreferrer"><Button className="btn-blue mr-2">Download Resume</Button></a>
                                            <a href="#contact"><Button color="dark" outline className="btn-outline-blue">Contact Me</Button></a>
                                        </FormGroup>
                                    </Col>
                                </Row>                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutSection