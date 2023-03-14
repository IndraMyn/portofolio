import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col, Container } from 'reactstrap';
import CardSkillComponent from '../Components/CardSkillComponent'
import { faBootstrap, faCss3, faFreeCodeCamp, faHtml5, faJs, faLaravel, faNode, faNodeJs, faPhp, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function AllSkillSection(props) {
    
    const[activeTab, setActiveTab]  = useState('1') 

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const active = {
        background: '#18191a',
        borderColor: '#61dafb'
    }
    const nonActive = {
        background: '#18191a',
        borderBottom: 1
    }

    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-center text-white">My Skill</h1>
                    </Col>
                    <Col xs="12" lg="12">
                        <Nav tabs justified style={{borderColor: '#61dafb'}}>
                            <NavItem>
                                <NavLink style={(activeTab === '1')?active:nonActive} className={`${(activeTab === '1')?'active text-white navlink-style':'text-blue navlink-style'}`} onClick={() => { toggle('1'); }}>
                                    <small>All</small>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={(activeTab === '2')?active:nonActive} className={`${(activeTab === '2')?'active text-white navlink-style':'text-blue navlink-style'}`} onClick={() => { toggle('2'); }}>
                                    <small>Frontend</small>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={(activeTab === '3')?active:nonActive} className={`${(activeTab === '3')?'active text-white navlink-style':'text-blue navlink-style'}`} onClick={() => { toggle('3'); }}>
                                    <small>Backend</small>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={(activeTab === '4')?active:nonActive} className={`${(activeTab === '4')?'active text-white navlink-style':'text-blue navlink-style'}`} onClick={() => { toggle('4'); }}>
                                    <small>Database</small>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} className="mt-3">
                            <TabPane tabId="1">
                                <Row>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faReact, style: {color: '#61DBFB'}}} name="React Js" value="90" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faReact, style: {color: '#61DBFB'}}} name="React Native" value="90" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faNode, style: {color: '#68A063'}}} name="Node Js" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faNodeJs, style: {color: '#68A063'}}} name="Express Js" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faFreeCodeCamp, style: {color: '#DD4814'}}} name="Codeigniter" value="90" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faLaravel, style: {color: '#F05340 '}}} name="Laravel" value="30" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faLaravel, style: {color: '#F05340 '}}} name=".NET" value="30" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faDatabase, style: {color: '#00758F '}}} name="Mysql" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faGitAlt, style: {color: '#9e4209 '}}} name="Git" value="80" />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faHtml5, style: {color: '#e34c26'}}} name="HTML" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faCss3, style: {color: '#264de4'}}} name="CSS" value="60" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faJs, style: {color: '#f0db4f'}}} name="JavaScript" value="75" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faBootstrap, style: {color: '#553c7b'}}} name="Bootstrap" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faReact, style: {color: '#61DBFB'}}} name="React Js" value="90" />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faPhp, style: {color: '#474A8A'}}} name="PHP" value="85" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faNode, style: {color: '#68A063'}}} name="Node Js" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faNodeJs, style: {color: '#68A063'}}} name="Express Js" value="80" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faFreeCodeCamp, style: {color: '#DD4814'}}} name="Codeigniter" value="90" />
                                    </Col>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faLaravel, style: {color: '#F05340 '}}} name="Laravel" value="30" />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col xs="6" lg="3" className="mb-3">
                                        <CardSkillComponent icon={{icon: faDatabase, style: {color: '#00758F '}}} name="Mysql" value="80" />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AllSkillSection