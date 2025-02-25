import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>About Page</h2>
        <button onClick={() => navigate(-1)}>🔙 Go Back</button>
        <button onClick={() => navigate(1)}>🔜 Go Forward</button>
      </div>
    );
  };
  
export default About;
