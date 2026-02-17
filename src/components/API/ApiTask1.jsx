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
      setError("Unable to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Product Inventory
        </h1>

        <div className="text-center mb-8">
          <button
            onClick={getProducts}
            disabled={loading}
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition disabled:opacity-50"
          >
            {loading ? "Fetching..." : "Load Products"}
          </button>
        </div>

        {error && (
          <p className="text-center text-red-500 font-medium mb-6">{error}</p>
        )}

        {products.length > 0 && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wide">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Discount</th>
                  <th className="p-4 text-left">Rating</th>
                  <th className="p-4 text-left">Stock</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{product.id}</td>
                    <td className="p-4 font-medium">{product.title}</td>
                    <td className="p-4 capitalize">{product.category}</td>
                    <td className="p-4 font-semibold text-gray-900">
                      ${product.price}
                    </td>
                    <td className="p-4 text-blue-600">
                      {product.discountPercentage}%
                    </td>
                    <td className="p-4">{product.rating}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          product.stock > 50
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {product.stock} left
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
