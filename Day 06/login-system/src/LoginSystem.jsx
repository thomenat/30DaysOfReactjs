import React, { useState } from "react";

function LoginSystem() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (username && password) {
            setIsLoggedIn(true);
            setMessage(`Welcome, ${username}!`);
        } else {
            setMessage("Please enter both username and password.");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setPassword("");
        setMessage("You have logged out.");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Login System</h1>

            {isLoggedIn ? (
                <>
                    <h2>{message}</h2>
                    <button onClick={handleLogout} style={{ padding: "10px", marginTop: "10px" }}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        style={{ display: "block", margin: "10px auto", padding: "8px" }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        style={{ display: "block", margin: "10px auto", padding: "8px" }}
                    />
                    <button onClick={handleLogin} style={{ padding: "10px", marginTop: "10px" }}>
                        Login
                    </button>
                    <p>{message}</p>
                </>
            )}
        </div>
    );
}

export default LoginSystem;
