import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardSkillComponent(props) {

    const { icon, name } = props

    return(
        <>
            <Card body className="text-white text-center" style={{background: '#242526', borderRadius: '10px'}}>
                <CardTitle> {name} </CardTitle>
                <CardText className="display-3"><FontAwesomeIcon icon={icon.icon} style={icon.style} /></CardText>
            </Card>
        </>
    )
}

export default CardSkillComponent