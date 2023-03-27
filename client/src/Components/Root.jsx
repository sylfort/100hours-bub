import React from "react";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <header className="container mx-auto">
        <div className="container mb-4 flex flex-row-reverse">
          <Link
            to={`loginForm`}
            className="mx-4 rounded bg-blue-500 py-2 px-4 text-sm text-white hover:bg-blue-700">
            Login
          </Link>
          {/* <a
            href="/login"
            
            {" "}
            Login
          </a> */}
          <Link
            to={`signupForm`}
            className="mx-4 rounded bg-blue-500 py-2 px-4 text-sm text-white hover:bg-blue-700">
            Sign Up
          </Link>
          {/* <a
            href="/signup"
            className="mx-4 rounded bg-blue-500 py-2 px-4 text-sm text-white hover:bg-blue-700">
            {" "}
            Signup
          </a> */}
        </div>
      </header>
      <main className="container mx-auto mb-6 font-sans">
        <h1 className="mx-auto mb-2 text-8xl">Coffee Chats</h1>
        <h2 className="mx-auto mb-4 text-8xl font-bold text-blue-700">NOW!</h2>
        <p className=" mx-auto mb-4">
          See who else is available for a coffee chat
        </p>
        <p className="mx-auto mb-2 text-xl text-blue-700">Anytime, anywhere</p>
      </main>
    </div>
  );
}

export default Root;
