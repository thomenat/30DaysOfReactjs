import { useState } from "react";

function LS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, User! 🎉</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in.</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default LS;
