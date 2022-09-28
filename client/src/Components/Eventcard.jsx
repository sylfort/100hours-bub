import axios from "axios";
import { useState, useEffect, useContext, useCallback } from 'react';
import { useForm } from "react-hook-form";
import { AppContext } from "../App"

  
export default function Eventcard({data}) {
    
    const { user } = useContext(AppContext);

    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = (e) => {
        console.log("Here:", e, user);
      axios.post('/sendEmail', {e, user})
      .then(response => {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      }).catch(error => {
      console.error('Something went wrong!', error);
      });
    }    

    return (
        <>
        {data?.events?.map((e, index) => (
            <div key={index} className="bg-white my-2 border-double border-4 border-blue-500 shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Event Information</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Event name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.eventName}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.description}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Organizer</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.user}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.email}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Duration</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.duration} minutes</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Date</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.eventDate}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Time</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{e.eventTime}</dd>
                    </div>
        
                    <div className="py-4 sm:py-5 sm:grid sm:gap-4 sm:grid-cols-2 sm:px-6">
                        <div className="px-4 py-3 bg-gray-50 sm:gap-4 sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Suggest Reschedule
                                </button>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 sm:gap-4 sm:px-6">
        
                                <button
                                    onClick={()=>{
                                        handleSubmit(onSubmit(e));
                                    }
                                        
                                    }
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Join
                                </button>
                        </div>
                    </div>
                    
                </dl>
                </div>
          </div>
          ))}
        </>
    )
  }