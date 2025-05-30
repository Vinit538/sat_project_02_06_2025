import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './adminDashboard.css';
const adminCards = [
  {
    title: "Manage Students",
    description: "View and manage student registrations and inquiries.",
    link: "/admin/ManageStudentPage",
    icon: "🧑‍🎓",
  },
  {
    title: "Messages",
    description: "View messages sent from the website's contact form.",
    link: "/admin/MessagesPage",
    icon: "💬",
  },
  {
    title: "Applications",
    description: "Review and process course applications submitted by students.",
    link: "/admin/ApplicationsPage",
    icon: "📥",
  },
  {
    title: "Hiring Requests",
    description: "Manage internship and job collaboration requests from HRs.",
    link: "/admin/HiringRequestsPage",
    icon: "📨",
  },
];

export default function AdminDashboard() {
  return (
   <div className="admin_page">
     <motion.div
      className="container py-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-4 text-center text-3xl fw-bold">SAT Academy Admin Panel</h2>
      <div className="row">
        {adminCards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card shadow h-100 border-0 rounded-3">
                <div className="card-body">
                  <div className="display-4 mb-3">{card.icon}</div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text text-muted">{card.description}</p>
                  <Link to={card.link} className="btn btn-primary mt-2">
                    Go to {card.title}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
   </div>
  );
}
