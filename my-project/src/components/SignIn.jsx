import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/doctor6.jpeg";
import doctorImage from "../assets/doctor16.png"; // Login image for Drug Doc
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signin", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          setErrors([res.data.message]);
        } else {
          setSuccessMessage("Login Successful");
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="flex lg:flex-row flex-col justify-center items-center fixed inset-0 overflow-hidden"
      style={{
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(to bottom right, skyblue, #00c6ff, #0072ff)",
      }}
    >
      {/* Logo and Title at the Top Left Corner */}
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <img
          src={logoImage}
          alt="Drug Doc Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1 className="text-black font-serif text-4xl font-bold">Drug Doc</h1>
      </div>

      {/* Image on the left side (hidden on mobile screens) */}
      <div className="lg:w-1/2 w-full h-full  justify-center items-center hidden lg:block">
        <img
          src={doctorImage}
          alt="Login Visual"
          className="w-70 h-100 object-cover"
        />
      </div>

      {/* Login form on the right side */}
      <div className="lg:w-1/2 w-full max-w-lg p-6">
        <div className="text-center mb-6">
          <p className="text-lg text-black font-mono font-semibold">
            Welcome back! Please enter your credentials to log in to your
            account.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl hover:translate-y-1 hover:translate-z-1">
          <h1 className="text-3xl font-semibold text-center text-black mb-6 shadow-md">
            Login
          </h1>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-500 text-white text-center p-2 rounded mb-4 shadow-md">
              {successMessage}
            </div>
          )}

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="bg-red-500 text-white p-2 rounded mb-4 shadow-md">
              {errors.map((error, index) => (
                <p key={index}>
                  <strong>{error}</strong>
                </p>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-bold mb-2 shadow-md"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black font-bold mb-2 shadow-md"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/" className="text-blue-500 hover:text-blue-700">
              <strong>Sign up here</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;