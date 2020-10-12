import React from 'react'
import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button } from 'reactstrap'
import { faAddressCard, faEnvelope, faPhone, faTag, faUserTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileDetails from '../Assets/Illustration/profile_details.svg'
import Resume from '../Assets/Resume/resume.pdf'

function AboutSection(props) {
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
                                            <small><p>Hello I am Indra Mulyawan. I'm a web developer. I have the ability to solve problems as well as a strong desire to learn something. I have experience in web programming for about 3 years. I can also work in a team and also be under pressure. In the future, I will also study and explore mobile programming</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faTag} /> Age</Label>
                                            <small><p>18 years</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faEnvelope} /> Email</Label>
                                            <small><p>indraawan13@gmail.com</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faPhone} style={{transform: 'rotate(90deg)'}} /> Phone</Label>
                                            <small><p>+62 888 0941 9292</p></small>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <FormGroup>
                                            <Label className="text-blue"><FontAwesomeIcon icon={faAddressCard} /> Address</Label>
                                            <small><p>Cimahi 40522, Jawa Barat, Indonesia <br /> <small><a href="#address" className="text-blue">detail</a></small></p></small>
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