import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, } from '@fortawesome/free-solid-svg-icons'
import Banner from '../banner/Banner';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

            <Navbar className='p-3' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon className='fs-3' icon={faUserGraduate} />
                        <b className='text-danger fw-bold fs-3 text-dark text-uppercase' > D.Learning Institue</b> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Stack direction="horizontal" gap={5}>
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/course"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Courses
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Aboute
                                </NavLink>

                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div >
    );
};

export default Header;