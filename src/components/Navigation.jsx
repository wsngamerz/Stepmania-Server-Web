import React, { useState } from 'react';
import { Link } from '@reach/router';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown,
    DropdownToggle,
    NavItem,
    NavLink,
    Button,
    Input,
} from 'reactstrap';
import Logo from './Logo';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand className="mb-1">
                <Logo color="#ffffff" width="200" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Leaderboards
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} to="/leaderboard/songs">
                                Songs
                            </DropdownItem>
                            <DropdownItem tag={Link} to="/leaderboard/users">
                                Users
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink tag={Link} to="/rooms">
                            Rooms
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className="form-inline my-2 my-lg-0">
                    <Input className="mr-sm-2" placeholder="Search" />
                    <Button className="my-2 my-sm-0" color="success" outline>
                        Search
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
