import "../css/login.css";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Check if the entered password is 'admin@123'
        if (password === 'Admin@123') {
            // Navigate to the dashboard
            navigate('/dashbd');
        } else {
            // Show an alert message for incorrect password
            alert('Incorrect password. Please try again.');
        }
    };

    return (
        <>

            <div style={{height:"700px", overflow:"hidden"}}>
                <div id="logBody">

                </div>
                <div id="clr"></div>
                <div style={{ marginTop: "-550px", marginLeft: "1170px" }}>

                    <h1 style={{ marginLeft: "30px" }}>Login Account</h1>

                    <input className="inp" placeholder="Username" />
                    <br />
                    <input className="inp" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <button style={{ backgroundColor: "rgb(48, 100, 231)", padding: "10px", paddingLeft: "120px", paddingRight: "120px", borderRadius: "20px", border: "none", color: "white", boxShadow: "7px 5px 5px 0px lightblue", marginTop: "50px" }} onClick={handleLogin}>Login</button>
                </div>
            </div>

        </>
    )
}

export default Login;





