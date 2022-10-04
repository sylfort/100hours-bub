import React, { useState, createContext } from 'react'
import './App.css'
import EventContainer from "./Components/EventContainer"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const AppContext = createContext();

function App() {

  const [user, setUser] = useState("");

  return (
   
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AppContext.Provider value={{ user, setUser }}>
          <div className="App">
            <header className="container mx-auto">
              <div className="flex flex-row-reverse container mb-4">
                <a href="/login" className="bg-blue-500 mx-4 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"> Login</a>
                <a href="/signup" className="bg-blue-500 mx-4 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"> Signup</a>
              </div>
            </header>
            <main className="container mx-auto mb-6 font-sans">
              <h1 className='text-8xl mx-auto mb-2'>Coffee Chats</h1>
              <h2 className='text-8xl font-bold mx-auto mb-4 text-blue-700'>NOW!</h2>
              <p className=' mx-auto mb-4'>See who else is available for a coffee chat</p>
              <p className='text-blue-700 text-xl mx-auto mb-2'>Anytime, anywhere</p>
              
            </main>

           <EventContainer />

          </div>
        </AppContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>


      
  );
}

export default App;
