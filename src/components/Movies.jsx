import { Link } from "react-router-dom";

function Movies() {
  const movies = [
    { movieName: "Shutter Island" },
    { movieName: "Inception" },
    { movieName: "Interstellar" },
    { movieName: "The Dark Knight" },
    { movieName: "Fight Club" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-10 py-6">
      <h1 className="text-3xl font-semibold mb-8">Movies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie, index) => (
          <Link
            key={index}
            to={`/watch/${movie.movieName}`}
            className="bg-zinc-900 rounded-lg h-56 flex items-center justify-center 
                       hover:scale-105 transition-transform cursor-pointer"
          >
            <p className="text-center text-lg font-medium">{movie.movieName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
