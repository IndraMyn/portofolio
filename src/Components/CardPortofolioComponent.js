import React from 'react'
import { Card, CardHeader, CardBody, CardImg } from 'reactstrap'

function CardPortofolioComponent({ title, thumbnail, description, position, tools }) {
    return (
        <>
            <Card style={{ background: '#242526', borderRadius: '10px' }}>
                <CardHeader className="text-center text-white"> {title} </CardHeader>
                <CardImg src={thumbnail} style={{ width: "100%", height: 100, objectFit: "contain" }} />
                <CardBody className="text-white">
                    <label style={{ fontSize: 12 }}>Description: </label>
                    <p style={{ fontSize: 12 }}>{description}</p>
                    <label style={{ fontSize: 12 }}>Position: </label>
                    <p style={{ fontSize: 12 }}>{position}</p>
                    <label style={{ fontSize: 12 }}>Tools: </label>
                    <p style={{ fontSize: 12 }}>{tools}</p>
                </CardBody>
            </Card>
        </>
    )
}

export default CardPortofolioComponent