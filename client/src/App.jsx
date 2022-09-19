import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import FormFinal from "./components/FormFinal";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api")
      .then((res) => setData(res.data.message));
  }, []);

  return (
    <div className="App">
      <div>test</div>
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>

        <FormFinal/>
    </div>
  );
}

export default App;
