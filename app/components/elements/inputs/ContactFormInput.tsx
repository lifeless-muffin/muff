type Props = {
  label: string,
  name: string,
  placeholder: string,
  inputIndex: number,
  errors: any,
  validation: any
  register: any,
}

export default function ContactFormInput(props: Props) {

  // destructure props
  const { label, name, errors, validation, register } = props

  return (
    <div className="contact-form-input-container">
      <label className="contact-form-input-label" htmlFor={label.toLowerCase()}>
        {label}
      </label>

      <input
        name={label.toLowerCase()}
        className="contact-form-input"
        {...register(name, {...validation})}
      />

      {errors?.[name]?.type}
    </div>
  )
}