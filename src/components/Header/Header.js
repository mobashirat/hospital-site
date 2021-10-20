import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';

const Header = () => {
    const { logOut, user } = useAuth();
    console.log(user)
    return (
        <>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Ace Hospital</Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="fs-5 ms-1">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="fs-5 ms-1">Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors" className="fs-5 ms-1">Doctors
                        </Nav.Link>
                        <Nav.Link as={Link} to="/appointment" className="fs-5 ms-1">Appointment
                        </Nav.Link>

                        <Nav.Link as={Link} to="/register" className="fs-5 ms-1">Sign up</Nav.Link>

                        {user?.displayName ? <Button onClick={logOut} variant="primary">Logout</Button> :

                            <Nav.Link as={Link} to="/login" className="fs-5 ms-1">Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            {/* <Footer></Footer> */}

        </>

    );
};

export default Header;