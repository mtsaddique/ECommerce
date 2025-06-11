import React from 'react';
import '../css/loginPrompt.css'; // Link to its specific CSS

const LoginPrompt = ({ setLoginVisible }) => {
    return (
        <div className="mad_con">
            <div className="login-prompt">
                <h2>Please log in to access your dashboard.</h2>
                <button onClick={() => setLoginVisible(true)} className="login-btn">Log In</button>
            </div>
        </div>
    );
};

export default LoginPrompt;