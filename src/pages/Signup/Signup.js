import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isValidEmail = email.includes('@');
    const isValidPw = password.length >= 8;

    const pressSubmitBtn = () => {
        const data = {
            email: email,
            password: password
        };
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', data, config)
        .then(res => {
            alert('success!!');
            navigate('/signin');
        })
        .catch(err => {
            alert('fail :(');
        });
    }

    return(
        <>
            <input
                data-testid="email-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                data-testid="password-input"
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                data-testid="signup-button"
                onClick={() => pressSubmitBtn()}
                disabled={!isValidEmail || !isValidPw}
            >
                회원가입
            </button>
        </>
    );
}

export default Signup;