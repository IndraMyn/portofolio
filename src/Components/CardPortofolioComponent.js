import React from 'react'
import { Card, CardHeader, CardBody, CardImg, Badge } from 'reactstrap'

function CardPortofolioComponent(props) {

    const { title, badge, thumbnail } = props

    return(
        <>
            <Card style={{background: '#242526', borderRadius: '10px'}}>
                <CardHeader className="text-center text-white"> {title} </CardHeader>
                <CardImg src={thumbnail} />
                <CardBody className="text-center">
                    {badge.map((x, i) => 
                        <small className="mr-1" key={i}><Badge style={x.style}> {x.name} </Badge></small>
                    )}
                </CardBody>
            </Card>  
        </>
    )
}

export default CardPortofolioComponent