import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function FormMain () {

const formSchema = yup.object().shape({
  eventName: yup.string().required("Your event name is required."),
  description: yup.string(),
  duration: yup.string().required("The event duration is required."),
  eventDate: yup.date().nullable()
  .min(new Date(), "Start Date must be later than today").required("The event date is required."),
  eventTime: yup.string().length(5)
  .matches(/(\d){2}:(\d){2}/, 'Hour must have this pattern "00:00"').required("The event date is required."),
})

const {register, formState:{errors}} = useForm({
  resolver: yupResolver(formSchema)
});

    return (
        <>
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
         <select className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4' name="duration"
         type="text"
         placeholder="Event duration"
         {...register("duration")}>
        <option value="15 minutes">15 minutes</option>
        <option value="30 minutes">30 minutes</option>
        <option value="45 minutes">45 minutes</option>
        <option value="60 minutes">60 minutes</option>
        <option value="90 minutes">90 minutes</option>
        <option value="120 minutes">120 minutes</option>
      </select>
      <p className= 'text-red-700'>{errors.duration?.message}</p>
      </div>
      {/* <div>
        
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4'
        name="eventDate"
         type="text"
         placeholder="Event date"
         {...register("eventDate")} />
         <p className= 'text-red-700'>{errors.eventDate?.message}</p>
      </div> */}

      <div>
        <label>Time</label>
        <input className='bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4' 
        name="eventTime" 
        type="time" 
        {...register("eventTime")} />
         <p className= 'text-red-700'>{errors.eventTime?.message}</p>
      </div>

      {/* <div>
      <DatePicker
                value={""}
                onChange={(date) => {
                  onChange(date?.isValid ? date : "");
                }}
                format={language === "en" ? "MM/DD/YYYY" : "YYYY/MM/DD"}
              />
              <p>Submitted Date:  {submittedDate?.format?.("MMMM D YYYY")}</p>
              {errors && errors[name] && errors[name].type === "required" && (
                //if you want to show an error message
                <p className= 'text-red-700'>{errors.eventTime?.message}</p>
              )}
      </div> */}
    </>
    )
}

export default forwardRef(FormMain);