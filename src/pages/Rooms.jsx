import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import RoomCard from '../components/RoomCard';

const roomList = [
    { name: 'Room 1', desc: 'A short description' },
    { name: 'Party', desc: 'A description' },
    { name: 'Test room', desc: 'A desc' },
    { name: 'Room 101', desc: '101 is life' },
    { name: 'Hello World', desc: 'Why hello world?' },
    { name: 'A room for Me!', desc: 'Me, Only me' },
    { name: 'Room 12', desc: 'A short description' },
    { name: 'Disco Dave', desc: 'Disco Dave was here' },
];

const Rooms = () => (
    <main role="main">
        <Jumbotron>
            <h1 className="display-4">Rooms</h1>
            <p className="lead text-muted">A list of currently live rooms</p>
        </Jumbotron>
        <Container className="py-5">
            <Row>
                {roomList.map(room => {
                    return (
                        <Col className="p-2" md="6" lg="4" key={room.name}>
                            <RoomCard
                                name={room.name}
                                description={room.desc}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    </main>
);

export default Rooms;
