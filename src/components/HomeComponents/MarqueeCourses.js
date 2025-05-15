import React from 'react';
import courses from '../dataComponents/courseCards';
import './MarqueeCourses.css';
import { FaLaptopCode, FaDatabase, FaChartLine, FaCogs, FaBrain, FaDraftingCompass, FaNetworkWired } from 'react-icons/fa';

const iconMap = {
  "FULLSTACK DEVELOPER": <FaLaptopCode />,
  "DATA ENGINEERING": <FaChartLine />,
  "DATA ANALYST": <FaChartLine />,
  "DATABASE ADMINISTRATION": <FaDatabase />,
  "CAD DESIGNING": <FaDraftingCompass />,
  "ARTIFICIAL INTELLIGENCE": <FaBrain />,
  "SAP": <FaNetworkWired />,
};

const colors = ['#4f46e5', '#16a34a', '#eab308', '#db2777', '#0ea5e9', '#f97316', '#9333ea'];

function MarqueeCourses() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {courses.concat(courses).map((course, idx) => (
          <div
            key={`${course.id}-${idx}`}
            className="marquee-item"
            style={{
              // borderImage: `linear-gradient(45deg, ${colors[idx % colors.length]}, ${colors[(idx + 1) % colors.length]}) 1`,
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
