import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
    return (
        <Navbar  bg="dark" variant="dark">
            <Container>
          
                <Navbar.Brand className="m2" href="/">Personal Trainer</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/training">Trainings</Nav.Link>
                    <Nav.Link href="/customers">Customers</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}