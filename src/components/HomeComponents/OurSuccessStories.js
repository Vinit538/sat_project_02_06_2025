
// import React from 'react';
// import '../Home.css';
// import studentStories from '../dataComponents/studentStories';

// import { motion } from 'framer-motion';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// function OurSuccessStories() {
//   return (
//     <div className="successStoriescontainer">
//       {/* Title with motion */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-5"
//       >
//         <h2 className='fw-bold mb-5 fs-2 SS_Card_Heading'>Success Stories</h2>
//         <p className="SS_Card_text">
//           Hear directly from our students how SAT Academy has helped them kickstart and shape their careers.
//         </p>
//       </motion.div>

//       {/* Metrics */}
//       <div className="row text-center mb-5">
//         {[
//           { count: "500+", label: "Students Trained", color: "primary" },
//           { count: "95%", label: "Placement Success", color: "success" },
//           { count: "25+", label: "Hiring Partners", color: "warning" }
//         ].map((metric, i) => (
//           <motion.div
//             className="col-md-4 mb-4"
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//           >
//             <div className="p-4 shadow-sm rounded-3 h-100 SS_Sat_History">
//               <h3 className={`fw-bold text-${metric.color}`}>{metric.count}</h3>
//               <p>{metric.label}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Swiper with fade-in */}
//       <motion.div
//         className="mb-5 d-flex justify-content-center position-relative"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Navigation Arrows */}
//         <div className="swiper-nav-btn prev-btn position-absolute top-50 start-0 translate-middle-y z-3">
//           <button className="btn btn-outline-primary rounded-circle">
//             <i className="bi bi-chevron-left"></i>
//           </button>
//         </div>

//         {/* Swiper */}
//         <div style={{ maxWidth: '600px', width: '100%' }}>
//           <Swiper
//             modules={[Pagination, Navigation, Autoplay]}
//             slidesPerView={1}
//             spaceBetween={30}
//             speed={600}
//             loop={true}
//             pagination={{ clickable: true }}
//             navigation={{
//               prevEl: '.prev-btn',
//               nextEl: '.next-btn'
//             }}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//           >
//             {studentStories.map((story, index) => (
//               <SwiperSlide key={index}>
//                 <div className="shadow-sm rounded-4 p-4 bg-white text-center">
//                   <img
//                     src={story.image}
//                     alt={story.name}
//                     className="rounded-circle mb-3 studentStoryImg"
//                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
//                   />
//                   <h6 className="fw-bold SS_story_name">{story.name}</h6>
//                   <p className="text-muted small mb-1 SS_story_role">{story.role}</p>
//                   <p className="small text-secondary fst-italic SS_story_feedback">"{story.feedback}"</p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Right Arrow */}
//         <div className="swiper-nav-btn next-btn position-absolute top-50 end-0 translate-middle-y z-3">
//           <button className="btn btn-outline-primary rounded-circle">
//             <i className="bi bi-chevron-right"></i>
//           </button>
//         </div>
//       </motion.div>

//       {/* CTA */}
//       {/* <div className="text-center mt-4">
//         <a href="#formPage" className="btn btn-primary btn-lg rounded-pill px-4">
//           Be Our Next Success Story
//         </a>
//       </div> */}
//       <motion.div
//         className="text-center mt-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
//       >
//         <a href="#formPage" className="btn btn-primary btn-lg rounded-pill px-4">
//           Be Our Next Success Story
//         </a>
//       </motion.div>
//     </div>
//   );
// }

// export default OurSuccessStories;


import React from 'react';
import '../Home.css';
import studentStories from '../dataComponents/studentStories';

import { motion } from 'framer-motion';
import { FaUserGraduate, FaQuoteLeft, FaBriefcase } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function OurSuccessStories() {
  return (
    <div className="successStoriescontainer">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-5"
      >
        <h2 className='fw-bold mb-3 fs-2 SS_Card_Heading text-gradient'>Success Stories</h2>
        <p className="SS_Card_text text-fade">
          Hear directly from our students how SAT Academy has helped them kickstart and shape their careers.
        </p>
      </motion.div>

      {/* Metrics */}
      <div className="row text-center mb-5">
        {[
          { count: "500+", label: "Students Trained", color: "text-primary" },
          { count: "95%", label: "Placement Success", color: "text-success" },
          { count: "25+", label: "Hiring Partners", color: "text-warning" }
        ].map((metric, i) => (
          <motion.div
            className="col-md-4 mb-4"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="p-4 shadow rounded-4 h-100 metric-card hover-glow">
              <h3 className={`fw-bold ${metric.color}`}>{metric.count}</h3>
              <p className="text-muted">{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Swiper Section */}
      <motion.div
        className="mb-5 d-flex justify-content-center position-relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="swiper-nav-btn prev-btn position-absolute top-50 start-0 translate-middle-y z-3">
          <button className="btn btn-outline-primary rounded-circle">
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>

        <div style={{ maxWidth: '600px', width: '100%' }}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            speed={700}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {studentStories.map((story, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card-style text-center p-4 visual-card"
                >
                  <FaUserGraduate className="story-icon mb-2 text-info" size={40} />
                  <h5 className="story-name text-gradient">{story.name}</h5>
                  <p className="story-role text-muted">
                    <FaBriefcase className="me-2" />
                    {story.role}
                  </p>
                  <p className="story-feedback text-fade">
                    <FaQuoteLeft className="me-1 text-warning" />
                    {story.feedback}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper-nav-btn next-btn position-absolute top-50 end-0 translate-middle-y z-3">
          <button className="btn btn-outline-primary rounded-circle">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <a href="#formPage" className="btn btn-primary btn-lg rounded-pill px-4 glow-on-hover">
          Be Our Next Success Story
        </a>
      </motion.div>
    </div>
  );
}

export default OurSuccessStories;
