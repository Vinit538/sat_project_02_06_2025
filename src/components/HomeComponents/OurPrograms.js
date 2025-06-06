
// // import React, { useRef } from 'react';
// // import courses from '../dataComponents/courseCards';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// // import '../Home.css'; // ⬅️ Add custom styles here
// // import MarqueeCourses from './MarqueeCourses';

// // const CourseCard = ({ title, image, description, onClick }) => (
// //   <div
// //     className="me-3 flex-shrink-0"
// //     style={{ width: '280px', cursor: 'pointer', height: '100%' }}
// //     onClick={onClick}
// //   >
// //     <div className="card h-100 shadow-sm rounded-4 overflow-hidden program-card">
// //       <img
// //         src={image || 'https://via.placeholder.com/280x160'}
// //         className="card-img-top"
// //         alt={title}
// //         style={{ height: '160px', objectFit: 'cover' }}
// //       />
// //       <div className="card-body text-center d-flex flex-column">
// //         <h5 className="card-title mb-2">{title}</h5>
// //         <p className="card-text mb-0">
// //           <strong>Technologies:</strong> {description}
// //         </p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // function OurPrograms() {
// //   const prevRef = useRef(null);
// //   const nextRef = useRef(null);
// //   const swiperRef = useRef(null);
// //   const navigate = useNavigate();

// //   const handleNavigate = () => {
// //     navigate('/courses');
// //   };

// //   return (
// //     <div className="containerCourse">
// //       {/* Title */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7, ease: 'easeOut' }}
// //         className="text-center mb-4"
// //       >
// //         <h2 className="fw-bold mb-5 fs-2">Our Programs</h2>
// //       </motion.div>






// //       {/* Swiper for desktop */}
// //       <div
// //         className="d-none d-md-block position-relative px-5"
// //         onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
// //         onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
// //       >
// //         <motion.button
// //           ref={prevRef}
// //           className="custom-swiper-arrow custom-swiper-arrow-left"
// //           whileHover={{ scale: 1.2 }}
// //         >
// //           <FiChevronLeft size={24} />
// //         </motion.button>
// //         <motion.button
// //           ref={nextRef}
// //           className="custom-swiper-arrow custom-swiper-arrow-right"
// //           whileHover={{ scale: 1.2 }}
// //         >
// //           <FiChevronRight size={24} />
// //         </motion.button>
// //         <Swiper
// //           ref={swiperRef}
// //           modules={[Navigation, Autoplay]}
// //           spaceBetween={20}
// //           loop={true}
// //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// //           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// //           breakpoints={{
// //             320: { slidesPerView: 1 },
// //             576: { slidesPerView: 2 },
// //             768: { slidesPerView: 2 },
// //             992: { slidesPerView: 3 },
// //             1200: { slidesPerView: 4 },
// //           }}
// //           onInit={(swiper) => {
// //             swiper.params.navigation.prevEl = prevRef.current;
// //             swiper.params.navigation.nextEl = nextRef.current;
// //             swiper.navigation.init();
// //             swiper.navigation.update();
// //           }}
// //         >


// //           {courses.map((course) => (
// //             <SwiperSlide key={course.id}>
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5 }}
// //                 style={{ height: '100%' }}
// //               >
// //                 <CourseCard {...course} onClick={handleNavigate} />
// //               </motion.div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>

// //       {/* Mobile view (stacked cards)
// //       <div className="d-md-none d-flex flex-column align-items-center gap-4 mobileView-ourProgr">
// //         {courses.slice(0, 7).map((course, idx) => (
// //           <motion.div
// //             key={course.id}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 + idx * 0.1 }}
// //             style={{ width: '90%', maxWidth: '320px' }}
// //           >
// //             <CourseCard {...course} onClick={handleNavigate} />
// //           </motion.div>
// //         ))}
// //       </div> */}
// //       {/* Mobile view (stacked cards) */}
// //       <div
// //         className="d-md-none d-flex flex-column justify-content-center align-items-center gap-4 mobileView-ourProgr"
// //         style={{ width: "100%", padding: "1rem 0" }}
// //       >
// //         {courses.slice(0, 7).map((course, idx) => (
// //           <motion.div
// //           className='mobileviewCard'
// //             key={course.id}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 + idx * 0.1 }}

// //           >
// //             <CourseCard {...course} onClick={handleNavigate} />
// //           </motion.div>
// //         ))}
// //       </div>
// //            {/* View All Courses Button */}
// //       <div className="text-center mt-4">
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/courses')}
// //           className="btn View-btn-gradient px-4 py-2 rounded-3 fw-semibold"
// //         >
// //           View All Courses
// //         </motion.button>
// //       </div>

// //     </div>
// //   );
// // }

// // export default OurPrograms;


// // import React, { useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// // import '../Home.css';

// // const CourseCard = ({ title, image, description, onClick }) => (
// //   <div
// //     className="me-3 flex-shrink-0"
// //     style={{ width: '280px', cursor: 'pointer', height: '100%' }}
// //     onClick={onClick}
// //   >
// //     <div className="card h-100 shadow-sm rounded-4 overflow-hidden program-card">
// //       <img
// //         src={image || 'https://via.placeholder.com/280x160'}
// //         className="card-img-top"
// //         alt={title}
// //         style={{ height: '160px', objectFit: 'cover' }}
// //       />
// //       <div className="card-body text-center d-flex flex-column">
// //         <h5 className="card-title mb-2">{title}</h5>
// //         <p className="card-text mb-0">
// //           <strong>Technologies:</strong> {description}
// //         </p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const BatchCard = ({ courseName, startDate, mode, seatsLeft }) => (
// //   <div className="me-3 flex-shrink-0" style={{ width: "280px", height: "100%" }}>
// //     <div className="card h-100 shadow-sm rounded-4 overflow-hidden batch-card">
// //       <div className="card-body d-flex flex-column justify-content-between text-center p-3">
// //         <h5 className="fw-bold mb-2">{courseName}</h5>
// //         <p className="mb-1"><strong>Start:</strong> {startDate}</p>
// //         <p className="mb-1"><strong>Mode:</strong> {mode}</p>
// //         <p className="mb-3">
// //           <strong>Seats Left:</strong>{" "}
// //           <span className={seatsLeft === 0 ? "text-danger" : "text-success fw-semibold"}>
// //             {seatsLeft}
// //           </span>
// //         </p>
// //         <button
// //           className={`btn rounded-pill fw-semibold ${
// //             seatsLeft > 0 ? "btn-primary" : "btn-secondary disabled"
// //           }`}
// //           disabled={seatsLeft === 0}
// //         >
// //           {seatsLeft > 0 ? "Enroll Now" : "Batch Full"}
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // );

// // function OurPrograms({ courses, batches }) {
// //   const prevRef = useRef(null);
// //   const nextRef = useRef(null);
// //   const swiperRef = useRef(null);
// //   const navigate = useNavigate();

// //   const handleNavigate = () => {
// //     navigate('/courses');
// //   };

// //   return (
// //     <div className="containerCourse">
// //       {/* Title */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7 }}
// //         className="text-center mb-4"
// //       >
// //         <h2 className="fw-bold mb-5 fs-2">Our Programs</h2>
// //       </motion.div>

// //       {/* Swiper for Courses (Desktop) */}
// //       <div
// //         className="d-none d-md-block position-relative px-5"
// //         onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
// //         onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
// //       >
// //         <motion.button
// //           ref={prevRef}
// //           className="custom-swiper-arrow custom-swiper-arrow-left"
// //           whileHover={{ scale: 1.2 }}
// //         >
// //           <FiChevronLeft size={24} />
// //         </motion.button>
// //         <motion.button
// //           ref={nextRef}
// //           className="custom-swiper-arrow custom-swiper-arrow-right"
// //           whileHover={{ scale: 1.2 }}
// //         >
// //           <FiChevronRight size={24} />
// //         </motion.button>

// //         <Swiper
// //           ref={swiperRef}
// //           modules={[Navigation, Autoplay]}
// //           spaceBetween={20}
// //           loop={true}
// //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// //           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// //           breakpoints={{
// //             320: { slidesPerView: 1 },
// //             576: { slidesPerView: 2 },
// //             768: { slidesPerView: 2 },
// //             992: { slidesPerView: 3 },
// //             1200: { slidesPerView: 4 },
// //           }}
// //           onInit={(swiper) => {
// //             swiper.params.navigation.prevEl = prevRef.current;
// //             swiper.params.navigation.nextEl = nextRef.current;
// //             swiper.navigation.init();
// //             swiper.navigation.update();
// //           }}
// //         >
// //           {courses.map((course) => (
// //             <SwiperSlide key={course.id}>
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5 }}
// //                 style={{ height: '100%' }}
// //               >
// //                 <CourseCard {...course} onClick={handleNavigate} />
// //               </motion.div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>

// //       {/* Courses on Mobile */}
// //       <div className="d-md-none d-flex flex-column align-items-center gap-4 mobileView-ourProgr" style={{ width: "100%", padding: "1rem 0" }}>
// //         {courses.slice(0, 7).map((course, idx) => (
// //           <motion.div
// //             className='mobileviewCard'
// //             key={course.id}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 + idx * 0.1 }}
// //           >
// //             <CourseCard {...course} onClick={handleNavigate} />
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* View All Courses Button */}
// //       <div className="text-center mt-4">
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/courses')}
// //           className="btn View-btn-gradient px-4 py-2 rounded-3 fw-semibold"
// //         >
// //           View All Courses
// //         </motion.button>
// //       </div>

// //       {/* ─── New Batch Availability ─── */}
// //       {batches && batches.length > 0 && (
// //         <>
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="text-center my-5"
// //           >
// //             <h2 className="fw-bold fs-2 text-primary">New Batch Availability</h2>
// //           </motion.div>

// //           <div className="d-none d-md-block px-5">
// //             <Swiper
// //               modules={[Navigation, Autoplay]}
// //               spaceBetween={20}
// //               loop={true}
// //               autoplay={{ delay: 4000, disableOnInteraction: false }}
// //               breakpoints={{
// //                 320: { slidesPerView: 1 },
// //                 576: { slidesPerView: 2 },
// //                 768: { slidesPerView: 2 },
// //                 992: { slidesPerView: 3 },
// //                 1200: { slidesPerView: 4 },
// //               }}
// //             >
// //               {batches.map((batch, index) => (
// //                 <SwiperSlide key={index}>
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 30 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ duration: 0.5 }}
// //                     style={{ height: "100%" }}
// //                   >
// //                     <BatchCard {...batch} />
// //                   </motion.div>
// //                 </SwiperSlide>
// //               ))}
// //             </Swiper>
// //           </div>

// //           {/* Batches on Mobile */}
// //           <div className="d-md-none d-flex flex-column align-items-center gap-4 mt-4">
// //             {batches.map((batch, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.4 + idx * 0.1 }}
// //                 style={{ maxWidth: "320px", width: "100%" }}
// //               >
// //                 <BatchCard {...batch} />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default OurPrograms;


// // // // OurPrograms.jsx
// // // import React, { useRef } from 'react';
// // // import courses from '../dataComponents/courseCards';
// // // import batches from '../dataComponents/batches';
// // // import { motion } from 'framer-motion';
// // // import { useNavigate } from 'react-router-dom';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Navigation, Autoplay } from 'swiper/modules';
// // // import 'swiper/css';
// // // import 'swiper/css/navigation';
// // // import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// // // import '../Home.css';

// // // const CourseCard = ({ title, image, description, onClick, batchInfo }) => (
// // //   <div
// // //     className="me-3 flex-shrink-0"
// // //     style={{ width: '280px', cursor: 'pointer', height: '100%' }}
// // //     onClick={onClick}
// // //   >
// // //     <div className="card h-100 shadow-sm rounded-4 overflow-hidden program-card">
// // //       <img
// // //         src={image || 'https://via.placeholder.com/280x160'}
// // //         className="card-img-top"
// // //         alt={title}
// // //         style={{ height: '160px', objectFit: 'cover' }}
// // //       />
// // //       <div className="card-body text-center d-flex flex-column justify-content-between">
// // //         <h5 className="card-title mb-2">{title}</h5>
// // //         <p className="card-text mb-1">
// // //           <strong>Technologies:</strong> {description}
// // //         </p>
// // //         {batchInfo ? (
// // //           <div className="mt-2">
// // //             <p className="mb-1"><strong>Start:</strong> {batchInfo.startDate}</p>
// // //             <p className="mb-1"><strong>Mode:</strong> {batchInfo.mode}</p>
// // //             <p className={`mb-0 ${batchInfo.seatsLeft === 0 ? 'text-danger' : 'text-success'}`}>
// // //               <strong>Seats:</strong> {batchInfo.seatsLeft === 0 ? 'Full' : `${batchInfo.seatsLeft} left`}
// // //             </p>
// // //           </div>
// // //         ) : (
// // //           <p className="text-muted mt-2">Next batch coming soon</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // function OurPrograms() {
// // //   const prevRef = useRef(null);
// // //   const nextRef = useRef(null);
// // //   const swiperRef = useRef(null);
// // //   const navigate = useNavigate();

// // //   const handleNavigate = () => {
// // //     navigate('/courses');
// // //   };

// // //   return (
// // //     <div className="containerCourse">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 30 }}
// // //         whileInView={{ opacity: 1, y: 0 }}
// // //         viewport={{ once: true }}
// // //         transition={{ duration: 0.7, ease: 'easeOut' }}
// // //         className="text-center mb-4"
// // //       >
// // //         <h2 className="fw-bold mb-5 fs-2">Our Programs</h2>
// // //       </motion.div>

// // //       <div
// // //         className="d-none d-md-block position-relative px-5"
// // //         onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
// // //         onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
// // //       >
// // //         <motion.button
// // //           ref={prevRef}
// // //           className="custom-swiper-arrow custom-swiper-arrow-left"
// // //           whileHover={{ scale: 1.2 }}
// // //         >
// // //           <FiChevronLeft size={24} />
// // //         </motion.button>
// // //         <motion.button
// // //           ref={nextRef}
// // //           className="custom-swiper-arrow custom-swiper-arrow-right"
// // //           whileHover={{ scale: 1.2 }}
// // //         >
// // //           <FiChevronRight size={24} />
// // //         </motion.button>
// // //         <Swiper
// // //           ref={swiperRef}
// // //           modules={[Navigation, Autoplay]}
// // //           spaceBetween={20}
// // //           loop={true}
// // //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// // //           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// // //           breakpoints={{
// // //             320: { slidesPerView: 1 },
// // //             576: { slidesPerView: 2 },
// // //             768: { slidesPerView: 2 },
// // //             992: { slidesPerView: 3 },
// // //             1200: { slidesPerView: 4 },
// // //           }}
// // //           onInit={(swiper) => {
// // //             swiper.params.navigation.prevEl = prevRef.current;
// // //             swiper.params.navigation.nextEl = nextRef.current;
// // //             swiper.navigation.init();
// // //             swiper.navigation.update();
// // //           }}
// // //         >
// // //           {courses.map((course) => {
// // //             const batchInfo = batches.find(
// // //               (batch) => batch.courseName === course.title
// // //             );
// // //             return (
// // //               <SwiperSlide key={course.id}>
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 30 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ duration: 0.5 }}
// // //                   style={{ height: '100%' }}
// // //                 >
// // //                   <CourseCard
// // //                     {...course}
// // //                     batchInfo={batchInfo}
// // //                     onClick={handleNavigate}
// // //                   />
// // //                 </motion.div>
// // //               </SwiperSlide>
// // //             );
// // //           })}
// // //         </Swiper>
// // //       </div>

// // //       <div
// // //         className="d-md-none d-flex flex-column justify-content-center align-items-center gap-4 mobileView-ourProgr"
// // //         style={{ width: '100%', padding: '1rem 0' }}
// // //       >
// // //         {courses.slice(0, 7).map((course, idx) => {
// // //           const batchInfo = batches.find(
// // //             (batch) => batch.courseName === course.title
// // //           );
// // //           return (
// // //             <motion.div
// // //               className='mobileviewCard'
// // //               key={course.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.5 + idx * 0.1 }}
// // //             >
// // //               <CourseCard
// // //                 {...course}
// // //                 batchInfo={batchInfo}
// // //                 onClick={handleNavigate}
// // //               />
// // //             </motion.div>
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="text-center mt-4">
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           onClick={() => navigate('/courses')}
// // //           className="btn View-btn-gradient px-4 py-2 rounded-3 fw-semibold"
// // //         >
// // //           View All Courses
// // //         </motion.button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default OurPrograms;


// // import React, { useRef } from 'react';
// // import courses from '../dataComponents/courseCards';
// // import batches from '../dataComponents/batches';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Autoplay } from 'swiper/modules';
// // import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import '../Home.css';

// // const CourseCard = ({ title, image, description, batch, onClick }) => (
// //   <div
// //     className="me-3 flex-shrink-0"
// //     style={{ width: '280px', cursor: 'pointer', height: '100%' }}
// //     onClick={onClick}
// //   >
// //     <div className="card h-100 shadow-sm rounded-4 overflow-hidden program-card">
// //       <img
// //         src={image || 'https://via.placeholder.com/280x160'}
// //         className="card-img-top"
// //         alt={title}
// //         style={{ height: '160px', objectFit: 'cover' }}
// //       />
// //       <div className="card-body text-center d-flex flex-column">
// //         <h5 className="card-title mb-2">{title}</h5>
// //         <p className="card-text mb-2">
// //           <strong>Technologies:</strong> {description}
// //         </p>

// //         {/* Batch Info with Color Tags */}
// //         {batch ? (
// //           <div className="text-start mt-2 small">
// //             <p className="mb-1">
// //               <strong>Start:</strong> {batch.startDate}
// //             </p>
// //             <p className="mb-1">
// //               <strong>Mode:</strong>{' '}
// //               <span className={`badge ${batch.mode === 'Online' ? 'bg-primary' : 'bg-success'}`}>
// //                 {batch.mode}
// //               </span>
// //             </p>
// //             <p className="mb-0">
// //               <strong>Seats:</strong>{' '}
// //               <span className={`badge ${batch.seatsLeft > 0 ? 'bg-warning text-dark' : 'bg-danger'}`}>
// //                 {batch.seatsLeft > 0 ? `${batch.seatsLeft} left` : 'Full'}
// //               </span>
// //             </p>
// //           </div>
// //         ) : (
// //           <p className="text-muted small mt-2">No upcoming batch info</p>
// //         )}
// //       </div>
// //     </div>
// //   </div>
// // );

// // function OurPrograms() {
// //   const prevRef = useRef(null);
// //   const nextRef = useRef(null);
// //   const swiperRef = useRef(null);
// //   const navigate = useNavigate();

// //   const handleNavigate = () => navigate('/courses');

// //   return (
// //     <div className="containerCourse">
// //       {/* Title */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7, ease: 'easeOut' }}
// //         className="text-center mb-4"
// //       >
// //         <h2 className="fw-bold mb-5 fs-2">Our Programs</h2>
// //       </motion.div>

// //       {/* Swiper for Desktop */}
// //       <div
// //         className="d-none d-md-block position-relative px-5"
// //         onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
// //         onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
// //       >
// //         <motion.button
// //           ref={prevRef}
// //           className="custom-swiper-arrow custom-swiper-arrow-left"
// //           whileHover={{ scale: 1.2 }}
// //         >
// //           <FiChevronLeft size={24} />
// //         </motion.button>
// //         <motion.button
// //           ref={nextRef}
// //           className="custom-swiper-arrow custom-swiper-arrow-right"
// //           whileHover={{ scale: 1.2 }}
// //         >
// //           <FiChevronRight size={24} />
// //         </motion.button>

// //         <Swiper
// //           ref={swiperRef}
// //           modules={[Navigation, Autoplay]}
// //           spaceBetween={20}
// //           loop={true}
// //           autoplay={{ delay: 3000, disableOnInteraction: false }}
// //           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// //           breakpoints={{
// //             320: { slidesPerView: 1 },
// //             576: { slidesPerView: 2 },
// //             768: { slidesPerView: 2 },
// //             992: { slidesPerView: 3 },
// //             1200: { slidesPerView: 4 },
// //           }}
// //           onInit={(swiper) => {
// //             swiper.params.navigation.prevEl = prevRef.current;
// //             swiper.params.navigation.nextEl = nextRef.current;
// //             swiper.navigation.init();
// //             swiper.navigation.update();
// //           }}
// //         >
// //           {courses.map((course) => {
// //             // const batch = batches.find(b => b.courseName === course.title);
// //             const batch = batches.find(
// //               (b) => b.courseName.trim().toLowerCase() === course.title.trim().toLowerCase()
// //             );

// //             return (
// //               <SwiperSlide key={course.id}>
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.5 }}
// //                   style={{ height: '100%' }}
// //                 >
// //                   <CourseCard {...course} batch={batch} onClick={handleNavigate} />
// //                 </motion.div>
// //               </SwiperSlide>
// //             );
// //           })}
// //         </Swiper>
// //       </div>

// //       {/* Mobile View */}
// //       <div
// //         className="d-md-none d-flex flex-column justify-content-center align-items-center gap-4 mobileView-ourProgr"
// //         style={{ width: "100%", padding: "1rem 0" }}
// //       >
// //         {courses.slice(0, 7).map((course, idx) => {
// //           const batch = batches.find(b => b.courseName === course.title);
// //           return (
// //             <motion.div
// //               className="mobileviewCard"
// //               key={course.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5 + idx * 0.1 }}
// //             >
// //               <CourseCard {...course} batch={batch} onClick={handleNavigate} />
// //             </motion.div>
// //           );
// //         })}
// //       </div>

// //       {/* View All Button */}
// //       <div className="text-center mt-4">
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/courses')}
// //           className="btn View-btn-gradient px-4 py-2 rounded-3 fw-semibold"
// //         >
// //           View All Courses
// //         </motion.button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OurPrograms;

// import React, { useRef } from 'react';
// import courses from '../dataComponents/courseCards';
// import batches from '../dataComponents/batches';
// import { motion } from 'framer-motion';
// import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import '../Home.css';

// const CourseCard = ({ title, image, description, batch, onClick }) => {
//   const now = moment();
//   const start = moment(batch?.startDate, 'YYYY-MM-DD');
//   const daysLeft = start.diff(now, 'days');

//   return (
//     <div
//       className="me-3 flex-shrink-0"
//       style={{ width: '280px', cursor: 'pointer', height: '100%' }}
//       onClick={onClick}
//     >
//       <div className="card h-100 shadow-sm rounded-4 overflow-hidden program-card d-flex flex-column justify-content-between">
//         <img
//           src={image || 'https://via.placeholder.com/280x160'}
//           className="card-img-top"
//           alt={title}
//           style={{ height: '160px', objectFit: 'cover' }}
//         />
//         <div className="card-body text-center d-flex flex-column">
//           <h5 className="card-title mb-2">{title}</h5>
//           <p className="card-text mb-2">
//             <strong>Technologies:</strong> {description}
//           </p>

//           {batch ? (
//             <motion.div
//               className="text-start mt-2 small"
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <p className="mb-1">
//                 <strong>Start:</strong> {batch.startDate}
//               </p>

//               <p className="mb-1">
//                 <strong>Mode:</strong>{' '}
//                 <motion.span
//                   className={`badge ${batch.mode === 'Online' ? 'bg-primary' : 'bg-success'}`}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {batch.mode}
//                 </motion.span>
//               </p>

//               <p className="mb-1">
//                 <strong>Seats:</strong>{' '}
//                 <motion.span
//                   className={`badge ${batch.seatsLeft > 0 ? 'bg-warning text-dark' : 'bg-danger'}`}
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ repeat: Infinity, duration: 1.5 }}
//                 >
//                   {batch.seatsLeft > 0 ? `${batch.seatsLeft} left` : 'Full'}
//                 </motion.span>
//               </p>

//               {daysLeft >= 0 && (
//                 <motion.div
//                   className="mt-2 text-muted fw-semibold"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   ⏳ Starts in {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
//                 </motion.div>
//               )}

//               {batch.seatsLeft > 0 && (
//                 <motion.button
//                   className="btn btn-sm btn-outline-primary mt-3 w-100"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     alert(`Enroll for ${title}`);
//                   }}
//                 >
//                   Enroll Now
//                 </motion.button>
//               )}
//             </motion.div>
//           ) : (
//             <p className="text-muted small mt-2">No upcoming batch info</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// function OurPrograms() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef(null);
//   const navigate = useNavigate();

//   const handleNavigate = () => navigate('/courses');

//   return (
//     <div className="containerCourse">
//       {/* Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-4"
//       >
//         <h2 className="fw-bold mb-5 fs-2">Our Programs</h2>
//       </motion.div>

//       {/* Swiper for Desktop */}
//       <div
//         className="d-none d-md-block position-relative px-5"
//         onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
//         onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
//       >
//         <motion.button
//           ref={prevRef}
//           className="custom-swiper-arrow custom-swiper-arrow-left"
//           whileHover={{ scale: 1.2 }}
//         >
//           <FiChevronLeft size={24} />
//         </motion.button>
//         <motion.button
//           ref={nextRef}
//           className="custom-swiper-arrow custom-swiper-arrow-right"
//           whileHover={{ scale: 1.2 }}
//         >
//           <FiChevronRight size={24} />
//         </motion.button>

//         <Swiper
//           ref={swiperRef}
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 2 },
//             992: { slidesPerView: 3 },
//             1200: { slidesPerView: 4 },
//           }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >
//           {courses.map((course) => {
//             const batch = batches.find(
//               (b) => b.courseName.trim().toLowerCase() === course.title.trim().toLowerCase()
//             );

//             return (
//               <SwiperSlide key={course.id} style={{ height: '100%' }}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   style={{ height: '100%' }}
//                 >
//                   <CourseCard {...course} batch={batch} onClick={handleNavigate} />
//                 </motion.div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>

//       {/* Mobile View */}
//       <div
//         className="d-md-none d-flex flex-column justify-content-center align-items-center gap-4 mobileView-ourProgr"
//         style={{ width: '100%', padding: '1rem 0' }}
//       >
//         {courses.slice(0, 7).map((course, idx) => {
//           const batch = batches.find(
//             (b) => b.courseName.trim().toLowerCase() === course.title.trim().toLowerCase()
//           );

//           return (
//             <motion.div
//               className="mobileviewCard"
//               key={course.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 + idx * 0.1 }}
//             >
//               <CourseCard {...course} batch={batch} onClick={handleNavigate} />
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* View All Button */}
//       <div className="text-center mt-4">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate('/courses')}
//           className="btn View-btn-gradient px-4 py-2 rounded-3 fw-semibold"
//         >
//           View All Courses
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// export default OurPrograms;

import React, { useRef } from 'react';
import courses from '../dataComponents/courseCards';
import batches from '../dataComponents/batches';
import { motion } from 'framer-motion';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Home.css';

const CourseCard = ({ title, image, description, batch, onClick }) => {
  // Safe parsing start date with fallback to null
  const now = moment();
  const start = moment(batch?.startDate); // ✅ fix
  const daysLeft = start.isValid() ? start.diff(now, 'days') : null;

  return (
    <div
      className="me-3 flex-shrink-0"
      style={{ width: '280px', cursor: 'pointer', height: '100%' }}
      onClick={onClick}
    >
      <div
        className="card h-100 shadow-sm rounded-4 overflow-hidden program-card d-flex flex-column"
        style={{ minHeight: '430px' }} // Fixed min height to equalize cards
      >
        <img
          src={image || 'https://via.placeholder.com/280x160'}
          className="card-img-top"
          alt={title}
          style={{ height: '160px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column justify-content-between courseCardSat">
          <div>
            <h5 className="card-title mb-2 text-center">{title}</h5>
            <p className="card-text mb-2">
              <strong>Technologies:</strong> {description}
            </p>

            {batch ? (
              <motion.div
                className="text-start mt-2 small"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-1">
                  <strong>Start:</strong> {batch.startDate || 'N/A'}
                </p>

                <p className="mb-1">
                  <strong>Mode:</strong>{' '}
                  <motion.span
                    className={`badge ${batch.mode === 'Online' ? 'bg-primary' : 'bg-success'
                      }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {batch.mode || 'N/A'}
                  </motion.span>
                </p>

                <p className="mb-1">
                  <strong>Seats:</strong>{' '}
                  <motion.span
                    className={`badge ${batch.seatsLeft > 0 ? 'bg-warning text-dark' : 'bg-danger'
                      }`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {batch.seatsLeft > 0 ? `${batch.seatsLeft} left` : 'Full'}
                  </motion.span>
                </p>



                {daysLeft !== null && daysLeft >= 0 && (
                  <motion.div
                    className="mt-2 text-muted fw-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    ⏳ Starts in {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
                  </motion.div>
                )}

              </motion.div>
            ) : (
              <p className="text-muted small mt-2">No upcoming batch info</p>
            )}
          </div>
                {batch?.seatsLeft > 0 && (
            <motion.a
              href="#formPage"
              className="btn btn-sm btn-outline-primary mt-3 w-100 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              Enroll Now
            </motion.a>
          )}

        </div>
      </div>
    </div>
  );
};

function OurPrograms() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = () => navigate('/courses');

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

      {/* Swiper for Desktop */}
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
          {courses.map((course) => {
            const batch = batches.find(
              (b) => b.courseName.trim().toLowerCase() === course.title.trim().toLowerCase()
            );

            return (
              <SwiperSlide key={course.id} style={{ height: '100%' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <CourseCard {...course} batch={batch} onClick={handleNavigate} />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Mobile View */}
      <div
        className="d-md-none d-flex flex-column justify-content-center align-items-center gap-4 mobileView-ourProgr"
        style={{ width: '100%', padding: '1rem 0' }}
      >
        {courses.slice(0, 7).map((course, idx) => {
          const batch = batches.find(
            (b) => b.courseName.trim().toLowerCase() === course.title.trim().toLowerCase()
          );

          return (
            <motion.div
              className="mobileviewCard"
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + idx * 0.1 }}
            >
              <CourseCard {...course} batch={batch} onClick={handleNavigate} />
            </motion.div>
          );
        })}
      </div>

      {/* View All Button */}
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
