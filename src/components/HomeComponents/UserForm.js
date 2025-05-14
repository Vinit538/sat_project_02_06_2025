import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'; // Custom styles
import base_url from '../api/bootapi';
// import { Toaster, toast } from 'react-hot-toast';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function UserForm() {
    //input animation
    const [isFocused, setIsFocused] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };
    const handleInputBlur = () => {
        setIsFocused(false);
        if (
            document.getElementById("userName")?.value ||
            document.getElementById("userEmail")?.value ||
            document.getElementById("userPhoneNo")?.value ||
            document.getElementById("userQualification")?.value ||
            document.getElementById("userLanguage")?.value ||
            document.getElementById("userCity")?.value ||
            document.getElementById("userSelectedTech")?.value
        ) {
            setIsInputValid(true);
        } else {
            setIsInputValid(false);
        }
    };

    // const handleInputChange = (e)=>{
    //   const{name, value}=e.target;
    //   setUserData({ ...userData, [name]:value});
    // }

    // const handleSubmit = (event)=>{
    //   event.preventDefault();
    // }
    //Register

    const [newUserData, setNewUserData] = useState({
        userName: '',
        userEmail: '',
        userPhoneNo: '',
        userQualification: '',
        userLanguage: '',
        userCity: '',
        userSelectedTech: '',
    });

    const validateField = (name, value) => {
        let isValid = false;
        switch (name) {
            case "userName":
                isValid = /^[A-Za-z ]+$/.test(value);
                break;
            case "userEmail":
                isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/i.test(value);
                break;
            case "userPhoneNo":
                isValid = /^[0-9]{10}$/.test(value);
                break;
            case "userCity":
                isValid = /^[A-Za-z ]+$/.test(value);
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

    // const handleNewUserSubmit = (event) => {
    //   event.preventDefault();
    // }

    // 

    const handleNewUserSubmit = (event) => {
        event.preventDefault();

        // Final validation before submit
        const allValid = Object.values(validationStatus).every((status) => status === true);
        const requiredFieldsFilled = Object.values(newUserData).every((field) => field.trim() !== '');

        if (!allValid || !requiredFieldsFilled) {
            // alert("Please fill all fields correctly before submitting.");
            toast.error("Please fill all fields correctly before submitting.");
            return;
        }

        // console.log("Registered User Data:", newUserData);
        // alert("Registration successful!");
        postDataServer();
        // Reset form
        setNewUserData({
            userName: '',
            userEmail: '',
            userPhoneNo: '',
            userQualification: '',
            userLanguage: '',
            userCity: '',
            userSelectedTech: '',
        });

        // Reset validation
        setValidationStatus({
            userName: null,
            userEmail: null,
            userPhoneNo: null,
            userCity: null,
        });

        // Manually uncheck radio buttons
        document.querySelectorAll("input[name='userSelectedTech']").forEach((el) => el.checked = false);
    };

    // to validate the user data
    const [validationStatus, setValidationStatus] = useState({
        userName: null,
        userEmail: null,
        userPhoneNo: null,
        userCity: null,
    });

    //connection data base 
    async function postDataServer() {
        const dataToPost = {
            userName: newUserData.userName,
            userEmail: newUserData.userEmail,
            userPhoneNo: newUserData.userPhoneNo,
            userQualification: newUserData.userQualification,
            userCity: newUserData.userCity,
            userLanguage: newUserData.userLanguage,
            userSelectedTech: newUserData.userSelectedTech,
        };
        try {
            const response = await axios.post(`${base_url}/submissions`, dataToPost);
            console.log("WelDone")
            toast.success("Registration successful!");
        }
        catch (error) {
            console.log("error")
        }
    }




    return (
        <div>
           <div>
           <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
           </div>
            {/* Register Form */}
            <form className='form_box' onSubmit={handleNewUserSubmit}>
                <div className="mb-3 position-relative">
                    <input
                        className={`form-control input-colored ${validationStatus.userName === null
                            ? ""
                            : validationStatus.userName
                                ? "is-valid"
                                : "is-invalid"
                            }`}
                        autoComplete="off"
                        type="text"
                        id="userName"
                        name="userName"
                        onFocus={handleInputFocus}
                        // onBlur={handleInputBlur}
                        value={newUserData.userName}
                        onChange={newUserInputChange}
                        placeholder="Name"
                        required
                    />
                    {validationStatus.userName !== null && (
                        <span
                            className={`validation-icon ${validationStatus.userName ? "valid" : "invalid"}`}
                        >
                        </span>
                    )

                    }
                    {validationStatus.userName === false && (
                        <div className="invalid-feedback d-block">Please enter a valid name</div>
                    )}
                    {/* {validationStatus.userName === true && (
                        <div className="valid-feedback d-block">Looks good!</div>
                    )} */}
                </div>

                <div className="mb-3 position-relative">
                    <input
                        className={`form-control input-colored ${validationStatus.userEmail === null
                            ? ""
                            : validationStatus.userEmail
                                ? "is-valid"
                                : "is-invalid"
                            }`}
                        type="email"
                        autoComplete='off'
                        id="userEmail"
                        name="userEmail"
                        placeholder="Email"
                        onFocus={handleInputFocus}
                        // onBlur={handleInputBlur}
                        value={newUserData.userEmail}
                        onChange={newUserInputChange}
                        required
                    />
                    {validationStatus.userEmail !== null && (
                        <span
                            className={`validation-icon ${validationStatus.userEmail ? "valid" : "invalid"}`}

                        >
                            {/* {validationStatus.userName ? "✔️" : "❌"} */}
                        </span>
                    )

                    }
                    {validationStatus.userEmail === false && (
                        <div className="invalid-feedback d-block">Please enter a valid Email</div>
                    )}
                    {/* {validationStatus.userEmail === true && (
                        <div className="valid-feedback d-block">Looks good!</div>
                    )} */}
                </div>

                <div className="mb-3 position-relative">
                    <input
                        className={`form-control input-colored ${validationStatus.userPhoneNo === null
                            ? ""
                            : validationStatus.userPhoneNo
                                ? "is-valid"
                                : "is-invalid"
                            }`}
                        type="tel"
                        autoComplete='off'
                        id="userPhoneNo"
                        name="userPhoneNo"
                        onFocus={handleInputFocus}
                        // onBlur={handleInputBlur}
                        value={newUserData.userPhoneNo}
                        onChange={newUserInputChange}
                        placeholder="Phone No"
                        required

                    />
                    {validationStatus.userPhoneNo !== null && (
                        <span className={`validation-icon ${validationStatus.userPhoneNo ? "valid" : "invalid"}`}></span>
                    )}

                    {validationStatus.userPhoneNo === false && (
                        <div className="invalid-feedback d-block">Please enter a valid Phone No</div>
                    )}
                </div>
                <div className="mb-3 position-relative">
                    <input
                        className={`form-control input-colored ${validationStatus.userCity === null
                            ? ""
                            : validationStatus.userCity
                                ? "is-valid"
                                : "is-invalid"
                            }`}
                        type="text"
                        autoComplete='on'
                        id="userCity"
                        name="userCity"
                        onFocus={handleInputFocus}
                        // onBlur={handleInputBlur}
                        value={newUserData.userCity}
                        onChange={newUserInputChange}
                        placeholder="City"
                        required
                    />
                    {validationStatus.userCity !== null && (
                        <span
                            className={`validation-icon ${validationStatus.userCity ? "valid" : "invalid"}`}

                        ></span>
                    )}

                    {validationStatus.userCity === false && (
                        <div className="invalid-feedback d-block">Please enter a valid City Name</div>
                    )}
                </div>


                <div  className='row'>
                      <div className="col-md-6 mb-3">
                    <select
                        className="form-select input-colored"
                        id="userQualification"
                        name="userQualification"
                        onChange={newUserInputChange}
                        value={newUserData.userQualification}
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
                        id="userLanguage"
                        name="userLanguage"
                        onChange={newUserInputChange}
                        value={newUserData.userLanguage}
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
                </div>

                {/* <div className="mb-3">
                    <select
                        className="form-select"
                        id="userQualification"
                        name="userQualification"
                        onChange={newUserInputChange}
                        value={newUserData.userQualification}
                        required
                    >
                        <option value="">Select Qualification</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post Graduation">Post Graduation</option>
                        <option value="Diploma/PUC">Diploma/PUC</option>
                    </select>
                </div>

                <div className="mb-3">
                    <select
                        className="form-select"
                        id="userLanguage"
                        name="userLanguage"
                        onChange={newUserInputChange}
                        value={newUserData.userLanguage}
                        required
                    >
                        <option value="">Select Language</option>
                        <option value="Kannada">Kannada</option>
                        <option value="English">English</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div> */}




                <div className="radioButtonTech mb-3">
                    <label className='text-muted h6'>
                        Which Technology Path Will You Choose to Launch Your Career?
                    </label>
                    {/* <div className="mb-3">
                    <select
                        className="form-select"
                        id="userSelectedTech"
                        name="userSelectedTech"
                        onChange={newUserInputChange}
                        value={newUserData.userSelectedTech}
                        required
                    >
                        <option value="">Select Technology</option>
                        <option value="Data Engneering">DATA ENGNEERING</option>
                        <option value="Data Analyst">DATA ANALYST</option>
                        <option value="Data Administration">DATA ADMINISTRATION</option>
                        <option value="Artificial Intelligence">ARTIFICIAL INTELLIGENCE</option>
                        <option value="SAP">SAP</option>
                        <option value="CAD Designing">CAD DESIGNING</option>
                        <option value="Fullstack Developer">FULL STACK DEVELOPER</option>

                    </select>
                </div> */}
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="cad"
                            value="Data Engneering"
                            onChange={newUserInputChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="cad">
                            Data Engneering
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="Data Analyst"
                            value="Data Analyst"
                            onChange={newUserInputChange}
                        />
                        <label className="form-check-label" htmlFor="java">
                            Data Analyst
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="Data Administration"
                            value="Data Administration"
                            onChange={newUserInputChange}
                        />
                        <label className="form-check-label" htmlFor="fullstack">
                            Data Administration
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="Artificial Intelligence"
                            value="Artificial Intelligence"
                            onChange={newUserInputChange}
                        />
                        <label className="form-check-label" htmlFor="fullstack">
                            Artificial Intelligence
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="SAP"
                            value="SAP"
                            onChange={newUserInputChange}
                        />
                        <label className="form-check-label" htmlFor="fullstack">
                            SAP
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="CAD"
                            value="CAD"
                            onChange={newUserInputChange}
                        />
                        <label className="form-check-label" htmlFor="fullstack">
                            CAD
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userSelectedTech"
                            id="Fullstack Developer"
                            value="Fullstack Developer"
                            onChange={newUserInputChange}
                        />
                        <label className="form-check-label" htmlFor="fullstack">
                            Full Stack Develop
                        </label>
                    </div>
                </div>



                <div className='registerButton'>
                    <button type="submit" className="btn registerBtn w-100">
                        Register
                    </button>
                </div>
            </form>

        </div>
    )
}
export default UserForm;