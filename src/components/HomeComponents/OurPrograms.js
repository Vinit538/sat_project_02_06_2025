// import React, { useRef } from 'react';
// import '../Home.css';
// import SplitText from '../SplitText';
// import courses from '../dataComponents/courseCards';
// import { motion } from 'framer-motion';

// const CourseCard = ({ title, image, technologies }) => (
//   <motion.div
//     className="me-3 flex-shrink-0"
//     style={{
//       width: '280px',
//       scrollSnapAlign: 'start',
//     }}
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, ease: 'easeOut' }}
//   >
//     <div className="card h-100 shadow-sm rounded-4 overflow-hidden" style={{ minHeight: '100%' }}>
//       <img
//         src={image || 'https://via.placeholder.com/280x160'}
//         className="card-img-top"
//         alt={title}
//         style={{ height: '160px', objectFit: 'cover' }}
//       />
//       <div className="card-body text-center d-flex flex-column justify-content-between" style={{ minHeight: '140px' }}>
//         <h5 className="card-title fw-semibold mb-2">{title}</h5>
//         {technologies?.length > 0 && (
//           <p className="card-text text-muted small mb-0">
//             <strong>Technologies:</strong> {technologies.join(', ')}
//           </p>
//         )}
//       </div>
//     </div>
//   </motion.div>
// );

// function OurPrograms() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const scrollAmount = 300;
//     scrollRef.current.scrollBy({
//       left: direction === 'left' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="containerCourse py-5"> 

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-5"
//       >
//       {/* Marquee of course names  py-5*/}
//       <div className="overflow-hidden mb-4">
//         <div className="d-flex align-items-center gap-3 marquee-track">
//           {[...courses, ...courses].map((course, idx) => (
//             <span key={`${course.id}-${idx}`} className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1">
//               {course.title}
//             </span>
//           ))}
//         </div>
//       </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-5"
//       >
//         <h2 className='fw-bold fs-2'>Our Programs</h2>
//       </motion.div>

//       {/* Horizontal scroll for md and above */}
//       <div className="d-none d-md-block position-relative">
//         <button
//           className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-2"
//           onClick={() => scroll('left')}
//         >
//           ‹
//         </button>
//         <div
//           ref={scrollRef}
//           className="d-flex overflow-auto pb-3 px-5 hide-scrollbar"
//           style={{ scrollSnapType: 'x mandatory' }}
//         >
//           {courses.map(course => (
//             <CourseCard key={course.id} {...course} />
//           ))}
//         </div>
//         <button
//           className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-2"
//           onClick={() => scroll('right')}
//         >
//           ›
//         </button>
//       </div>

//       {/* Stacked animated layout for tablets and below */}
//       <div className="d-md-none d-flex flex-column align-items-center gap-4">
//         {courses.slice(0, 7).map((course, idx) => (
//           <motion.div
//             key={course.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 + idx * 0.1, ease: 'easeOut' }}
//             style={{ width: '90%', maxWidth: '320px' }}
//           >
//             <CourseCard {...course} />
//           </motion.div>
//         ))}
//       </div>
//       <div className="overflow-hidden mb-4">
//         <div className="d-flex align-items-center gap-3 marquee-track">
//           {[...courses, ...courses].map((course, idx) => (
//             <span key={`${course.id}-${idx}`} className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1">
//               {course.title}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurPrograms;


// import React, { useRef } from 'react';
// import '../Home.css';
// import courses from '../dataComponents/courseCards';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const CourseCard = ({ title, image, technologies }) => (
//   <div className="me-3 flex-shrink-0" style={{ width: '280px' }}>
//     <div className="card h-100 shadow-sm rounded-4 overflow-hidden" style={{ minHeight: '100%' }}>
//       <img
//         src={image || 'https://via.placeholder.com/280x160'}
//         className="card-img-top"
//         alt={title}
//         style={{ height: '160px', objectFit: 'cover' }}
//       />
//       <div className="card-body text-center d-flex flex-column justify-content-between" style={{ minHeight: '140px' }}>
//         <h5 className="card-title fw-semibold mb-2">{title}</h5>
//         {technologies?.length > 0 && (
//           <p className="card-text text-muted small mb-0">
//             <strong>Technologies:</strong> {technologies.join(', ')}
//           </p>
//         )}
//       </div>
//     </div>
//   </div>
// );

// function OurPrograms() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperContainerRef = useRef(null);

//   return (
//     <div className="containerCourse py-5">

//       {/* Top marquee */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-5"
//       >
//         <div className="overflow-hidden mb-4">
//           <div className="d-flex align-items-center gap-3 marquee-track">
//             {[...courses, ...courses].map((course, idx) => (
//               <span key={`${course.id}-${idx}`} className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1">
//                 {course.title}
//               </span>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-5"
//       >
//         <h2 className="fw-bold fs-2">Our Programs</h2>
//       </motion.div>

//       {/* Swiper for md and above */}
//       <div className="d-none d-md-block position-relative px-5" ref={swiperContainerRef}
//         onMouseEnter={() => swiperContainerRef.current?.swiper?.autoplay?.stop()}
//         onMouseLeave={() => swiperContainerRef.current?.swiper?.autoplay?.start()}
//       >
//         {/* Custom animated arrows */}
//         <motion.button
//           ref={prevRef}
//           className="custom-swiper-arrow custom-swiper-arrow-left"
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           ‹
//         </motion.button>
//         <motion.button
//           ref={nextRef}
//           className="custom-swiper-arrow custom-swiper-arrow-right"
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           ›
//         </motion.button>

//         <Swiper
//           ref={swiperContainerRef}
//           modules={[Navigation, Autoplay]}
//           spaceBetween={50}
//           slidesPerView={3}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           breakpoints={{
//             768: { slidesPerView: 2.5 },
//             992: { slidesPerView: 3 },
//             1200: { slidesPerView: 3.5 },
//           }}
//         >
//           {courses.map(course => (
//             <SwiperSlide key={course.id}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, ease: 'easeOut' }}
//               >
//                 <CourseCard {...course} />
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Stacked layout for mobile */}
//       <div className="d-md-none d-flex flex-column align-items-center gap-4">
//         {courses.slice(0, 7).map((course, idx) => (
//           <motion.div
//             key={course.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 + idx * 0.1, ease: 'easeOut' }}
//             style={{ width: '90%', maxWidth: '320px' }}
//           >
//             <CourseCard {...course} />
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom marquee */}
//       <div className="overflow-hidden mb-4">
//         <div className="d-flex align-items-center gap-3 marquee-track">
//           {[...courses, ...courses].map((course, idx) => (
//             <span key={`${course.id}-${idx}`} className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1">
//               {course.title}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurPrograms;

import React, { useRef } from 'react';
import '../Home.css';
import courses from '../dataComponents/courseCards';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CourseCard = ({ title, image, technologies }) => (
  <div className="me-3 flex-shrink-0" style={{ width: '280px' }}>
    <div className="card h-100 shadow-sm rounded-4 overflow-hidden" style={{ minHeight: '100%' }}>
      <img
        src={image || 'https://via.placeholder.com/280x160'}
        className="card-img-top"
        alt={title}
        style={{ height: '160px', objectFit: 'cover' }}
      />
      <div className="card-body text-center d-flex flex-column justify-content-between" style={{ minHeight: '140px' }}>
        <h5 className="card-title fw-semibold mb-2">{title}</h5>
        {technologies?.length > 0 && (
          <p className="card-text text-muted small mb-0">
            <strong>Technologies:</strong> {technologies.join(', ')}
          </p>
        )}
      </div>
    </div>
  </div>
);

function OurPrograms() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperContainerRef = useRef(null);

  return (
    <div className="containerCourse py-5">
      {/* Top marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-5"
      >
        <div className="overflow-hidden mb-4">
          <div className="d-flex align-items-center gap-3 marquee-track">
            {[...courses, ...courses].map((course, idx) => (
              <span key={`${course.id}-${idx}`} className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1">
                {course.title}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-5"
      >
        <h2 className="fw-bold fs-2">Our Programs</h2>
      </motion.div>

      {/* Swiper for md and above */}
      <div
        className="d-none d-md-block position-relative px-5"
        onMouseEnter={() => swiperContainerRef.current?.swiper?.autoplay?.stop()}
        onMouseLeave={() => swiperContainerRef.current?.swiper?.autoplay?.start()}
      >
        {/* Navigation Buttons */}
        <motion.button
          ref={prevRef}
          className="custom-swiper-arrow custom-swiper-arrow-left"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronLeft size={24} />
        </motion.button>

        <motion.button
          ref={nextRef}
          className="custom-swiper-arrow custom-swiper-arrow-right"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronRight size={24} />
        </motion.button>

        <Swiper
          ref={swiperContainerRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3.5, spaceBetween: 40 },
          }}
        >
          {courses.map(course => (
            <SwiperSlide key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <CourseCard {...course} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile view */}
      <div className="d-md-none d-flex flex-column align-items-center gap-4">
        {courses.slice(0, 7).map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + idx * 0.1, ease: 'easeOut' }}
            style={{ width: '90%', maxWidth: '320px' }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </div>

      {/* Bottom marquee */}
      <div className="overflow-hidden mb-4">
        <div className="d-flex align-items-center gap-3 marquee-track">
          {[...courses, ...courses].map((course, idx) => (
            <span key={`${course.id}-${idx}`} className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1">
              {course.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrograms;
