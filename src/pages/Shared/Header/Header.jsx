import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
        <Container className='mt-4 mb-4'>
            <div className="text-center">
                <img src={logo} />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format('dddd, LL')}</p>
            </div>
            <div className='d-flex mb-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='fw-bold' speed={50} gradient={true} gradientColor={[255, 255, 255]}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ps-5 gap-4">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#login">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;