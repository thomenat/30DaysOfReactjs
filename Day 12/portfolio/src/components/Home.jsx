import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/about", { state: { user: "Natália" } })}>
        Go to About Page
      </button>
    </div>
  );
};

export default Home;
