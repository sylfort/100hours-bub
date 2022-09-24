import axios from "axios";
import { useState, useEffect } from 'react';
import Tail from "./Tail";
import Event from "./Event";
import { useQuery } from '@tanstack/react-query';

  
export default function Parent() {

    const { data:events, refetch } = useQuery(["eve"], () => {
        return axios.get("/event")
          .then((res) => {
            console.log(res.data.events, res.data.user)
            return (res.data.events);
          })
    });

    // const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     axios.get("/event")
    //       .then((res) => setEvents(res.data.events))
    //   }, []);

    //   {
    //     "_id": "632c5e40a87e906510a933fd",
    //     "eventName": "A",
    //     "description": "A",
    //     "duration": "15",
    //     "eventDate": "2022-09-30T00:00:00.000Z",
    //     "createdAt": "2022-09-22T13:08:16.676Z",
    //     "__v": 0
    // }

    return (
        <>
        <Tail refetch={refetch} />
        <Event events={events} />
        </>
    )
  }