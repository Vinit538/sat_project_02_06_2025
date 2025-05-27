
import React from 'react';
import courses from '../dataComponents/courseCards';
import './MarqueeCourses.css';
import {
  FaLaptopCode,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaBrain,
  FaDraftingCompass,
  FaNetworkWired,
  FaHeadset,
  FaBullhorn,
  FaServer
} from 'react-icons/fa';

const iconMap = {
  "FULLSTACK DEVELOPER": <FaLaptopCode />,
  "DATA ENGINEERING": <FaChartLine />,
  "DATA ANALYST": <FaChartLine />,
  "DATABASE ADMINISTRATION": <FaDatabase />,
  "CAD DESIGNING": <FaDraftingCompass />,
  "ARTIFICIAL INTELLIGENCE": <FaBrain />,
  "SAP": <FaNetworkWired />,
  "IT SERVICE DESK MANAGER": <FaHeadset />,
  "DIGITAL MARKETING": <FaBullhorn />,
  "MAINFRAME TECHNOLOGIES": <FaServer />
};

const colors = [
  '#4f46e5', '#16a34a', '#eab308', '#db2777', '#0ea5e9',
  '#f97316', '#9333ea', '#10b981', '#f59e0b', '#3b82f6'
];

function MarqueeCourses() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {courses.concat(courses).map((course, idx) => (
          <div
            key={`${course.id}-${idx}`}
            className="marquee-item"
            style={{
              color: colors[idx % colors.length],
            }}
          >
            <span className="icon">{iconMap[course.title] || <FaCogs />}</span>
            <span>{course.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeCourses;
