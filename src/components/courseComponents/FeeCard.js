import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave } from "react-icons/fa";
import  courseCards  from "../dataComponents/courseCards"; // adjust path as needed
import "./FeeCard.css";


const FeeCard = ({ courseId }) => {
  // Find the course (e.g., Fullstack Developer)
  const fullstackCourse = courseCards.find(course => course.id === courseId);
  const fee = fullstackCourse?.fee;

  return (
    <motion.div
      className="fee-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
    >
      <FaMoneyBillWave className="fee-icon" />
      <h3>Course Fee</h3>

      {fee ? (
        <>
          <p className="original">Original: <span>{fee.amount}</span></p>
          <p className="discount">Now: <span>{fee.discount}</span></p>
          {fee.emiAvailable && <p className="emi">EMI Available</p>}
        </>
      ) : (
        <p>Fee details not available.</p>
      )}
    </motion.div>
  );
};

export default FeeCard;
