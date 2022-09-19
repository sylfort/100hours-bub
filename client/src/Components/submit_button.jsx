
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

function SubmitButton({ children, actions = [], ...props }, ref) {
  const {handleSubmit} = useForm();

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
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      ref={ref}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </button>
  );
}

export default forwardRef(SubmitButton);
