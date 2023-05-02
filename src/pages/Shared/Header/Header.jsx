import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {

    return (
        <Container>
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
        </Container>
    );
};

export default Header;