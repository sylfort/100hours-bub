import React from 'react';
import FormMain from "../components/FormMain";
import FormDate from "../components/formDate";
import Form from "../components/form";
import { useForm } from "react-hook-form";
import { forwardRef } from "react";
import axios from 'axios';

function FormFinal({ children, actions = [], ...props }, ref) {
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
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormMain/>
      <FormDate name="gregorian" />
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {/* {children} */}
      Submit
    </button>
      </Form>
  );
}

export default forwardRef(FormFinal);
