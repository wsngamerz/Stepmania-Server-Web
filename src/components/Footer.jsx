import React from 'react';

import Logo from './Logo';
import { Row, Col } from 'reactstrap';
import { Link } from '@reach/router';

const Footer = () => (
    <footer className="container py-5">
        <Row>
            <Col xs="12" className="col-md">
                <Logo color="#212529" width="220" />
                <small className="d-block mb-3 ml-2 text-muted">© 2020</small>
            </Col>
            <Col xs="6" className="col-md">
                <h5>Pages</h5>
                <ul className="list-unstyled text-small">
                    <li>
                        <Link to="/" className="text-muted">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/leaderboards" className="text-muted">
                            Leaderboards
                        </Link>
                    </li>
                    <li>
                        <Link to="/rooms" className="text-muted">
                            Rooms
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className="text-muted">
                            Search
                        </Link>
                    </li>
                </ul>
            </Col>
            <Col xs="6" className="col-md">
                <h5>Leaderboards</h5>
                <ul className="list-unstyled text-small">
                    <li>
                        <Link to="/leaderboards/songs" className="text-muted">
                            Songs
                        </Link>
                    </li>
                    <li>
                        <Link to="/leaderboards/users" className="text-muted">
                            Users
                        </Link>
                    </li>
                </ul>
            </Col>
            <Col xs="6" className="col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li>Link</li>
                </ul>
            </Col>
        </Row>
    </footer>
);

export default Footer;
