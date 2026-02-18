import axios from "axios";
import { useState } from "react";

function ApiDemo() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("https://node5.onrender.com/user/user/");

      setUsers(res.data.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          API Demo – Users
        </h1>

        <div className="text-center mb-6">
          <button
            onClick={getUsers}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Fetch Users
          </button>
        </div>

        {loading && (
          <p className="text-center text-lg font-medium">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium">{error}</p>
        )}

        {!loading && !error && users.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold mb-3">{user.name}</h2>

                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <strong>ID:</strong> {user._id}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Age:</strong> {user.age}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {user.isActive ? "Active" : "Inactive"}
                  </p>
                  <p>
                    <strong>Version:</strong> {user.__v}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <p className="text-center text-gray-500">
            No users found. Click "Fetch Users".
          </p>
        )}
      </div>
    </div>
  );
}

export default ApiDemo;
