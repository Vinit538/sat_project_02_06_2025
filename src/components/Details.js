

import React from 'react';
import { FaFacebookF, FaGit, FaGithub, FaGithubAlt, FaGithubSquare, FaInstagram, FaLinkedin, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    return (
        <div className='container detailsMainContainer py-5 px-3'>
            <div className='text-center mb-4'>
                <h4 className='fw-bold'>SAT Academy Guidance and Support</h4>
            </div>

            <div className='text-center mb-3'>
                <h1 className='display-6 fw-semibold'>SAT Academy — Educate. Elevate. Excel.</h1>
            </div>

            <div className='text-center mb-5'>
                <p className='lead'>We’re here to help you level up your skills, gain confidence, and land your first tech job with expert support and placement guidance.</p>
            </div>

            {/* Full-width Social Icons */}
            <div className='social-icons-bar py-4 social-icons-container'>
                <ul className='list-unstyled d-flex justify-content-center gap-4 m-0'>
                    <li>
                        <Link to='https://facebook.com' target='_blank' rel='noreferrer' className='social-_icon_link'>
                            <FaFacebookF className='social_icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://instagram.com' target='_blank' rel='noreferrer' className='social-icon_link'>
                            <FaInstagram className='social_icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://linkedin.com' target='_blank' rel='noreferrer' className='social-icon_link'>
                            <FaLinkedinIn className='social_icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://youtube.com' target='_blank' rel='noreferrer' className='social-icon_link'>
                            <FaYoutube className='social_icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://github.com' target='_blank' rel='noreferrer' className='social-icon_link'>
                            <FaGithub className='social_icon' />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='row text-center  g-4 pt-5 bottomNav'>
                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3 text-center detailsNavLinkHead'>Explore</h6>
                    <div className='detailsNavLinkDiv'>
                        <Link className='detailsNavLinks py-1' to='/courses'><span className='navlinkInDetails'>Courses</span></Link>
                        <Link className='detailsNavLinks py-1' to='/internships'><span className='navlinkInDetails'>Internship</span></Link>
                        <Link className='detailsNavLinks py-1' to='/projects'><span className='navlinkInDetails'>Projects</span></Link>
                    </div>
                </div>

                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3 detailsNavLinkHead'>Company</h6>
                    <div className='detailsNavLinkDiv'>
                        <Link className='detailsNavLinks py-1' to='/aboutUs'><span className='navlinkInDetails'>About</span></Link>
                        <Link className='detailsNavLinks py-1' to='/contactUs'><span className='navlinkInDetails'>Contact Us</span></Link>
                        <Link className='detailsNavLinks py-1' to='/career'><span className='navlinkInDetails'>Career</span></Link>
                    </div>
                </div>

                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3 detailsNavLinkHead'>Legal</h6>

                    <div className='detailsNavLinkDiv'>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>Privacy Policy</span></Link>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>Terms & Conditions</span></Link>
                    </div>
                </div>

                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3 detailsNavLinkHead'>Follow Us</h6>
                    <div className='detailsNavLinkDiv'>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>FaceBook</span></Link>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>Instagram</span></Link>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>Github</span></Link>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>YouTube</span></Link>
                        <Link className='detailsNavLinks py-1' to='/'><span className='navlinkInDetails'>LinkedIn</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;


