import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { motion } from 'framer-motion';
import axios from 'axios';
import base_url from '../api/bootapi';
import 'react-toastify/dist/ReactToastify.css';
import '../Home.css';

function UserForm() {
    const [newUserData, setNewUserData] = useState({
        userName: '',
        userEmail: '',
        userPhoneNo: '',
        userQualification: '',
        userLanguage: '',
        userCity: '',
        userSelectedTech: '',
        userReferralId: ''
    });

    const [validationStatus, setValidationStatus] = useState({
        userName: null,
        userEmail: null,
        userPhoneNo: null,
        userCity: null,
        userSelectedTech: null,
    });

    const validateField = (name, value) => {
        let isValid = false;
        switch (name) {
            case "userName":
            case "userCity":
                isValid = /^[A-Za-z ]+$/.test(value);
                break;
            case "userEmail":
                isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/i.test(value);
                break;
            case "userPhoneNo":
                isValid = /^[0-9]{10}$/.test(value);
                break;
            case "userSelectedTech":
                isValid = value.trim() !== '';
                break;
            default:
                isValid = true;
        }
        setValidationStatus((prev) => ({ ...prev, [name]: isValid }));
    };

    const newUserInputChange = (e) => {
        const { name, value } = e.target;
        setNewUserData({ ...newUserData, [name]: value });
        validateField(name, value);
    };

    const handleNewUserSubmit = (event) => {
        event.preventDefault();
        const allValid = Object.values(validationStatus).every((status) => status === true);
        const requiredFieldsFilled = Object.values(newUserData).every((field, index) => {
            if (Object.keys(newUserData)[index] === 'userReferralId') return true; // optional
            return field.trim() !== '';
        });

        if (!allValid || !requiredFieldsFilled) {
            toast.error("Please fill all fields correctly before submitting.");
            return;
        }

        postDataServer();
        setNewUserData({
            userName: '',
            userEmail: '',
            userPhoneNo: '',
            userQualification: '',
            userLanguage: '',
            userCity: '',
            userSelectedTech: '',
            userReferralId: ''
        });
        setValidationStatus({
            userName: null,
            userEmail: null,
            userPhoneNo: null,
            userCity: null,
            userSelectedTech: null
        });
    };

    async function postDataServer() {
        try {
            await axios.post(`${base_url}/submissions`, newUserData);
            toast.success("Registration successful!");
        } catch (error) {
            toast.error("Something went wrong!");
        }
    }

    const motionInputProps = {
        whileFocus: { scale: 1.02 },
        whileHover: { scale: 1.01 },
        transition: { type: "spring", stiffness: 150, damping: 10 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className='from_div'
        >
            <ToastContainer position="top-right" autoClose={4000} transition={Bounce} />
            <motion.form
                className='form_box'
                onSubmit={handleNewUserSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {/* Input Fields */}
                {[{ label: 'Name', name: 'userName', type: 'text' },
                  { label: 'Email', name: 'userEmail', type: 'email' },
                  { label: 'Phone No', name: 'userPhoneNo', type: 'tel' },
                  { label: 'City', name: 'userCity', type: 'text' }].map(({ label, name, type }) => (
                    <motion.div className="mb-3 position-relative" key={name} {...motionInputProps}>
                        <input
                            className={`form-control input-colored ${
                                validationStatus[name] === null
                                    ? ''
                                    : validationStatus[name]
                                    ? 'is-valid'
                                    : 'is-invalid'
                            }`}
                            type={type}
                            name={name}
                            placeholder={label}
                            autoComplete="off"
                            value={newUserData[name]}
                            onChange={newUserInputChange}
                            required
                        />
                        {validationStatus[name] === false && (
                            <div className="invalid-feedback d-block">Please enter a valid {label}</div>
                        )}
                    </motion.div>
                ))}

                {/* Dropdown Fields */}
                <motion.div className="row" {...motionInputProps}>
                    <div className="col-md-6 mb-3">
                        <select
                            className="form-select input-colored"
                            name="userQualification"
                            value={newUserData.userQualification}
                            onChange={newUserInputChange}
                            required
                        >
                            <option value="">Select Qualification</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Post Graduation">Post Graduation</option>
                            <option value="Diploma/PUC">Diploma/PUC</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <select
                            className="form-select input-colored"
                            name="userLanguage"
                            value={newUserData.userLanguage}
                            onChange={newUserInputChange}
                            required
                        >
                            <option value="">Select Language</option>
                            <option value="Kannada">Kannada</option>
                            <option value="English">English</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </motion.div>

                {/* Technology Dropdown */}
                <motion.div className="mb-3" {...motionInputProps}>
                    <label className="text-muted h6">Which Technology Path Will You Choose to Launch Your Career?</label>
                    <select
                        className={`form-select input-colored ${
                            validationStatus.userSelectedTech === null
                                ? ''
                                : validationStatus.userSelectedTech
                                ? 'is-valid'
                                : 'is-invalid'
                        }`}
                        name="userSelectedTech"
                        value={newUserData.userSelectedTech}
                        onChange={(e) => {
                            newUserInputChange(e);
                            validateField('userSelectedTech', e.target.value);
                        }}
                        required
                    >
                        <option value="">Select Technology Path</option>
                        <option value="Data Engneering">Data Engineering</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Data Administration">Data Administration</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="SAP">SAP</option>
                        <option value="CAD">CAD</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                        <option value="IT Service Desk Manager">IT Service Desk Manager</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Mainframe Technologies">Mainframe Technologies</option>
                    </select>
                    {validationStatus.userSelectedTech === false && (
                        <div className="invalid-feedback d-block">Please select a technology path</div>
                    )}
                </motion.div>

                {/* Referral ID (Optional) */}
                <motion.div className="mb-3" {...motionInputProps}>
                    <input
                        className="form-control input-colored"
                        type="text"
                        name="userReferralId"
                        placeholder="Referral ID (Optional)"
                        autoComplete="off"
                        value={newUserData.userReferralId}
                        onChange={newUserInputChange}
                    />
                </motion.div>

                {/* Submit Button */}
                <motion.div className="registerButton" whileHover={{ scale: 1.05 }}>
                    <button type="submit" className="btn registerBtn w-100">
                        Register
                    </button>
                </motion.div>
            </motion.form>
        </motion.div>
    );
}

export default UserForm;
