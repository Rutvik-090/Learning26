import axios from "axios";
import { useState } from "react";

export const ApiTask2 = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getComments = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://dummyjson.com/comments");
      setComments(response.data.comments);
    } catch (err) {
      setError("Failed to fetch comments.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
          API Task 2 – Comments
        </h1>

        <div className="text-center mb-6">
          <button
            onClick={getComments}
            disabled={loading}
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-600"
          >
            {loading ? "Loading..." : "Get Comments"}
          </button>
        </div>

        {error && <p className="text-center text-red-400 mb-4">{error}</p>}

        {comments.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Body</th>
                  <th className="p-3 text-left">Post ID</th>
                  <th className="p-3 text-left">Likes</th>
                  <th className="p-3 text-left">User ID</th>
                  <th className="p-3 text-left">Username</th>
                  <th className="p-3 text-left">Full Name</th>
                </tr>
              </thead>

              <tbody>
                {comments.map((comment) => (
                  <tr
                    key={comment.id}
                    className="border-t border-gray-700 hover:bg-gray-700 transition"
                  >
                    <td className="p-3">{comment.id}</td>
                    <td className="p-3 max-w-xs truncate">{comment.body}</td>
                    <td className="p-3">{comment.postId}</td>
                    <td className="p-3 text-yellow-400">{comment.likes}</td>
                    <td className="p-3">{comment.user.id}</td>
                    <td className="p-3">{comment.user.username}</td>
                    <td className="p-3">{comment.user.fullName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
