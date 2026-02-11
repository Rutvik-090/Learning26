import { useState } from "react";
import { useForm } from "react-hook-form";

function FormDemo2() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-[420px] space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Profile Information
        </h2>

        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="number"
          placeholder="Age"
          {...register("age")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="date"
          {...register("dob")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <select
          {...register("country")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        <textarea
          placeholder="Short Bio"
          {...register("bio")}
          rows="3"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
        >
          Save Profile
        </button>
      </form>

      {/* Display Submitted Data */}
      {formData && (
        <div className="bg-white p-6 rounded-xl shadow-md w-[420px]">
          <h3 className="text-lg font-bold mb-3 text-gray-700">
            Submitted Profile
          </h3>

          {Object.entries(formData).map(([key, value]) => (
            <p key={key} className="mb-1">
              <span className="font-semibold capitalize">{key}:</span> {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormDemo2;
