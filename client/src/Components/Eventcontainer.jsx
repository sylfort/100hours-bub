import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import EventForm from "./EventForm";
import EventCard from "./EventCard";
import { useQuery } from '@tanstack/react-query';
import { AppContext } from "../App"

  
export default function EventContainer() {

  const {user, setUser } = useContext(AppContext);

  const { data } = useQuery(["event"], () => {
    return axios.get("/event")
      .then((res) => {
        return (res.data);
      })
  });

    useEffect(() => {
    setUser(data?.user)
  }, [data]);


    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

  //     useEffect(() => {
  //       console.log(data);
  //     setUser(data.user.userName)
  // }, [data]);

    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleCreateEventPress = () => {
      setIsCreateEventVisible(true);
      setIsButtonVisible(false);
    };

    return (
        <>
        <p
        className="block text-sm font-medium text-white-700"
        >{user?.username}</p>
        <p>Can't find the event you're looking for?</p>
        <p>Create your own Event!</p>
        {isButtonVisible && <button
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleCreateEventPress}
        >Create event</button>}
        {isCreateEventVisible && data.user && <EventForm />}
        <EventCard data={data} />
        </>
    )
  }