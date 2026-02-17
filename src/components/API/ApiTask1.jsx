import axios from "axios";
import { useState } from "react";

export const ApiTask1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (err) {
      setError("Failed to fetch products.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
          API Task 1 – Products
        </h1>

        <div className="text-center mb-6">
          <button
            onClick={getProducts}
            disabled={loading}
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-600"
          >
            {loading ? "Loading..." : "Get Products"}
          </button>
        </div>

        {error && (
          <p className="text-center text-red-400 font-semibold mb-4">{error}</p>
        )}

        {products.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700 text-gray-200">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Discount</th>
                  <th className="p-3 text-left">Rating</th>
                  <th className="p-3 text-left">Stock</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-gray-700 hover:bg-gray-700 transition"
                  >
                    <td className="p-3">{product.id}</td>
                    <td className="p-3 font-medium">{product.title}</td>
                    <td className="p-3 capitalize">{product.category}</td>
                    <td className="p-3 text-green-400">${product.price}</td>
                    <td className="p-3 text-yellow-400">
                      {product.discountPercentage}%
                    </td>
                    <td className="p-3">{product.rating}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          product.stock > 50 ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        {product.stock}
                      </span>
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
