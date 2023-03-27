import React, { useState, createContext } from "react";
import "./App.css";
import Root from "./components/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Profile from "./components/Profile";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/loginForm",
    element: <LoginForm />,
  },
  {
    path: "/signupForm",
    element: <SignUpForm />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  const [user, setUser] = useState("");

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
