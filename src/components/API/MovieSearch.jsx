import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=fcde21b7`,
      );

      if (res.data.Response === "False") {
        throw new Error(res.data.Error);
      }

      setMovies(res.data.Search);
    } catch (err) {
      setMovies([]);
      setError("Movie not found. Try another name.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Movie Search</h1>

        <form
          onSubmit={searchMovies}
          className="flex justify-center gap-3 mb-8"
        >
          <input
            type="text"
            placeholder="Enter movie name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-80 px-4 py-2 rounded-lg border focus:outline-none"
          />

          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            Search
          </button>
        </form>

        {loading && (
          <p className="text-center font-semibold text-lg">Searching...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium">{error}</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.slice(0, 9).map((movie) => (
              <Link
                to={`/movie/${movie.imdbID}`}
                key={movie.imdbID}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition block"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.Title}
                  className="w-full h-64 object-cover rounded mb-3"
                />

                <h2 className="text-lg font-semibold">{movie.Title}</h2>

                <p className="text-gray-600 text-sm">{movie.Year}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieSearch;
