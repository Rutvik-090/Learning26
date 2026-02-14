import { useForm } from "react-hook-form";

function FormDemo6() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validationRules = {
    fullNameValidator: {
      required: "Full Name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters required",
      },
      maxLength: {
        value: 20,
        message: "Maximum 20 characters allowed",
      },
    },

    usernameValidator: {
      required: "Username is required",
      minLength: {
        value: 4,
        message: "Minimum 4 characters required",
      },
      maxLength: {
        value: 12,
        message: "Maximum 12 characters allowed",
      },
    },

    ageValidator: {
      required: "Age is required",
      min: {
        value: 18,
        message: "Minimum age is 18",
      },
      max: {
        value: 60,
        message: "Maximum age is 60",
      },
    },

    phoneValidator: {
      required: "Phone number is required",
      pattern: {
        value: /^[6-9][0-9]{9}$/,
        message: "Enter valid 10-digit mobile number starting with 6-9",
      },
    },

    genderValidator: {
      required: "Please select gender",
    },

    countryValidator: {
      required: "Please select your country",
    },

    bioValidator: {
      maxLength: {
        value: 100,
        message: "Maximum 100 characters allowed",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Registration Form</h2>

        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", validationRules.fullNameValidator)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Username */}
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register("username", validationRules.usernameValidator)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <input
            type="number"
            placeholder="Age"
            {...register("age", validationRules.ageValidator)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone"
            {...register("phone", validationRules.phoneValidator)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="Male"
                {...register("gender", validationRules.genderValidator)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                {...register("gender", validationRules.genderValidator)}
              />{" "}
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <select
            {...register("country", validationRules.countryValidator)}
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Bio */}
        <div>
          <textarea
            placeholder="Bio"
            {...register("bio", validationRules.bioValidator)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo6;
