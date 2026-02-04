import { Link } from "react-router-dom";

const Shows = () => {
  const shows = [
    { showName: "Breaking Bad" },
    { showName: "Stranger Things" },
    { showName: "Money Heist" },
    { showName: "Dark" },
    { showName: "The Boys" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-10 py-6">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-8">TV Shows</h1>

      {/* Shows Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {shows.map((show, index) => (
          <Link
            key={index}
            to={`/watch/${show.showName}`}
            className="bg-zinc-900 rounded-lg h-56 flex items-center justify-center
                       hover:scale-105 transition-transform cursor-pointer"
          >
            <p className="text-center text-lg font-medium">{show.showName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shows;
