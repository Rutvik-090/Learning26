import axios from "axios";
import { useState } from "react";

function ApiDemo() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("https://dummyjson.com/posts");
      setPosts(res.data.posts);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          API Demo – Posts
        </h1>

        <div className="text-center mb-6">
          <button
            onClick={getUser}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Fetch Data
          </button>
        </div>

        {loading && (
          <p className="text-center text-lg font-medium">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium">{error}</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ApiDemo;
