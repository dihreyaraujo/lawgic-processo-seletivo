import '../styles/FormRenderer.css';

export default function FormRenderer({ formData }, status) {
  return (
    <form className='form-renderer'>
      {formData[status].fields.map((field, index) => (
        <div key={index} className='form-field'>
          <label>{field.label}</label>
          <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} disabled={field.disabled} />
        </div>
      ))}
    </form>
  )
}
