import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ButtonGroup,
    Button,
} from 'reactstrap';

const RoomCard = props => (
    <Card>
        <CardBody>
            <CardTitle className="h3">{props.name}</CardTitle>
            <CardText>{props.description}</CardText>
            <div className="d-flex justify-content-between align-items-center">
                <ButtonGroup>
                    <Button outline>View</Button>
                    <Button outline>Edit</Button>
                </ButtonGroup>
                <p className="text-muted m-0">9 mins ago</p>
            </div>
        </CardBody>
    </Card>
);

export default RoomCard;
