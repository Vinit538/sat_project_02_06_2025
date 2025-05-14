// import React from 'react';
// import '../Home.css';
// import SplitText from '../SplitText';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// // Sample student data
// const studentStories = [
//   {
//     name: "Anjali R.",
//     role: "Software Developer at Infosys",
//     feedback: "SAT Academy helped me go from beginner to a full-time developer in just 3 months.",
//     image: "/images/anjali.jpg"
//   },
//   {
//     name: "Praveen K.",
//     role: "Java Intern at TCS",
//     feedback: "The practical training and mentorship I received at SAT Academy were game-changers.",
//     image: "/images/praveen.jpg"
//   },
//   {
//     name: "Divya S.",
//     role: "Python Developer at Wipro",
//     feedback: "Live projects gave me real-world exposure. I’m grateful for the guidance from the faculty.",
//     image: "/images/divya.jpg"
//   },
//   {
//     name: "Rahul M.",
//     role: "Frontend Developer at Cognizant",
//     feedback: "The structured curriculum and career support were crucial in landing my first job.",
//     image: "/images/rahul.jpg"
//   },
//   {
//     name: "Sneha T.",
//     role: "Full Stack Intern at Capgemini",
//     feedback: "Mentorship and resume guidance from SAT Academy were top-notch. Thank you team!",
//     image: "/images/sneha.jpg"
//   },
//   {
//     name: "Vignesh P.",
//     role: "Cloud Trainee at Tech Mahindra",
//     feedback: "Trainers focused on real-time scenarios. The cloud module helped me get certified and placed.",
//     image: "/images/vignesh.jpg"
//   }
// ];

// function OurSuccessStories() {
//   return (
//     <div className="container py-5">
//       {/* Section Title */}
//       <div className="text-center mb-5">
//         <SplitText
//           text="Student Success Stories"
//           className="fw-bold fs-2"
//           delay={30}
//           animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
//           animationTo={{ opacity: 1, transform: 'translateY(0)' }}
//           textAlign="center"
//         />
//         <p className="text-muted mt-3">
//           Hear directly from our students how SAT Academy has helped them kickstart and shape their careers.
//         </p>
//       </div>

//       {/* Success Metrics */}
//       <div className="row text-center mb-5">
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 h-100">
//             <h3 className="fw-bold text-primary">500+</h3>
//             <p>Students Trained</p>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 h-100">
//             <h3 className="fw-bold text-success">95%</h3>
//             <p>Placement Success</p>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 h-100">
//             <h3 className="fw-bold text-warning">25+</h3>
//             <p>Hiring Partners</p>
//           </div>
//         </div>
//       </div>

//       {/* Student Testimonials Carousel */}
//       <div className="mb-5 d-flex justify-content-center position-relative">
//         {/* Left Arrow */}
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
//                     className="rounded-circle mb-3"
//                     style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                   />
//                   <h6 className="fw-bold">{story.name}</h6>
//                   <p className="text-muted small mb-1">{story.role}</p>
//                   <p className="small text-secondary fst-italic">"{story.feedback}"</p>
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
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-4">
//         <a href="#register" className="btn btn-primary btn-lg rounded-pill px-4">
//           Be Our Next Success Story
//         </a>
//       </div>
//     </div>
//   );
// }

// export default OurSuccessStories;

// with video swiper

// import React from 'react';
// import '../Home.css';
// import SplitText from '../SplitText';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// // Video testimonials
// const studentVideos = [
//   {
//     name: "Anjali R.",
//     company: "Infosys",
//     quote: "SAT Academy helped me go from beginner to a full-time developer in just 3 months.",
//     videoId: "dQw4w9WgXcQ"
//   },
//   {
//     name: "Praveen K.",
//     company: "TCS",
//     quote: "The practical training and mentorship I received were game-changers.",
//     videoId: "w7ejDZ8SWv8"
//   },
//   {
//     name: "Divya S.",
//     company: "Wipro",
//     quote: "Live projects gave me real-world exposure. Amazing experience!",
//     videoId: "ysz5S6PUM-U"
//   },
//   {
//     name: "Sneha T.",
//     company: "Capgemini",
//     quote: "SAT Academy’s mentorship helped me land my dream internship.",
//     videoId: "hY7m5jjJ9mM"
//   },
//   {
//     name: "Rahul M.",
//     company: "Cognizant",
//     quote: "Career support was excellent. I cracked my first tech job easily!",
//     videoId: "ZbZSe6N_BXs"
//   }
// ];

// function OurSuccessStories() {
//   return (
//     <div className="container py-5">
//       {/* Section Title */}
//       <div className="text-center mb-5">
//         <SplitText
//           text="Student Success Stories"
//           className="fw-bold fs-2"
//           delay={30}
//           animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
//           animationTo={{ opacity: 1, transform: 'translateY(0)' }}
//           textAlign="center"
//         />
//         <p className="text-muted mt-3">
//           Hear how SAT Academy changed the careers of our students through real projects and personalized guidance.
//         </p>
//       </div>

//       {/* Metrics */}
//       <div className="row text-center mb-5">
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 h-100">
//             <h3 className="fw-bold text-primary">500+</h3>
//             <p>Students Trained</p>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 h-100">
//             <h3 className="fw-bold text-success">95%</h3>
//             <p>Placement Success</p>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 h-100">
//             <h3 className="fw-bold text-warning">25+</h3>
//             <p>Hiring Partners</p>
//           </div>
//         </div>
//       </div>

//       {/* Swiper Video Testimonials */}
//       <div className="mb-5 d-flex justify-content-center position-relative">
//         {/* Arrows */}
//         <div className="swiper-nav-btn prev-btn position-absolute top-50 start-0 translate-middle-y z-3">
//           <button className="btn btn-outline-primary rounded-circle">
//             <i className="bi bi-chevron-left"></i>
//           </button>
//         </div>

//         <div style={{ maxWidth: '100%', width: '100%' }}>
//           <Swiper
//             modules={[Pagination, Navigation, Autoplay]}
//             loop={true}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//             navigation={{
//               prevEl: '.prev-btn',
//               nextEl: '.next-btn'
//             }}
//             pagination={{ clickable: true }}
//             speed={800}
//             spaceBetween={30}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {studentVideos.map((story, index) => (
//               <SwiperSlide key={index}>
//                 <div className="shadow-sm rounded-4 overflow-hidden bg-light h-100">
//                   <div className="ratio ratio-16x9">
//                     <iframe
//                       src={`https://www.youtube.com/embed/${story.videoId}`}
//                       title={`Video of ${story.name}`}
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                   <div className="p-3 text-center">
//                     <h6 className="fw-bold">{story.name} – {story.company}</h6>
//                     <p className="small text-muted fst-italic">“{story.quote}”</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="swiper-nav-btn next-btn position-absolute top-50 end-0 translate-middle-y z-3">
//           <button className="btn btn-outline-primary rounded-circle">
//             <i className="bi bi-chevron-right"></i>
//           </button>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-4">
//         <a href="#register" className="btn btn-primary btn-lg rounded-pill px-4">
//           Join Our Next Success Story
//         </a>
//       </div>
//     </div>
//   );
// }

// export default OurSuccessStories;


import React from 'react';
import '../Home.css';
import SplitText from '../SplitText';
import studentStories from '../dataComponents/studentStories';

import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function OurSuccessStories() {
  return (
    <div className="container py-5">
      {/* Title with motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-5"
      >
        <h2>Student Success Stories</h2>
        <p className="text-muted mt-3">
          Hear directly from our students how SAT Academy has helped them kickstart and shape their careers.
        </p>
      </motion.div>

      {/* Metrics */}
      <div className="row text-center mb-5">
        {[
          { count: "500+", label: "Students Trained", color: "primary" },
          { count: "95%", label: "Placement Success", color: "success" },
          { count: "25+", label: "Hiring Partners", color: "warning" }
        ].map((metric, i) => (
          <motion.div
            className="col-md-4 mb-4"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="p-4 shadow-sm rounded-3 h-100">
              <h3 className={`fw-bold text-${metric.color}`}>{metric.count}</h3>
              <p>{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Swiper with fade-in */}
      <motion.div
        className="mb-5 d-flex justify-content-center position-relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Navigation Arrows */}
        <div className="swiper-nav-btn prev-btn position-absolute top-50 start-0 translate-middle-y z-3">
          <button className="btn btn-outline-primary rounded-circle">
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>

        {/* Swiper */}
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            speed={600}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn'
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {studentStories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-sm rounded-4 p-4 bg-white text-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="rounded-circle mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <h6 className="fw-bold">{story.name}</h6>
                  <p className="text-muted small mb-1">{story.role}</p>
                  <p className="small text-secondary fst-italic">"{story.feedback}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        <div className="swiper-nav-btn next-btn position-absolute top-50 end-0 translate-middle-y z-3">
          <button className="btn btn-outline-primary rounded-circle">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-4">
        <a href="#formPage" className="btn btn-primary btn-lg rounded-pill px-4">
          Be Our Next Success Story
        </a>
      </div>
    </div>
  );
}

export default OurSuccessStories;
