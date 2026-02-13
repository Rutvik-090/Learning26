import { useState } from "react";
import { useForm } from "react-hook-form";

function FormDemo4() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  const validationRules = {
    nameValidator: {
      required: {
        value: true,
        message: "Name is required",
      },
    },

    emailValidator: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email address",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-green-100 to-teal-100 gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-105 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Feedback Form
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          {...register("name", validationRules.nameValidator)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", validationRules.emailValidator)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Rating */}
        <div>
          <p className="font-medium mb-2">Rate Our Service</p>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="flex items-center gap-1">
                <input type="radio" value={num} {...register("rating")} />
                {num}
              </label>
            ))}
          </div>
        </div>

        {/* Recommend */}
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("recommend")} />
          Would you recommend us?
        </label>

        <textarea
          placeholder="Your Feedback"
          rows="3"
          {...register("message")}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Submit Feedback
        </button>
      </form>

      {/* Display Submitted Feedback */}
      {formData && (
        <div className="bg-white p-6 rounded-xl shadow-md w-105">
          <h3 className="text-lg font-bold mb-3 text-gray-700">
            Feedback Summary
          </h3>

          {Object.entries(formData).map(([key, value]) => (
            <p key={key} className="mb-1">
              <span className="font-semibold capitalize">{key}:</span>{" "}
              {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormDemo4;
