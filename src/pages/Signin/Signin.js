import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressLoginBtn = () => {
        const data = {
            email: email,
            password: password
        };
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin', data, config)
        .then(res => {
            alert('success!!');

            const access_token = res?.data?.access_token;
            if(!access_token) alert('fail :(');
            else {
                localStorage.setItem('access_token', access_token);
                navigate('/todo');
            }
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
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button data-testid="signin-button" onClick={() => pressLoginBtn()}>로그인</button>
        </>
    );
}

export default Signin;