import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=fcde21b7`,
      );
      setMovie(res.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <div className="md:flex gap-6">
          <img src={movie.Poster} alt={movie.Title} className="w-72 rounded" />

          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>

            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>
            <p className="mt-3">{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
