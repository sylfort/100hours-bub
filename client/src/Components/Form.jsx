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

      <div>
      <label htmlFor="event" className="block text-sm font-medium text-gray-700">
        Event
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="event"
          id="event"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Event Name"
          {...register("eventName")} />
         <p className= 'text-red-700'>{errors.eventName?.message}</p>
      </div>
    </div>

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
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
        type="text"
         placeholder="Event description"
         name="description"
         {...register("description")} />
        <p className= 'text-red-700'>{errors.description?.message}</p>
      </div>
      <div>
        <label>Duration</label>
         <select className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4' name="duration"
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
        <label>Date</label>
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
        name="eventDate"
        type="date"
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