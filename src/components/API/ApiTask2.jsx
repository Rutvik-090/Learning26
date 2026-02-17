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
      setError("Unable to fetch comments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Comments Overview
        </h1>

        <div className="text-center mb-8">
          <button
            onClick={getComments}
            disabled={loading}
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition disabled:opacity-50"
          >
            {loading ? "Fetching..." : "Load Comments"}
          </button>
        </div>

        {error && (
          <p className="text-center text-red-500 font-medium mb-6">{error}</p>
        )}

        {comments.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wide">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Comment</th>
                  <th className="p-4 text-left">Post</th>
                  <th className="p-4 text-left">Likes</th>
                  <th className="p-4 text-left">User</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {comments.map((comment) => (
                  <tr
                    key={comment.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{comment.id}</td>

                    <td className="p-4 max-w-md">
                      <p className="truncate">{comment.body}</p>
                    </td>

                    <td className="p-4">{comment.postId}</td>

                    <td className="p-4 text-blue-600 font-medium">
                      {comment.likes}
                    </td>

                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {comment.user.username}
                        </span>
                        <span className="text-sm text-gray-500">
                          {comment.user.fullName}
                        </span>
                      </div>
                    </td>
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
