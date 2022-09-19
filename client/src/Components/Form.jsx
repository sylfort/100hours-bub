import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = () => {
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
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
        type="text"
         placeholder="Event description"
         name="description"
         {...register("description")} />
        <p className= 'text-red-700'>{errors.description?.message}</p>
      </div>
      <div>
        <label>Duration</label>
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
         name="duration"
         type="text"
         placeholder="Event duration"
         {...register("duration")} />
         <p className= 'text-red-700'>{errors.duration?.message}</p>
      </div>
      <div>
        <label>Date</label>
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
        name="eventDate"
         type="text"
         placeholder="Event date"
         {...register("eventDate")} />
         <p className= 'text-red-700'>{errors.eventDate?.message}</p>
      </div>
      
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Submit</button>
    </form>
    )
}