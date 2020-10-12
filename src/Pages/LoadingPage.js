import React from 'react'
import { Container, Row, Col, Spinner } from 'reactstrap'

function LoadingPage() {
    return(
        <>  
            <Container>
                <Row className="mt-5">
                    <Col xs="12" className="mt-5 text-center">
                        <Spinner style={{ width: '3rem', height: '3rem', background: '#61dafb' }} type="grow" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoadingPage