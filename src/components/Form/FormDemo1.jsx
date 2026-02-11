import { useState } from "react";
import { useForm } from "react-hook-form";

function FormDemo1() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Form Demo 1
        </h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          {...register("city")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select City</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="Japan">Japan</option>
        </select>

        <textarea
          {...register("bio")}
          placeholder="Bio"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
      </form>

      {/* Display Submitted Data */}
      {formData && (
        <div className="bg-white p-6 rounded-xl shadow-md w-96">
          <h3 className="text-lg font-bold mb-3 text-gray-700">
            Submitted Data
          </h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Password:</strong> {formData.password}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>Bio:</strong> {formData.bio}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormDemo1;
