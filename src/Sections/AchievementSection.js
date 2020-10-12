import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CardAchievementComponent from '../Components/CardAchievementComponent'
import Achievement1 from '../Assets/Achievement/achievement1.jpeg'

function AchievementSection() {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-center text-white"> Achievement </h1>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="mb-3">
                        <CardAchievementComponent title="Praktek Kerja Industri" text="PT INOVASI EDUKASI BANGSA" thumbnail={Achievement1} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AchievementSection