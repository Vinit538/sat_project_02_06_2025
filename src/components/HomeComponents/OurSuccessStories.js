import React from 'react';
import '../Home.css';
import SplitText from '../SplitText'; // Update path if needed

function OurSuccessStories() {
    return (
        <div className="container text-center">

            <div className='py-5'>
                <SplitText
                    text="Our Success Stories"
                    className="fw-bold mb-5 fs-2"
                    delay={30}
                    animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
                    animationTo={{ opacity: 1, transform: 'translateY(0)' }}
                    textAlign="center"
                />
            </div>
            {/* <h2 className="fw-bold mb-5">Our Success Stories</h2> */}
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="success-box p-4 shadow-sm">
                        <h5>500+ Students Placed</h5>
                        <p>Our alumni are now working in MNCs like Infosys, TCS, Capgemini, and more.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="success-box p-4 shadow-sm">
                        <h5>95% Placement Record</h5>
                        <p>Get job ready with SAT Academy's intensive placement training programs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurSuccessStories;