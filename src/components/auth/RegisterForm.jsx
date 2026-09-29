"use client";

import { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({
      name,
      phone,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-6 sm:p-8">

          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold">
              Create Account
            </h1>

            <p className="text-base-content/60 mt-2">
              Join Hero-Kidz today 🚀
            </p>
          </div>

          {/* Google Register */}
          <button
            type="button"
            className="btn btn-outline w-full gap-3"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <div className="divider">OR</div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Full Name
                </span>
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <FaUser className="text-base-content/50" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Phone Number
                </span>
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <FaPhone className="text-base-content/50" />

                <input
                  type="tel"
                  name="phone"
                  placeholder="01XXXXXXXXX"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Email
                </span>
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <FaEnvelope className="text-base-content/50" />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Password
                </span>
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <FaLock className="text-base-content/50" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  className="grow"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-ghost btn-sm btn-circle"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </label>
            </div>

            {/* Terms */}
            <label className="label cursor-pointer justify-start gap-3 mt-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                required
              />

              <span className="label-text text-sm">
                I agree to the{" "}
                <span className="text-primary cursor-pointer">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterForm;