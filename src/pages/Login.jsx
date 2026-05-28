import React, { useState } from 'react';

 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="authincation h-100">
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <h4 className="text-center mb-4">Sign in your account</h4>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label><strong>Email</strong></label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label><strong>Password</strong></label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                                <div className="form-group">
                                                    <div className="form-check ml-2">
                                                        <input 
                                                            className="form-check-input" 
                                                            type="checkbox" 
                                                            id="basic_checkbox_1" 
                                                        />
                                                        <label className="form-check-label" htmlFor="basic_checkbox_1">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <a href="page-forgot-password.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                {/* <button type="submit" className="btn btn-primary btn-block">
                                                    Sign me in
                                                </button> */}
                                                <a href="/" className="btn btn-primary btn-block d-flex align-items-center justify-content-center">
                                                    Sign me in
                                                </a>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p>Don't have an account? <a className="text-primary" href="/register">Sign up</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;