import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SatLogin.css';

const SatLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(email, password);
            const res = await axios.post("/api/login", { email, password });
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("userRole", res.data.role); // make sure backend sends the role
            navigate("/admin");

        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login-wrapper d-flex align-items-center justify-content-center">
            <div className="login-form p-4 shadow rounded">
                <h2 className="mb-4 text-center">Login to SAT Academy</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ms-2">Remember me</label>
                        </div>
                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <p className="text-center">Don't have an account? <Link className="loginRegister" to="/">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SatLogin;
