import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 footerDiv">
            <div>
                <div className="d-flex customFooterDetails ms-auto mb-2 mb-lg-0 gap-2 justify-content-around align-items-center">
                    <Link className='nav-Link footerLink' to="/">
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        <span>Contact us - +91-9999 999 999</span>
                    </Link>
                    <Link className='nav-Link footerLink' to="/">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        <span> Email - satacademy@gmail.com</span>
                    </Link>
                    <button className="btn footerbtn">
                        Register
                    </button>
                </div>
                <hr className="bg-light" />
                <p className="text-center mb-0">© 2025 My SAT Academy. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;

