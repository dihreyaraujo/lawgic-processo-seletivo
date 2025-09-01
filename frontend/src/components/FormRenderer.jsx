import '../styles/FormRenderer.css';

export default function FormRenderer({ formData, onSubmit, submitLabel, setState, defaultValues, validation }) {
  return (
    <div>
      <form className='form-renderer'>
        {formData.fields.map((field, index) => (
          <div key={index} className='form-field'>
            <label>{field.label}</label>
            <input onChange={(e) => setState(e)} type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} disabled={field.disabled} defaultValue={defaultValues[field.name] || ''} />
          </div>
        ))}
        { submitLabel ? <button onClick={onSubmit} type="submit">{submitLabel}</button> : ''}
      </form>
      {formData === 'VALIDACAO' && (
        <div>
          <h3>Necessita de informações adicionais?</h3>
          <button onClick={(e) => validation(e)} type='button'>Sim</button>
          <button onClick={(e) => validation(e)} type='button'>Não</button>
        </div>
      )}
    </div>
  )
}
