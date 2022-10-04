import { React, useState, useEffect, useContext } from 'react'
import axios from "axios"
import * as EventForm from "./EventForm"
import * as EventCard from "./EventCard"
import { useQuery } from '@tanstack/react-query'
import { AppContext } from "../App"

  
export default function EventContainer() {

  const {user, setUser } = useContext(AppContext);

  const { data } = useQuery(["event"], () => {
    return axios.get("/event")
      .then((res) => {
        return (res.data);
      })
  }, {refetchOnWindowFocus:false});

    useEffect(() => {
    setUser(data?.user)
  }, [data]);


    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleCreateEventPress = () => {
      setIsCreateEventVisible(true);
      setIsButtonVisible(false);
    };

    return (
        <>
        <h2
        className="mb-4 block font-medium text-white-700 mx-auto"
        >Welcome {user?.userName ?? "Guest"}</h2>
        {user ? <div>
        <p>Can&apos;t find the event you&apos;re looking for?</p>
        <p>Create your own Event!</p>
        {isButtonVisible && <button
        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleCreateEventPress}
        >Create event</button>}
          </div> : <p>Make sure to login before create a new event!</p>}
        {isCreateEventVisible && data.user && <EventForm data={data}/>}
        <EventCard data={data} />
        </>
    )
  }