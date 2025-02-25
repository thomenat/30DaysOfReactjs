import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || "Guest";

  return (
    <div className="container">
      <h2>ℹ️ About Page</h2>
      <p>Welcome, {user}!</p>
      <button onClick={() => navigate(-1)}>🔙 Go Back</button>
      <button onClick={() => navigate(1)}>🔜 Go Forward</button>
    </div>
  );
};

export default About;
