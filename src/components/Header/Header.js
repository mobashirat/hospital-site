import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Child Care</Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home" className="fs-4 ms-4">Home</Nav.Link>
                        <Nav.Link href="#features" className="fs-4 ms-4">Services</Nav.Link>
                        <Nav.Link href="#pricing" className="fs-4 ms-4">Our Doctors</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>

    );
};

export default Header;