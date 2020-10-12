import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MyAddressComponent from '../Components/MyAddressComponent'

function AddressSections(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12" lg="12" className="mb-3">
                        <h1 className="text-center text-white">My Addresss</h1>
                    </Col>
                    <Col xs="12" lg="12">
                        <MyAddressComponent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddressSections