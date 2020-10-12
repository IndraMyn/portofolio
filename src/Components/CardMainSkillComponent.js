import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardMainSkillComponent(props) {

    const { icon, name }    = props

    return(
        <>
            <Card className="text-white" style={{background: '#242526', borderRadius: '10px'}}>
                <CardBody>
                    <h1><FontAwesomeIcon icon={icon.icon} style={icon.style} /> {name} </h1>
                </CardBody>
            </Card>
        </>
    )
}

export default CardMainSkillComponent