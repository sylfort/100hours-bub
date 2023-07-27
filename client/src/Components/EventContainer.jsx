import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import EventForm from "./EventForm.jsx";
import EventCard from "./EventCard.jsx";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../App";

const EventContainer = () => {
  const { user, setUser } = useContext(AppContext);

  const { data } = useQuery(
    ["event"],
    async () => {
      const res = await axios.get("/api/event");
      return res.data;
    },
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    console.log(data);
    setUser(data?.user);
  }, [data]);

  const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleCreateEventPress = () => {
    setIsCreateEventVisible(true);
    setIsButtonVisible(false);
  };

  return (
    <>
      <h2 className="text-white-700 mx-auto mb-4 block font-medium">
        Welcome {user?.userName ?? "Guest"}
      </h2>
      {user ? (
        <div>
          <p>Can&apos;t find the event you&apos;re looking for?</p>
          <p>Create your own Event!</p>
          {isButtonVisible && (
            <button
              className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleCreateEventPress}>
              Create event
            </button>
          )}
        </div>
      ) : (
        <p>Make sure to login before creating a new event!</p>
      )}
      {isCreateEventVisible && data.user && <EventForm data={data} />}
      <EventCard data={data} />
    </>
  );
};

export default EventContainer;
