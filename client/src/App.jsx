import React from 'react';
import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    axios.get("/api")
      .then((res) => setData(res.data.message));
  }, []);

  return (
    <div className="App">
      <div>test</div>
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
