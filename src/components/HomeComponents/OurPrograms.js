
import React, { useRef } from 'react';
import courses from '../dataComponents/courseCards';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../Home.css'; // ⬅️ Add custom styles here
import MarqueeCourses from './MarqueeCourses';

const CourseCard = ({ title, image, description, onClick }) => (
  <div
    className="me-3 flex-shrink-0"
    style={{ width: '280px', cursor: 'pointer', height: '100%' }}
    onClick={onClick}
  >
    <div className="card h-100 shadow-sm rounded-4 overflow-hidden program-card">
      <img
        src={image || 'https://via.placeholder.com/280x160'}
        className="card-img-top"
        alt={title}
        style={{ height: '160px', objectFit: 'cover' }}
      />
      <div className="card-body text-center d-flex flex-column">
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text mb-0">
          <strong>Technologies:</strong> {description}
        </p>
      </div>
    </div>
  </div>
);

function OurPrograms() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/courses');
  };

  return (
    <div className="containerCourse">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-4"
      >
        <h2 className="fw-bold mb-5 fs-2">Our Programs</h2>
      </motion.div>






      {/* Swiper for desktop */}
      <div
        className="d-none d-md-block position-relative px-5"
        onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
      >
        <motion.button
          ref={prevRef}
          className="custom-swiper-arrow custom-swiper-arrow-left"
          whileHover={{ scale: 1.2 }}
        >
          <FiChevronLeft size={24} />
        </motion.button>
        <motion.button
          ref={nextRef}
          className="custom-swiper-arrow custom-swiper-arrow-right"
          whileHover={{ scale: 1.2 }}
        >
          <FiChevronRight size={24} />
        </motion.button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >


          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <CourseCard {...course} onClick={handleNavigate} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile view (stacked cards)
      <div className="d-md-none d-flex flex-column align-items-center gap-4 mobileView-ourProgr">
        {courses.slice(0, 7).map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + idx * 0.1 }}
            style={{ width: '90%', maxWidth: '320px' }}
          >
            <CourseCard {...course} onClick={handleNavigate} />
          </motion.div>
        ))}
      </div> */}
      {/* Mobile view (stacked cards) */}
      <div
        className="d-md-none d-flex flex-column justify-content-center align-items-center gap-4 mobileView-ourProgr"
        style={{ width: "100%", padding: "1rem 0" }}
      >
        {courses.slice(0, 7).map((course, idx) => (
          <motion.div
          className='mobileviewCard'
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + idx * 0.1 }}
           
          >
            <CourseCard {...course} onClick={handleNavigate} />
          </motion.div>
        ))}
      </div>
           {/* View All Courses Button */}
      <div className="text-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/courses')}
          className="btn View-btn-gradient px-4 py-2 rounded-3 fw-semibold"
        >
          View All Courses
        </motion.button>
      </div>

    </div>
  );
}

export default OurPrograms;