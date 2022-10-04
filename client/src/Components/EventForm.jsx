import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function EventForm() {

  const queryClient = useQueryClient()

  const formSchema = yup.object().shape({
    eventName: yup.string().required("Your event name is required."),
    description: yup.string(),
    duration: yup.number().typeError('Event duration must be a number.').positive().integer().required("The event duration is required."),
    eventDate: yup.string().required("The event date is required."),
    eventTime: yup.string().required("The event time is required."),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

  const { mutate, isLoading } = useMutation((data) => axios.post('/event', data),
    {
      onSuccess: () => queryClient.invalidateQueries(['event']),
    })

  // .then(response => {
  //   console.log("Status: ", response.status);
  //   console.log("Data: ", response.data);
  //   }).catch(error => {
  //   console.error('Something went wrong!', error);
  //   }),

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  }

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create a new event
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Input your preferred date and time for your event.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-8 mx-auto">
                      <label
                        htmlFor="event"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Name
                      </label>
                      <input
                        type="text"
                        name="event"
                        id="event"
                        className="md:px-20 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="Event Name"
                        {...register("eventName")} />
                      <p className='text-red-700'>{errors.eventName?.message}</p>
                    </div>

                    <div className="col-span-8 mx-auto">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        className="md:px-20 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        id="description"
                        placeholder="Event Description"
                        name="description"
                        {...register("description")} />
                      <p className='text-red-700'>{errors.description?.message}</p>
                    </div>

                    <div className="col-span-8 mx-auto">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <select className="md:px-20 mt-1 block w-full py-2 px-8 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      <p className='text-red-700'>{errors.duration?.message}</p>
                    </div>

                    <div className="col-span-8 mx-auto">
                      <label
                        className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input className="md:px-20 sm:px-12 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        name="eventDate"
                        type="date"
                        id="eventDate"
                        min="2022-09-20"
                        max="2032-12-31"
                        defaultValue={today}
                        {...register("eventDate")} />
                      <p className='text-red-700'>{errors.eventDate?.message}</p>
                    </div>

                    <div className="col-span-8 mx-auto">
                      <label
                        htmlFor="eventTime"
                        className="block text-sm font-medium text-gray-700">
                        Event Time
                      </label>
                      <input
                        className="md:px-20 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="time"
                        min="00:00" max="23:59"
                        id="eventTime"
                        name="eventTime"
                        {...register("eventTime")} />
                      <p className='text-red-700'>{errors.description?.message}</p>
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>


    </>
  );
}
