import React from 'react'
import { Card, CardTitle, CardText, Progress } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardSkillComponent(props) {

    const { icon, name, value } = props

    return(
        <>
            <Card body className="text-white text-center" style={{background: '#242526', borderRadius: '10px'}}>
                {/* <CardBody>
                    <h5><FontAwesomeIcon icon={icon.icon} style={icon.style} /> {name} </h5>
                    <Progress color="warning" value={value} />
                </CardBody> */}
                <CardTitle> {name} </CardTitle>
                <CardText className="display-3"><FontAwesomeIcon icon={icon.icon} style={icon.style} /></CardText>
                <Progress value={value} className="bg-secondary" color="dark" />
            </Card>
        </>
    )
}

export default CardSkillComponent