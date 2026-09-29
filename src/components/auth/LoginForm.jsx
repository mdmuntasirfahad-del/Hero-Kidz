"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-6 sm:p-8">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-base-content/60 mt-2">
              Login to continue to Hero-Kidz
            </p>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="btn btn-outline w-full gap-3"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <div className="divider">OR</div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

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
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text font-medium">
                    Password
                  </span>
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <label className="input input-bordered flex items-center gap-3">
                <FaLock className="text-base-content/50" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
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

            {/* Remember Me */}
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />

              <span className="label-text">
                Remember me
              </span>
            </label>

            {/* Login */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm mt-5">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Create account
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;