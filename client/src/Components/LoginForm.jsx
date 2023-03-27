import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import { redirect } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// 7.1.2. Set up yup validation schema
const formSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

// 7.1.3. Create LoginForm component
const LoginForm = () => {
  // 7.1.4. Use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate } = useMutation(data => axios.post("/api/login", data), {
    onSuccess: () => {
      console.log("I'm first!");
      queryClient.invalidateQueries(["/api/login"]);
      navigate("/signupForm");
    },
  });

  //   To integrate Tanstackquery and react-router-dom, you can use the useNavigate hook from
  //   react-router-dom to navigate to another component when the onSuccess function is called. Here’s an example:

  // import { useNavigate } from 'react-router-dom';
  // import { useMutation } from 'react-query';
  // import { createTodo } from './api';

  // function AddTodo() {
  //   const navigate = useNavigate();
  //   const mutation = useMutation(createTodo, {
  //     onSuccess: () => {
  //       navigate('/todos');
  //     },
  //   });

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     mutation.mutate({
  //       title: formData.get('title'),
  //       description: formData.get('description'),
  //     });
  //   }

  const onSubmit = data => {
    console.log(data);
    // axios.post("/api/login", data);
    mutate(data);
  };

  // const onSubmit = async data => {
  //   try {
  //     await axios.post("/login", data);
  //     // Handle login success (e.g., update state, redirect)
  //   } catch (error) {
  //     // Handle login error (e.g., display error message)
  //   }
  // };

  // const [redirectTo, setRedirectTo] = useState(null);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       await axios.get("/login");
  //       setRedirectTo("/profileForm");
  //     } catch (error) {
  //       // Handle error
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);

  // if (redirectTo === "/profileForm") {
  //   return redirect("/profileForm");
  // }

  return (
    // 7.1.5. Style form using TailwindCSS
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-8 w-full max-w-sm space-y-4">
      <div className="relative">
        <input
          {...register("email")}
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
