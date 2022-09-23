import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Form  from "./components/Form";
import TailForm from "./Components/Tail";
import Event from "./Components/Event";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get("/api")
  //     .then((res) => setData(res.data.message));
  // }, []);

  return (
    <div className="App">

      <main className="container mx-auto">
        <div className="container mx-auto px-4 py-4 my-8">
          <a href="/login" className="bg-blue-500 m-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Login</a>
          <a href="/signup" className="bg-blue-500 m-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Signup</a>
        </div>
      </main>

      <TailForm />

      <Event />

      {/* <Form /> */}
    </div>
  );
}

export default App;
