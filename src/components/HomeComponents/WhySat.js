import React from 'react';
import '../Home.css';
import SplitText from '../SplitText'; // Update path if needed

function WhySat() {
  return (
    <div className="container text-center">
   <div className='py-5'>
   <SplitText
        text="Why Choose SAT Academy?"
        className="fw-bold mb-5 fs-2"
        delay={30}
        animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
        animationTo={{ opacity: 1, transform: 'translateY(0)' }}
        textAlign="center"   
      />
   </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Expert Trainers</h5>
              <p className="card-text">Learn from certified trainers with real-world experience and in-depth knowledge.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Guaranteed Placements</h5>
              <p className="card-text">We prepare you for top companies with interview training and placement drives.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Hands-on Projects</h5>
              <p className="card-text">Practical sessions, mini-projects, and real assignments to boost your skills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySat;
