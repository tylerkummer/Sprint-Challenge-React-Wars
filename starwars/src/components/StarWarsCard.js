import React from "react";
import{ Card, CardBody, CardTitle, CardText} from 'reactstrap';

const StarWarsCard = props => {
    return (
        <Card style={{margin: '15px auto', width:'20%'}}>
            <CardBody style={{backgroundColor: 'lightblue'}}>
                <CardTitle style={{color: 'white'}}>Name:<br/>{props.name}</CardTitle>
            </CardBody>
            <CardBody style={{backgroundColor: 'brown'}}>
                <CardText style={{color: 'white'}}>Gender:<br/>{props.gender}</CardText>
            </CardBody>
            <CardBody style={{backgroundColor: 'purple'}}>
                <CardText style={{color: 'white'}}>Birth Year:<br/>{props.birth_year}</CardText>
            </CardBody>
        </Card>
    );
};
export default StarWarsCard