import React, { useState } from 'react';

const Register = () => {
    // Set up state for form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Handle registration logic here (e.g., API call)
        console.log('Registration attempt:', { username, email, password });
        
        // Example redirect after successful signup (if using standard browser routing)
        // window.location.href = '/login';
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
                                        <h4 className="text-center mb-4">Sign up your account</h4>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label><strong>Username</strong></label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label><strong>Email</strong></label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="hello@example.com"
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
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="text-center mt-4">
                                                 {/* <button type="submit" className="btn btn-primary btn-block">
                                                    Sign me in
                                                </button> */}
                                                <a href="/" className="btn btn-primary btn-block d-flex align-items-center justify-content-center">
                                                    Sign me in
                                                </a>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p>Already have an account? <a className="text-primary" href="/login">Sign in</a></p>
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

export default Register;