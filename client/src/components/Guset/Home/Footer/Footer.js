import React from 'react'
import IMG from '../../../../Assets/details/IconBackground.png'
import './Footer.css'

const Footer = () => {



    return (
        <div className="container-fluid background">
            <ul class="nav col-12 col-md-auto mb-2 p-4 justify-content-center mb-md-0">
                <li><p className="p-2 text-white">Features</p></li>
                <li><p className="p-2 text-white">Contact us</p></li>
                <li><p className="p-2 text-white">FAQs</p></li>
                <li><p className="p-2 text-white">About</p></li>
            </ul>
            <h1 className="text-white text-center">Louvre</h1>
            <img src={IMG} style={{ width: '100px;', height: '100px' }} alt="..." />
        </div>
    );
};

export default Footer;
