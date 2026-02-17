import { useForm } from "react-hook-form";

function FormDemo7() {
  const { register, watch, handleSubmit } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  // Password Criteria Checks
  const validations = {
    minLength: password.length >= 8,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 to-pink-200 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Create Strong Password
        </h2>

        {/* Password Input */}
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
          />
        </div>

        {/* Password Criteria */}
        <div className="space-y-2 text-sm">
          <p
            className={
              validations.minLength ? "text-green-600" : "text-red-500"
            }
          >
            • Minimum 8 characters
          </p>

          <p
            className={validations.hasUpper ? "text-green-600" : "text-red-500"}
          >
            • At least one uppercase letter
          </p>

          <p
            className={validations.hasLower ? "text-green-600" : "text-red-500"}
          >
            • At least one lowercase letter
          </p>

          <p
            className={
              validations.hasNumber ? "text-green-600" : "text-red-500"
            }
          >
            • At least one number
          </p>

          <p
            className={
              validations.hasSpecial ? "text-green-600" : "text-red-500"
            }
          >
            • At least one special character (!@#$%^&*)
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo7;
