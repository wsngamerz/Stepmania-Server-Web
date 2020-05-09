import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => (
    <main role="main">
        <Jumbotron>
            <h1 className="display-3">Stepmania Server</h1>
            <p className="lead text-muted">
                An online leaderboard and database of scores
            </p>
            <p>
                <Button className="my-2 mx-1" color="primary">
                    Login
                </Button>
                <Button className="my-2 mx-1" color="secondary">
                    Register
                </Button>
            </p>
        </Jumbotron>
    </main>
);

export default Home;
