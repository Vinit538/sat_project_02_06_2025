// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   FaTachometerAlt, FaUserGraduate, FaEnvelope, FaClipboardList,
//   FaUsers, FaBars, FaTimes
// } from 'react-icons/fa';
// import './AdminSidebar.css';

// const AdminSidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const location = useLocation();

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const links = [
//     { path: '/admin', icon: <FaTachometerAlt />, label: 'Dashboard' },
//     { path: '/admin/ManageStudentPage', icon: <FaUserGraduate />, label: 'Students' },
//     { path: '/admin/MessagesPage', icon: <FaEnvelope />, label: 'Messages' },
//     { path: '/admin/ApplicationsPage', icon: <FaClipboardList />, label: 'Applications' },
//     { path: '/admin/HiringRequestsPage', icon: <FaUsers />, label: 'Hiring' },
//   ];

//   return (
//     <motion.div
//       className={`admin-sidebar ${isOpen ? 'open' : 'collapsed'}`}
//       initial={{ x: -250 }}
//       animate={{ x: isOpen ? 0 : -250 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="sidebar-header">
//         <span className="sidebar-logo">Admin</span>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       <ul className="sidebar-links">
//         {links.map(({ path, icon, label }) => (
//           <li key={path} className={location.pathname === path ? 'active' : ''}>
//             <Link to={path}>
//               {icon} <span>{label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button className="logout-btn">Logout</button>
//     </motion.div>
//   );
// };

// export default AdminSidebar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaTachometerAlt, FaUserGraduate, FaEnvelope, FaClipboardList,
    FaUsers, FaBars, FaTimes
} from 'react-icons/fa';
import './AdminSidebar.css';
import axiosInstance from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';


const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const links = [
        { path: '/admin', icon: <FaTachometerAlt />, label: 'Dashboard' },
        { path: '/admin/ManageStudentPage', icon: <FaUserGraduate />, label: 'Students' },
        { path: '/admin/MessagesPage', icon: <FaEnvelope />, label: 'Messages' },
        { path: '/admin/ApplicationsPage', icon: <FaClipboardList />, label: 'Applications' },
        { path: '/admin/HiringRequestsPage', icon: <FaUsers />, label: 'Hiring' },
    ];
    const handleLogout = async () => {
        try {
            await axiosInstance.post('/admin/logout', {}, { withCredentials: true });
            logout();
            navigate('/satLogin');
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };
    return (
        <>
            {/* Toggle Button (always visible on left edge) */}
            <button className="global-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar itself */}
            <motion.div
                className={`admin-sidebar ${isOpen ? 'open' : 'collapsed'}`}
                initial={false}
                animate={{ x: isOpen ? 0 : -250 }}
                transition={{ duration: 0.3 }}
            >
                <div className="sidebar-header">
                    <span className="sidebar-logo">Admin</span>
                </div>

                <ul className="sidebar-links">
                    {links.map(({ path, icon, label }) => (
                        <li key={path} className={location.pathname === path ? 'active' : ''}>
                            <Link to={path}>
                                {icon} <span>{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </motion.div>
        </>
    );
};

export default AdminSidebar;
