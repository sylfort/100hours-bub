import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EventCard = ({ data }) => {
  const queryClient = useQueryClient();

  const { user } = useContext(AppContext);

  const { handleSubmit } = useForm();

  const { mutate, isLoading } = useMutation(
    data => axios.put("/bookEvent", data),
    {
      onSuccess: () => queryClient.invalidateQueries(["event"]),
    }
  );

  const onSubmit = e => {
    console.log("Here:", e, user);
    mutate(e);
    axios
      .post("/sendEmail", { e, user })
      .then(response => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .then(remove(e))
      .catch(error => {
        console.error("Something went wrong!", error);
      });
  };

  // const [deletedItems, setDeletedItems] = useState([]);

  // const remove = (item) => {
  //     console.log(item);
  //     setDeletedItems([...deletedItems, item]);
  // };

  const allEvents = data?.events;

  const listItems = allEvents?.map((e, index) => (
    <div
      key={index}
      className="my-2 overflow-hidden border-4 border-double border-blue-500 bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Event Information
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Event name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {e.eventName}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {e.description}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Organizer</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {e.user}
            </dd>
          </div>
          {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.email}</dd>
                </div> */}
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Duration</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {e.duration} minutes
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {e.eventDate}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Time</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {e.eventTime}
            </dd>
          </div>

          <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5 sm:px-6">
            <div className="bg-gray-50 px-4 py-3 sm:gap-4 sm:px-6">
              <button
                type="submit"
                className="inline-flex cursor-not-allowed justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white opacity-50 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Suggest Reschedule
              </button>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:gap-4 sm:px-6">
              <button
                onClick={() => handleSubmit(onSubmit(e))}
                type="submit"
                className={`inline-flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  isLoading && "cursor-not-allowed opacity-50"
                } ${user?.userName ?? "cursor-not-allowed opacity-50"}`}>
                Join
              </button>
            </div>
          </div>
        </dl>
      </div>
    </div>
  ));

  return (
    <>
      <div>{listItems}</div>
    </>
  );
};

export default EventCard;
