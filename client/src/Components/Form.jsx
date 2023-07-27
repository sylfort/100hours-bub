import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";

function Form() {
  const formSchema = yup.object().shape({
    eventName: yup.string().required("Your event name is required."),
    description: yup.string(),
    duration: yup
      .number()
      .typeError("Event duration must be a number.")
      .positive()
      .integer()
      .required("The event duration is required."),
    eventDate: yup.string().required("The event date is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = data => {
    console.log(data);
    axios
      .post("/api/event", data)
      .then(response => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .catch(error => {
        console.error("Something went wrong!", error);
      });
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Event</label>
          <input
            className="mb-4 rounded bg-white px-8 pt-2 pb-2 shadow-md"
            type="text"
            placeholder="Event Name"
            name="event"
            {...register("eventName")}
          />
          <p className="text-red-700">{errors.eventName?.message}</p>
        </div>
        <div>
          <label>Description</label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="text"
            id="description"
            placeholder="Event description"
            name="description"
            {...register("description")}
          />
          <p className="text-red-700">{errors.description?.message}</p>
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            name="duration"
            id="duration"
            type="text"
            placeholder="Event duration"
            {...register("duration")}>
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
            <option value={90}>90 minutes</option>
            <option value={120}>120 minutes</option>
          </select>
          <p className="text-red-700">{errors.duration?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            name="eventDate"
            type="date"
            id="eventDate"
            min="2022-09-20"
            max="2032-12-31"
            {...register("eventDate")}
          />
          <p className="text-red-700">{errors.eventDate?.message}</p>
        </div>

        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
