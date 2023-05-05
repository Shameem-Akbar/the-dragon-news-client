import React from 'react';
import MyLocation from '../GoogleMap/MyLocation';


const Footer = () => {
    return (
        <div className="page-footer font-small blue pt-4">
            {/* <MyLocation></MyLocation> */}
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a className='text-decoration-none text-danger' href="https://thedragonnews.com/"> TheDragonNews.com</a>
            </div>

        </div>
    );
};

export default Footer;