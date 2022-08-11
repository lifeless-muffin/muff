import React, { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionHeading from "../../elements/headings/SectionHeading";
import ContactFormInput from "../../elements/inputs/ContactFormInput";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const formData = [
  {
    name: "name",
    label: "Name",
    placeholder: 'Ex: John Doe',
    validation: {
      minLength: 2,
      maxLength: 30,
      required: true
    }
  }
]

export default function App() {
  const { register, handleSubmit, formState} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  const errorsObject = useMemo(() => formState.errors, [formState])

  useEffect(() => {
    console.log(errorsObject)
  }, [errorsObject])

  return (
    <section className="contact-section">
      <div className="contact-header-section">
        <SectionHeading text="Get in touch"/>
      </div>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {formData.map((formInputField, inputIndex) => (
          <ContactFormInput 
            {...formInputField} 
            register={register} 
            errors={errorsObject} 
            key={inputIndex}
            inputIndex={inputIndex}
          />
        ))}   
        <input type="submit" />
      </form>
    </section>
  );
}