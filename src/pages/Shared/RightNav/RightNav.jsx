import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/Qzone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4 mb-3'>Login With</h4>
            <div className="d-grid gap-1">
                <Button variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className="d-grid gap-1">
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='d-flex align-items-center gap-1' action href="#link1">
                        <FaFacebook color='blue' /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-1' action href="#link2">
                        <FaTwitter color='skyblue' /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-1' action href="#link3">
                        <FaInstagram color='#E1306C' /> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={bg} alt="" />
                <div className='text-center position-absolute top-0 mt-5 py-5 px-4 text-light'>
                    <h3 className='mb-4 fs-1'>Create an Amazing Newspaper</h3>
                    <p className='mb-4 fs-5 text-secondary'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='fs-4 btn-lg px-4' variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;