import { useState } from "react";
import { useForm } from "react-hook-form";

function FormDemo3() {
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
        className="bg-white p-8 rounded-2xl shadow-xl w-[420px] space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Job Application
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          {...register("position")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Position</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>

        {/* Experience Radio */}
        <div>
          <p className="font-medium mb-2">Experience Level</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="Fresher" {...register("experience")} />
              Fresher
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="1-3 Years"
                {...register("experience")}
              />
              1-3 Years
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="3+ Years"
                {...register("experience")}
              />
              3+ Years
            </label>
          </div>
        </div>

        <input
          type="url"
          placeholder="Resume URL"
          {...register("resume")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Apply Now
        </button>
      </form>

      {/* Display Submitted Data */}
      {formData && (
        <div className="bg-white p-6 rounded-xl shadow-md w-[420px]">
          <h3 className="text-lg font-bold mb-3 text-gray-700">
            Application Summary
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

export default FormDemo3;
