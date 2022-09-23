import axios from "axios";
import { useState, useEffect } from 'react'

/* This example requires Tailwind CSS v2.0+ */
const items = [
    { id: 1 },
    // More items...
  ]


  
  export default function Event() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("/event")
          .then((res) => setEvents(res.data.events))
      }, []);

    return (
      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {events.map((event, index) => (
            <li key={index} className="px-6 py-4">
              {event.eventName}
              {console.log(event)}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  