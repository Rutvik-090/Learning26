import axios from "axios";
import { useState } from "react";

function OmdbList() {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  const getMovieDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://www.omdbapi.com/?s=batman&apikey=fcde21b7",
      );

      if (res.data.Response === "False") {
        throw new Error(res.data.Error);
      }

      // Store the Search array
      setMovieData(res.data.Search);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Batman Movies</h1>

        <div className="text-center mb-6">
          <button
            className="w-40 h-10 rounded-lg bg-gray-950 text-white"
            onClick={getMovieDetails}
          >
            Fetch Movies
          </button>
        </div>

        {loading && (
          <p className="font-semibold text-lg text-center">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium">{error}</p>
        )}

        {!loading && !error && movieData.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movieData.slice(0, 6).map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-64 object-cover rounded mb-3"
                />

                <h2 className="text-lg font-semibold">{movie.Title}</h2>

                <p className="text-gray-600 text-sm">
                  <strong>Year:</strong> {movie.Year}
                </p>

                <p className="text-gray-600 text-sm">
                  <strong>Type:</strong> {movie.Type}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OmdbList;
