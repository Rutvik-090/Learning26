import axios from "axios";
import { useForm } from "react-hook-form";

function ApiTask3() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        data,
      );

      console.log(res.data);

      alert("data added successfully");
      reset();
    } catch (error) {
      console.error("Error:", error.message || error.res);
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-purple-100 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            {...register("name")}
            className="w-full border border-gray-300 rounded-lg h-11 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="w-full border border-gray-300 rounded-lg h-11 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border border-gray-300 rounded-lg h-11 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          {/* Age */}
          <input
            type="number"
            placeholder="Age"
            {...register("age")}
            className="w-full border border-gray-300 rounded-lg h-11 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          {/* Radio Buttons */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Account Status
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="true"
                  {...register("isActive")}
                  className="accent-indigo-600"
                />
                Active
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="false"
                  {...register("isActive")}
                  className="accent-indigo-600"
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApiTask3;
