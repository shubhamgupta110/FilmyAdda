import "../CSS/Movies.css";
import Footer from "./Footer";

function Movies() {
  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      year: 2019,
      duration: "3h 1m",
      genre: "Action, Sci-Fi",
      rating: "8.4/10"
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      duration: "2h 32m",
      genre: "Action, Drama",
      rating: "9.0/10"
    },
    {
      id: 3,
      title: "Inception",
      year: 2010,
      duration: "2h 28m",
      genre: "Sci-Fi, Thriller",
      rating: "8.8/10"
    },
    {
      id: 4,
      title: "Interstellar",
      year: 2014,
      duration: "2h 49m",
      genre: "Sci-Fi, Adventure",
      rating: "8.6/10"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="movies-container">
        <h1 className="movies-title">Now Showing</h1>
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster">
                {movie.title}
              </div>
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-details">{movie.year} • {movie.duration}</p>
                <p className="movie-genre">{movie.genre}</p>
                <span className="movie-rating">{movie.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;