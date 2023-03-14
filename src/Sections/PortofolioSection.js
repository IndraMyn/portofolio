import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardPortofolioComponent from '../Components/CardPortofolioComponent'
import AbsensiSekolah from '../Assets/Portofolio/absensi_sekolah.jpeg'
import AbsensiPerusahaan from '../Assets/Portofolio/absensi_perusahaan.jpeg'
import OnlineShop from '../Assets/Portofolio/online_shop.jpeg'
import AstraMoxa from '../Assets/Portofolio/astra_moxa.png'
import HealthHeroes from '../Assets/Portofolio/health_heroes.png'
import Amoba from '../Assets/Portofolio/amoba.jpg'
import Supervise from '../Assets/Portofolio/supervise.png'
import GolkarDshima from '../Assets/Portofolio/golkar_dshima.png'

function PortofolioSection(props) {

    const badge2 = [
        {
            name: 'Codeigniter',
            style: {
                background: '#DD4814',
                color: '#000000'
            }
        },
        {
            name: 'Bootstrap',
            style: {
                background: '#553c7b',
                color: '#000000'
            }
        },
        {
            name: 'Template',
            style: {
                background: '#ffffff',
                color: '#000000'
            }
        }
    ]

    const badge3 = [
        {
            name: 'PHP Native',
            style: {
                background: '#474A8A',
                color: '#000000'
            }
        },
        {
            name: 'Bootstrap',
            style: {
                background: '#553c7b',
                color: '#000000'
            }
        },
        {
            name: 'Template',
            style: {
                background: '#ffffff',
                color: '#000000'
            }
        }
    ]

    const badge4 = [
        {
            name: 'ReactJs',
            style: {
                background: '#61DBFB',
                color: '#000000'
            }
        },
        {
            name: 'Bootstrap',
            style: {
                background: '#553c7b',
                color: '#000000'
            }
        },
        {
            name: 'ExpressJs',
            style: {
                background: '#68A063',
                color: '#000000'
            }
        }
    ]

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-white text-center"> Portofolio </h1>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Web Absensi Perusahaan"
                            thumbnail={AbsensiPerusahaan}
                            position="Fullstack Programmer"
                            description="Web based employee attendance system using NIP numbers"
                            tools="Codeigniter 4, MySQL, Bootstrap"
                            badge={badge2} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Web Absensi Sekolah"
                            thumbnail={AbsensiSekolah}
                            position="Fullstack Programmer"
                            description="Web based student attendance system using NIS number"
                            tools="PHP Native, MySQL, Bootstrap"
                            badge={badge3} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Web Online Shop"
                            thumbnail={OnlineShop}
                            position="Fullstack Programmer"
                            description="Simple web based online shop"
                            tools="Express Js, React Js, MySQL, Bootstrap"
                            badge={badge4} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Supervise"
                            thumbnail={Supervise}
                            position="Fullstack Programmer"
                            description="Web and mobile based employee attendance and work reporting system"
                            tools="Express Js, React Js, React Native, MySQL, Bootstrap"
                            badge={badge4} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Amoba"
                            thumbnail={Amoba}
                            position="Fullstack Programmer"
                            description="Web based financial aid monitoring system"
                            tools="Laravel, PostgreSQL, Bootstrap"
                            badge={badge4} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Astra Moxa"
                            thumbnail={AstraMoxa}
                            position="Backend Programmer"
                            description="Web based quiz game in the style of personality quiz for get user persona type ​"
                            tools=".NET, PostgreSQL, React Js (Admin Panel)"
                            badge={badge4} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Golkar D'shima" thumbnail={GolkarDshima}
                            position="Backend Programmer"
                            description="Web based adventure quiz game for creating education about political science​"
                            tools=".NET, MySQL, Redis, React Ts (Admin Panel)"
                            badge={badge4} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent
                            title="Health Heroes: Nutrihunt" thumbnail={HealthHeroes}
                            position="Backend Programmer"
                            description="Mobile based game for collecting monsters by scanning food barcodes"
                            tools=".NET, MySQL, Redis, React Ts (Admin Panel)"
                            badge={badge4} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PortofolioSection