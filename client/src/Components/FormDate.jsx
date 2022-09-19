import React, { forwardRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import DatePicker from "react-multi-date-picker";

function FormDate({ name, ...props }, ref) {
  const { field, fieldState } = useController({ name });
  const { register } = useFormContext();
  const { onChange, ...rest } = register(name);

  return (
    <>
    <label>Date</label>
      <DatePicker
        value={field.value}
        {...props}
        name={name}
        onChange={(date) =>
          onChange({ target: { name, value: date.toDate() } })
        }
        {...rest}
        ref={ref}
      />
      {fieldState.error && <p>{fieldState.error.message}</p>}
    </>
  );
}

export default forwardRef(FormDate);