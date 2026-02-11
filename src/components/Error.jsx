import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="font-bold text-6xl text-red-500">404</h1>

      <p className="text-xl text-gray-300">Oops! Page not found</p>

      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg
                   hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
