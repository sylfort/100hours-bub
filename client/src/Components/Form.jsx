import { FormProvider, useForm } from "react-hook-form";

export default function Form({ children, style = {}, ...props }) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div {...props}>
        {children}
      </div>
    </FormProvider>
  );
}
