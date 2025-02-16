import React from "react";

function LoginSystem() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (username && password) {
            setIsLoggedIn(true);
            print("Welcome, `${username}`!");
    
        } else {
            setIsLoggedIn(false);
            print("Please, log in.");
        }
    };


    return (
        <div>
            <h1>Login System</h1>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
    
        </div>
    )
    
}

export default LoginSystem;