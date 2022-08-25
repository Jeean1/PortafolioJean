

import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavMenu = () => {
    return (
        <div className='NavContainer'>
            <Navbar bg="primary" expand="lg" fixed='top' variant='light'>
                <Container>
                    <Navbar.Brand href="#home" style={{ color: 'white' }}>Portafolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#About" style={{ color: 'white' }}>Acerca de mi</Nav.Link>
                            <Nav.Link href="#Skills" style={{ color: 'white' }}>Habilidades</Nav.Link>
                            <Nav.Link href="#Experience" style={{ color: 'white' }}>Experiencia</Nav.Link>
                            <Nav.Link href="#ContactMe" style={{ color: 'white' }}>Contactame</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavMenu;