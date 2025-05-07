import React, { useRef } from 'react';
import '../Home.css';
import SplitText from '../SplitText';
import courses from '../dataComponents/courseCards';

const CourseCard = ({ title, subCourses, image, technologies, duration, highlights }) => (
  <div className="card me-3 course-card" style={{ minWidth: '300px', maxWidth: '300px' }}>
    <img src={image || 'https://via.placeholder.com/300x180'} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {technologies?.length > 0 && (
        <>
          <h6 className='subHeading'>Technologies:</h6>
          <p className='card-text'>{technologies.join(', ')}</p>
        </>
      )}
    </div>
  </div>
);

function OurPrograms() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-light py-5 px-3">
      <div className="text-center mb-5">
        <SplitText
          text="Our Programs"
          className="fw-bold fs-2"
          delay={30}
          animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
          animationTo={{ opacity: 1, transform: 'translateY(0)' }}
          textAlign="center"
        />
      </div>

      {/* Desktop View */}
      <div className="d-none d-md-block position-relative">
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-2"
          onClick={() => scroll('left')}
        >
          ‹
        </button>
        <div
          ref={scrollRef}
          className="d-flex scroll-container pb-3 px-5"
        >
          {courses.map(course => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-2"
          onClick={() => scroll('right')}
        >
          ›
        </button>
      </div>

      {/* Mobile View */}
      <div className="d-md-none">
        <div className="row g-4">
          {courses.map(course => (
            <div className="col-12" key={course.id}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;

