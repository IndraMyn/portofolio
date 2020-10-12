import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardMainSkillComponent from '../Components/CardMainSkillComponent'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

function MainSkillSection(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-center text-light">Main Skill</h1>
                    </Col>
                    <Col xs="12" lg="3" className="mb-3">
                        <CardMainSkillComponent icon={{icon: faDatabase, style: {color: '#00758F'}}} name="Mysql" />
                    </Col>
                    <Col xs="12" lg="3" className="mb-3">
                        <CardMainSkillComponent icon={{icon: faNodeJs, style: {color: '#68A063'}}} name="Express" />
                    </Col>
                    <Col xs="12" lg="3" className="mb-3">
                        <CardMainSkillComponent icon={{icon: faReact, style: {color: '#61DBFB '}}} name="React" />
                    </Col>
                    <Col xs="12" lg="3" className="mb-3">
                        <CardMainSkillComponent icon={{icon: faNode, style: {color: '#68A063'}}} name="Node" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainSkillSection