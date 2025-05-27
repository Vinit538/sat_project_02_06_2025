import React from 'react';
import { FaUserTie, FaChalkboardTeacher, FaUsersCog, FaLaptopCode, FaBug, FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const managementTeam = [
  {
    name: 'John Doe',
    role: 'Founder & Director',
    icon: <FaUserTie />,
  },
  {
    name: 'Priya Sharma',
    role: 'Managing Director',
    icon: <FaUserTie />,
  },
  {
    name: 'Rajesh Patel',
    role: 'Placement Officer',
    icon: <FaUserCheck />,
  },
  {
    name: 'Sneha Kapoor',
    role: 'Lead Full Stack Developer',
    icon: <FaLaptopCode />,
  },
  {
    name: 'Amit Verma',
    role: 'QA Head / Test Engineer Lead',
    icon: <FaBug />,
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Management Team</h2>
        <p className="text-lg text-gray-600 mb-12">Driving SAT Academy forward with passion and leadership.</p>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {managementTeam.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
          >
            <div className="text-5xl text-indigo-600 mb-4">{member.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
