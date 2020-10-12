import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardPortofolioComponent from '../Components/CardPortofolioComponent'
import AbsensiSekolah from '../Assets/Portofolio/absensi_sekolah.jpeg'
import AbsensiPerusahaan from '../Assets/Portofolio/absensi_perusahaan.jpeg'
import OnlineShop from '../Assets/Portofolio/online_shop.jpeg'

function PortofolioSection(props) {

    const badge = [
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
        }
    ]

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
        // {
        //     name: 'Material-Ui',
        //     style: {
        //         background: '#ffffff',
        //         color: '#000000'
        //     }
        // },
        // {
        //     name: 'NodeJs',
        //     style: {
        //         background: '#68A063',
        //         color: '#000000'
        //     }
        // },
        {
            name: 'ExpressJs',
            style: {
                background: '#68A063',
                color: '#000000'
            }
        }
    ]
    
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-white text-center"> Portofolio </h1>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent title="Web Portofolio" thumbnail="https://i.ibb.co/QDvYKn1/Capture.png" badge={badge} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent title="Web Absensi Perusahaan" thumbnail={AbsensiPerusahaan} badge={badge2} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent title="Web Absensi Sekolah" thumbnail={AbsensiSekolah} badge={badge3} />
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardPortofolioComponent title="Web Online Shop" thumbnail={OnlineShop} badge={badge4} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PortofolioSection