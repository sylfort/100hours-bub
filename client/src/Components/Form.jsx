import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

function Form() {
    const formSchema = yup.object().shape({
        eventName: yup.string().required("Your event name is required."),
        description: yup.string(),
        duration: yup.number().typeError('Event duration must be a number.').positive().integer().required("The event duration is required."),
        eventDate: yup.string().required("The event date is required.")
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data) => {
      console.log(data);
      axios.post('/event', data)
      .then(response => {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      }).catch(error => {
      console.error('Something went wrong!', error);
      });
    }

    return (
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
      <div>

        <label>Event</label>
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
         type="text"
         placeholder="Event Name"
         name="event"
         {...register("eventName")} />
         <p className= 'text-red-700'>{errors.eventName?.message}</p>
      </div>
      <div>
        <label>Description</label>
        <input className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        type="text"
        id="description"
         placeholder="Event description"
         name="description"
         {...register("description")} />
        <p className= 'text-red-700'>{errors.description?.message}</p>
      </div>
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700">
            Duration
        </label>
         <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <p className= 'text-red-700'>{errors.duration?.message}</p>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700">
            Date
        </label>
        <input className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        name="eventDate"
        type="date"
        id="eventDate"
        min="2022-09-20"
        max="2032-12-31"
         {...register("eventDate")} />
         <p className= 'text-red-700'>{errors.eventDate?.message}</p>
      </div>
      
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Submit</button>
    </form>
      </div>

        
    )
}

export default Form;