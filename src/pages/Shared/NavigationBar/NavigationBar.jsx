import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container className='mt-4 mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ps-5 gap-4">
                            <Link to='/category/0' className='text-secondary' style={{ textDecoration: 'none' }}>Home</Link>
                            <Link to='/about' className='text-secondary' style={{ textDecoration: 'none' }}>About</Link>
                            <Link to='/career' className='text-secondary' style={{ textDecoration: 'none' }}>Career</Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {user &&
                                <FaUserCircle className='fs-3 me-2'></FaUserCircle>
                            }
                            {user ?
                                <Button onClick={handleLogOut} variant="dark">Log Out</Button>
                                :
                                <Link to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;