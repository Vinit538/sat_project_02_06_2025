import React from "react";
import './Home.css'

function HeroTitle(){
    return(
        <div className="col-md-6 intro_Div">
                    <h1 className="display-3 fw-bold introDivHeading">Empower Your Future with<br/> <span className='introDivCompanyText'>SAT Academy</span> </h1>
                    <p className="lead mt-3 introDivText">Launch your career in tech! Learn Full Stack, DevOps, and CAD from real-world experts and get placement-ready with personalized support.</p>
                    {/* <Link className='introExplorebutton' to=''>Explore Courses</Link>
                      <a href="#courses" className="btn btn-primary btn-lg mt-4">Explore Courses</a> */}
        </div>
    )
}

export default HeroTitle;