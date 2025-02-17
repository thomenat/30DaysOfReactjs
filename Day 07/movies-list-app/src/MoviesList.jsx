import { useState } from "react";
import "./MoviesList.css"; // Import CSS file

function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  // Function to add a movie
  const addMovie = () => {
    if (movieName.trim()) {
      setMovies([...movies, { id: Date.now(), name: movieName, watched: false }]);
      setMovieName(""); // Clear input after adding
    }
  };

  // Function to remove a movie
  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Function to toggle "Watched" status
  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <div className="container">
      <h2>🎬 Favorite Movies</h2>
      <div className="input-container">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name"
        />
        <button className="add-btn" onClick={addMovie}>
          Add Movie
        </button>
      </div>

      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className={`movie-item ${movie.watched ? "watched-item" : ""}`}>
            <span className={movie.watched ? "watched" : ""}>{movie.name}</span>
            <div>
              <button className="watch-btn" onClick={() => toggleWatched(movie.id)}>
                {movie.watched ? "Unwatch" : "Watched"}
              </button>
              <button className="delete-btn" onClick={() => removeMovie(movie.id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteMovies;
