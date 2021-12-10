import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../Img/logo.png';

export default function Navigation() {
    return (
        <Navbar className="100vw" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="m2" href="/"><img src={Logo} style={{height: '50px', width: '50px', marginRight: '20px', marginLeft: '30px'}}></img>Personal Trainer</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/training">Trainings</Nav.Link>
                    <Nav.Link href="/customers">Customers</Nav.Link>
                    <Nav.Link href="/calendar">Calendar</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}