import React from 'react';
import { useState, useEffect, createContext } from 'react'
import './App.css'
import axios from 'axios'
import EventContainer from "./Components/EventContainer";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const AppContext = createContext();

function App() {

  const [user, setUser] = useState("");

  // useEffect(() => {
  //   axios.get("/api")
  //     .then((res) => setData(res.data.message));
  // }, []);

  return (
   
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AppContext.Provider value={{ user, setUser }}>
          <div className="App">
            <main className="container mx-auto">
              <div className="container mx-auto px-4 py-4 my-8">
                <a href="/login" className="bg-blue-500 m-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Login</a>
                <a href="/signup" className="bg-blue-500 m-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Signup</a>
              </div>
            </main>

           <EventContainer />

          </div>
        </AppContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>


      
  );
}

export default App;
