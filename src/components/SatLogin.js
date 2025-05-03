import React from 'react';
import { Link } from 'react-router-dom';
import './SatLogin.css';

const SatLogin = () => {
    return (
        <div className="login-wrapper d-flex align-items-center justify-content-center">
            <div className="login-form p-4 shadow rounded">
                <h2 className="mb-4 text-center">Login to SAT Academy</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" required />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ms-2">Remember me</label>
                        </div>
                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <p className="text-center">Don't have an account? 
                    <Link className="loginRegister" to="/">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SatLogin;
