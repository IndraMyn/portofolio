import React from 'react'
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap'

function CardAchievementComponent(props) {

    const { title, thumbnail, text } = props

    return(
        <>
            <Card style={{background: '#242526', borderRadius: '10px'}}>
                <CardHeader className="text-white text-center"> {title} </CardHeader>
                <CardImg src={thumbnail} style={{ width: "100%", height: 100, objectFit: "cover" }}  />
                <CardBody className="text-white">
                    <small>{text}</small>
                </CardBody>
            </Card>
        </>
    )
}

export default CardAchievementComponent