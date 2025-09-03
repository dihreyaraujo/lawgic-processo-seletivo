import '../styles/FormRenderer.css';

export default function FormRenderer({ formData, onSubmit, submitLabel, setState, defaultValues, validation, actualStatus }) {
  return (
    <div className='form-renderer-container'>
      <form className='form-renderer'>
        <div>
          {formData.fields.map((field, index) => (
            <div key={index} className='form-field'>
              <label>{field.label}</label>
              <input onChange={(e) => setState(e)} minLength={field.minLength || undefined} maxLength={field.maxLength || undefined} pattern={field.pattern || undefined} type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} readOnly={field.readOnly || false} defaultValue={defaultValues ? defaultValues[field.name] || '' : ''} />
            </div>
          ))}
        </div>
        { submitLabel ? <button onClick={(e) => onSubmit(e)} type="submit">{submitLabel}</button> : ''}
      </form>
      {actualStatus === 'VALIDACAO' && (
        <div className='choice-option'>
          <h3>Necessita de informações adicionais?</h3>
          <div>
            <button onClick={(e) => validation(e)} type='button'>Sim</button>
            <button onClick={(e) => validation(e)} type='button'>Não</button>
          </div>
        </div>
      )}
    </div>
  )
}
