import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom styles
import Details from './Details';
import UserForm from './HomeComponents/UserForm';
import HeroTitle from './HomeComponents/HeroTitle';
import WhySat from './HomeComponents/WhySat';
import OurPrograms from './HomeComponents/OurPrograms';
import OurSuccessStories from './HomeComponents/OurSuccessStories';
import MarqueeCourses from './HomeComponents/MarqueeCourses';


function Home() {
  return (
    <div className='mainbody'>
      {/* Hero Section */}
      <section className="hero-section d-flex justify-content-between" id='formPage'>
        {/* <div className="container"> */}
        <div className="row">
          <HeroTitle />
          <div className="col-md-6 custom_registerBoxOuter ">
            <div className="card shadow-lg bg-body rounded custom_registerBoxInner">
              <h3 className="mb-4 text-left fromHeadingText">Register Now and Begin Your Learning Journey!</h3>
              <UserForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why SAT Academy Section */}
      <section className="why-section">
        <WhySat />
      </section>

      <section className='marquee-section'>
        <MarqueeCourses />
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section">
        <OurPrograms />
      </section>
      
      {/* <section>
        <BatchAvailability batches={batches} /> 
      </section> */}
      {/* Placement/Success Stories Section */}
      <section className="placement-section">
        <OurSuccessStories />
      </section>
      <Details />
    </div>
  );
}

export default Home;
