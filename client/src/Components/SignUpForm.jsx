import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// 7.1.2. Set up yup validation schema
const formSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignUpForm = () => {
  // 7.2.4. Use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = async data => {
    try {
      await axios.post("/signup", data);
      // Handle registration success (e.g., update state, redirect)
    } catch (error) {
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-8 w-full max-w-sm space-y-4">
      <div className="relative">
        <input
          {...register("Email")}
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Email"
        />
        {errors.email && (
          <span className="absolute bottom-[-25px] text-xs text-red-500">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="relative">
        <input
          {...register("password")}
          type="password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Password"
        />
        {errors.password && (
          <span className="absolute bottom-[-25px] text-xs text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
