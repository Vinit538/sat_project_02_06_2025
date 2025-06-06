// // // // import React from 'react';
// // // // import { FaUserTie, FaChalkboardTeacher, FaUsersCog, FaLaptopCode, FaBug, FaUserCheck } from 'react-icons/fa';
// // // // import { motion } from 'framer-motion';

// // // // const managementTeam = [
// // // //   {
// // // //     name: 'John Doe',
// // // //     role: 'Founder & Director',
// // // //     icon: <FaUserTie />,
// // // //   },
// // // //   {
// // // //     name: 'Priya Sharma',
// // // //     role: 'Managing Director',
// // // //     icon: <FaUserTie />,
// // // //   },
// // // //   {
// // // //     name: 'Rajesh Patel',
// // // //     role: 'Placement Officer',
// // // //     icon: <FaUserCheck />,
// // // //   },
// // // //   {
// // // //     name: 'Sneha Kapoor',
// // // //     role: 'Lead Full Stack Developer',
// // // //     icon: <FaLaptopCode />,
// // // //   },
// // // //   {
// // // //     name: 'Amit Verma',
// // // //     role: 'QA Head / Test Engineer Lead',
// // // //     icon: <FaBug />,
// // // //   },
// // // // ];

// // // // const TeamPage = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 50 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         className="text-center"
// // // //       >
// // // //         <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Management Team</h2>
// // // //         <p className="text-lg text-gray-600 mb-12">Driving SAT Academy forward with passion and leadership.</p>
// // // //       </motion.div>

// // // //       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
// // // //         {managementTeam.map((member, idx) => (
// // // //           <motion.div
// // // //             key={idx}
// // // //             whileHover={{ scale: 1.05 }}
// // // //             className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
// // // //           >
// // // //             <div className="text-5xl text-indigo-600 mb-4">{member.icon}</div>
// // // //             <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
// // // //             <p className="text-sm text-gray-500 mt-2">{member.role}</p>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TeamPage;
// // // import React from 'react';
// // // import { FaUserTie, FaChalkboardTeacher, FaUsersCog, FaLaptopCode, FaBug, FaUserCheck } from 'react-icons/fa';
// // // import { motion } from 'framer-motion';
// // // import './TeamPage.css';

// // // const managementTeam = [
// // //   {
// // //     name: 'John Doe',
// // //     role: 'Founder & Director',
// // //     icon: <FaUserTie />,
// // //     description: 'Visionary behind SAT Academy, responsible for strategic leadership and innovation.'
// // //   },
// // //   {
// // //     name: 'Priya Sharma',
// // //     role: 'Managing Director',
// // //     icon: <FaUserTie />,
// // //     description: 'Coordinates departments and ensures smooth operations of the academy.'
// // //   },
// // //   {
// // //     name: 'Rajesh Patel',
// // //     role: 'Placement Officer',
// // //     icon: <FaUserCheck />,
// // //     description: 'Connects students with top hiring partners and manages placement activities.'
// // //   },
// // //   {
// // //     name: 'Sneha Kapoor',
// // //     role: 'Lead Full Stack Developer',
// // //     icon: <FaLaptopCode />,
// // //     description: 'Leads technical curriculum design and supports student coding success.'
// // //   },
// // //   {
// // //     name: 'Amit Verma',
// // //     role: 'QA Head / Test Engineer Lead',
// // //     icon: <FaBug />,
// // //     description: 'Ensures top-notch testing curriculum and real-world QA simulations.'
// // //   }
// // // ];

// // // const TeamPage = () => {
// // //   return (
// // //     <div className="satteam-container">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //         className="text-center satteam-header"
// // //       >
// // //         <h2 className="satteam-title">Meet Our Management Team</h2>
// // //         <p className="satteam-subtitle">Driving SAT Academy forward with passion and leadership.</p>
// // //       </motion.div>

// // //       <div className="satteam-grid">
// // //         {managementTeam.map((member, idx) => (
// // //           <motion.div
// // //             key={idx}
// // //             whileHover={{ scale: 1.05 }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 + idx * 0.1 }}
// // //             className={`satteam-card satteam-card-${idx % 5}`}
// // //           >
// // //             <div className="satteam-icon">{member.icon}</div>
// // //             <h3 className="satteam-name">{member.name}</h3>
// // //             <p className="satteam-role">{member.role}</p>
// // //             <p className="satteam-desc">{member.description}</p>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TeamPage;



// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import './TeamPage.css';

// // // const teamData = [
// // //   {
// // //     name: 'John Doe',
// // //     role: 'Founder & Director',
// // //     image: '/images/founder.jpg',
// // //     level: 'director'
// // //   },
// // //   {
// // //     name: 'Anita Roy',
// // //     role: 'Co-Founder',
// // //     image: '/images/cofounder.jpg',
// // //     level: 'executive'
// // //   },
// // //   {
// // //     name: 'Priya Sharma',
// // //     role: 'Managing Director',
// // //     image: '/images/md.jpg',
// // //     level: 'executive'
// // //   },
// // //   {
// // //     name: 'Rahul Nair',
// // //     role: 'Chief Executive Officer (CEO)',
// // //     image: '/images/ceo.jpg',
// // //     level: 'executive'
// // //   },
// // //   {
// // //     name: 'Sneha Mehra',
// // //     role: 'Chief Operations Officer (COO)',
// // //     image: '/images/coo.jpg',
// // //     level: 'senior'
// // //   },
// // //   {
// // //     name: 'Rakesh Yadav',
// // //     role: 'Program Head / Academic Director',
// // //     image: '/images/programhead.jpg',
// // //     level: 'senior'
// // //   },
// // //   {
// // //     name: 'Nisha Kulkarni',
// // //     role: 'Training Manager',
// // //     image: '/images/training.jpg',
// // //     level: 'mid'
// // //   },
// // //   {
// // //     name: 'Rajesh Patel',
// // //     role: 'Placement Officer',
// // //     image: '/images/placement.jpg',
// // //     level: 'mid'
// // //   },
// // //   {
// // //     name: 'Akhil Reddy',
// // //     role: 'Technical Architect (FSD)',
// // //     image: '/images/fsd.jpg',
// // //     level: 'junior'
// // //   },
// // //   {
// // //     name: 'Kavya Bansal',
// // //     role: 'Technical Architect (QA/Test)',
// // //     image: '/images/qa.jpg',
// // //     level: 'junior'
// // //   }
// // // ];

// // // const TeamPage = () => {
// // //   return (
// // //     <div className="satteamtree-container">
// // //       <h2 className="satteamtree-title">Our Leadership Tree</h2>
// // //       <div className="satteamtree-wrapper">
// // //         {['director', 'executive', 'senior', 'mid', 'junior'].map((level, i) => (
// // //           <div className={`satteamtree-level satteamtree-level-${level}`} key={level}>
// // //             {teamData.filter(member => member.level === level).map((member, idx) => (
// // //               <motion.div
// // //                 className={`satteamtree-card satteamtree-${level}`}
// // //                 whileHover={{ scale: 1.05 }}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: idx * 0.1 }}
// // //                 key={member.name}
// // //               >
// // //                 <img src={member.image} alt={member.name} className="satteamtree-img" />
// // //                 <h3 className="satteamtree-name">{member.name}</h3>
// // //                 <p className="satteamtree-role">{member.role}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TeamPage;


// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
// // // import './TeamPage.css';

// // // const teamData = [
// // //   {
// // //     name: 'Thambu',
// // //     role: 'Founder & Director',
// // //     image: '/images/Thambu.jpg',
// // //     level: 'director'
// // //   },
// // //   {
// // //     name: 'Anita Roy',
// // //     role: 'Co-Founder',
// // //     image: '/images/cofounder.jpg',
// // //     level: 'executive'
// // //   },
// // //   {
// // //     name: 'Priya Sharma',
// // //     role: 'Managing Director',
// // //     image: '/images/md.jpg',
// // //     level: 'executive'
// // //   },
// // //   {
// // //     name: 'Rahul Nair',
// // //     role: 'Chief Executive Officer (CEO)',
// // //     image: '/images/ceo.jpg',
// // //     level: 'executive'
// // //   },
// // //   {
// // //     name: 'Sneha Mehra',
// // //     role: 'Chief Operations Officer (COO)',
// // //     image: '/images/coo.jpg',
// // //     level: 'senior'
// // //   },
// // //   {
// // //     name: 'Rakesh Yadav',
// // //     role: 'Program Head / Academic Director',
// // //     image: '/images/programhead.jpg',
// // //     level: 'senior'
// // //   },
// // //   {
// // //     name: 'Nisha Kulkarni',
// // //     role: 'Training Manager',
// // //     image: '/images/training.jpg',
// // //     level: 'mid'
// // //   },
// // //   {
// // //     name: 'Rajesh Patel',
// // //     role: 'Placement Officer',
// // //     image: '/images/placement.jpg',
// // //     level: 'mid'
// // //   },
// // //   {
// // //     name: 'Akhil Reddy',
// // //     role: 'Technical Architect (FSD)',
// // //     image: '/images/fsd.jpg',
// // //     level: 'junior'
// // //   },
// // //   {
// // //     name: 'Kavya Bansal',
// // //     role: 'Technical Architect (QA/Test)',
// // //     image: '/images/qa.jpg',
// // //     level: 'junior'
// // //   }
// // // ];

// // // const TeamPage = () => {
// // //   return (
// // //     <div className="satteamtree-container">
// // //       <h2 className="satteamtree-title">Our Leadership Tree</h2>
// // //       <div className="satteamtree-wrapper">
// // //         {['director', 'executive', 'senior', 'mid', 'junior'].map((level, i) => (
// // //           <div className={`satteamtree-level satteamtree-level-${level}`} key={level}>
// // //             {teamData.filter(member => member.level === level).map((member, idx) => (
// // //               <motion.div
// // //                 className={`satteamtree-card satteamtree-${level}`}
// // //                 whileHover={{ scale: 1.05, rotate: 1 }}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: idx * 0.1 }}
// // //                 key={member.name}
// // //               >
// // //                 <div className="satteamtree-img-wrapper">
// // //                   <img src={member.image} alt={member.name} className="satteamtree-img" />
// // //                 </div>
// // //                 <h3 className="satteamtree-name">{member.name}</h3>
// // //                 <p className="satteamtree-role">{member.role}</p>
// // //                 <div className="satteamtree-socials">
// // //                   <a href="#" className="satteamtree-social-icon"><FaLinkedin /></a>
// // //                   <a href="#" className="satteamtree-social-icon"><FaTwitter /></a>
// // //                   <a href="#" className="satteamtree-social-icon"><FaEnvelope /></a>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TeamPage;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FaLinkedin, FaTwitter, FaEnvelope,FaUserTie,FaFacebookF, FaGithub, FaInstagram, } from 'react-icons/fa';
// // import './TeamPage.css';

// // const levels = ['director', 'executive', 'senior', 'mid', 'junior'];

// // const TeamPage = () => {
// //   return (
// //     <div className="satteamtree-container">
// //       <h2 className="satteamtree-title">Our Leadership Tree</h2>
// //       <div className="satteamtree-wrapper">
// //         {levels.map((level) => (
// //           <div className={`satteamtree-level satteamtree-level-${level}`} key={level}>
// //             {teamData
// //               .filter(member => member.level === level)
// //               .map((member, idx) => (
// //                 <motion.div
// //                   className={`satteamtree-card satteamtree-${level}`}
// //                   whileHover={{ scale: 1.05 }}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   key={member.name}
// //                 >
// //                   <img src={member.image} alt={member.name} className="satteamtree-img-rect" />
// //                   <h3 className="satteamtree-name">{member.name}</h3>
// //                   <p className="satteamtree-role">{member.role}</p>
// //                   <p className="satteamtree-desc">{member.description}</p>
// //                   <div className="satteamtree-socials">
// //                     <a href="#" className="satteamtree-social-icon"><FaLinkedin />{member.linkedin}</a>
// //                     <a href="#" className="satteamtree-social-icon"><FaTwitter />{member.twitter}</a>
// //                     <a href="#" className="satteamtree-social-icon"><FaEnvelope />{member.gmail}</a>
// //                     <a href="#" className="satteamtree-social-icon"><FaUserTie />{member.portfolio}</a>
// //                     <a href="#" className="satteamtree-social-icon"><FaFacebookF />{member.facebook}</a>
// //                     <a href="#" className="satteamtree-social-icon"><FaInstagram />{member.instagram}</a>
// //                     <a href="#" className="satteamtree-social-icon"><FaGithub/>{member.github}</a>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TeamPage;

// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaLinkedin, FaTwitter, FaEnvelope,
//   FaUserTie, FaFacebookF, FaGithub, FaInstagram
// } from 'react-icons/fa';
// import './TeamPage.css';
// import member from '../dataComponents/member';

// const levels = ['director', 'executive', 'senior', 'mid', 'junior'];

// const TeamPage = () => {
//   return (
//     <div className="satteamtree-container">
//       <h2 className="satteamtree-title">Our Leadership Tree</h2>
//       <div className="satteamtree-wrapper">
//         {levels.map((level) => (
//           <div className={`satteamtree-level satteamtree-level-${level}`} key={level}>
//             {member
//               .filter(member => member.level === level)
//               .map((member, idx) => (
//                 <motion.div
//                   className={`satteamtree-card satteamtree-${level}`}
//                   whileHover={{ scale: 1.05 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   key={member.id}
//                 >
//                   <img src={member.image} alt={member.name} className="satteamtree-img-rect" />
//                   <h3 className="satteamtree-name">{member.name}</h3>
//                   <p className="satteamtree-role">{member.role}</p>
//                   <p className="satteamtree-desc">{member.description}</p>
//                   <div className="satteamtree-socials">
//                     {member.linkedin && (
//                       <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="satteamtree-social-icon">
//                         <FaLinkedin />
//                       </a>
//                     )}
//                     {member.twitter && (
//                       <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="satteamtree-social-icon">
//                         <FaTwitter />
//                       </a>
//                     )}
//                     {member.gmail && (
//                       <a href={`mailto:${member.gmail}`} className="satteamtree-social-icon">
//                         <FaEnvelope />
//                       </a>
//                     )}
//                     {member.portfolio && (
//                       <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="satteamtree-social-icon">
//                         <FaUserTie />
//                       </a>
//                     )}
//                     {member.facebook && (
//                       <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="satteamtree-social-icon">
//                         <FaFacebookF />
//                       </a>
//                     )}
//                     {member.instagram && (
//                       <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="satteamtree-social-icon">
//                         <FaInstagram />
//                       </a>
//                     )}
//                     {member.github && (
//                       <a href={member.github} target="_blank" rel="noopener noreferrer" className="satteamtree-social-icon">
//                         <FaGithub />
//                       </a>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

// TeamPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin, FaTwitter, FaEnvelope,
  FaUserTie, FaFacebookF, FaGithub, FaInstagram
} from 'react-icons/fa';
import './TeamPage.css';
import member from '../dataComponents/member';

const levels = ['director', 'executive', 'senior', 'mid', 'junior'];

const TeamPage = () => {
  return (
  <div className='teamPage'>
      <div className="team-container">
      <h2 className="team-title">Our Leadership Tree</h2>
      <div className="team-wrapper">
        {levels.map((level) => (
          <div className={`team-level team-level-${level}`} key={level}>
            {member
              .filter(member => member.level === level)
              .map((member, idx) => (
                <motion.div
                  className={`team-card team-${level}`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={member.id}
                >
                  <div className="team-card-glow"></div>
                  <div className="team-img-wrapper">
                    <img src={member.image} alt={member.name} className="team-img" />
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-desc">{member.description}</p>
                  <div className="team-socials">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-icon">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="team-social-icon">
                        <FaTwitter />
                      </a>
                    )}
                    {member.gmail && (
                      <a href={`mailto:${member.gmail}`} className="team-social-icon">
                        <FaEnvelope />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="team-social-icon">
                        <FaUserTie />
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="team-social-icon">
                        <FaFacebookF />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="team-social-icon">
                        <FaInstagram />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-social-icon">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default TeamPage;
