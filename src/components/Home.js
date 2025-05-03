import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom styles
import Details from './Details';
import UserForm from './HomeComponents/UserForm';
import HeroTitle from './HeroTitle';
import WhySat from './HomeComponents/WhySat';
import OurPrograms from './HomeComponents/OurPrograms';
import OurSuccessStories from './HomeComponents/OurSuccessStories';

function Home() {
  return (
    <div className='mainbody'>
      {/* Hero Section */}
      <section className="hero-section d-flex justify-content-between">
        {/* <div className="container"> */}
        <div className="row">
          <HeroTitle />
          <div className="col-md-6 custom_registerBoxOuter ">
            <div className="card p-4 shadow-lg p-3 mb-5 bg-body rounded custom_registerBoxInner">
              <h3 className="mb-4 text-left">Register Now and Begin Your Learning Journey!</h3>
              <UserForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why SAT Academy Section */}
      <section className="why-section py-5">
        <WhySat />
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section py-5 bg-light">
       <OurPrograms />
      </section>

      {/* Placement/Success Stories Section */}
      <section className="placement-section py-5">
       <OurSuccessStories />
      </section>
      <Details />
    </div>
  );
}

export default Home;
