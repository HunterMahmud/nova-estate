import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-12 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Register Now!</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
           
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Register
          </button>
        </form>
        <p className="text-sm text-center sm:px-6 text-gray-400">
          Have an account?
          <Link to="/login" className="underline text-gray-100 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
