import '../styles/ErrorMessage.css'

export default function ErrorMessage({ message = 'Algo deu errado.' }) {
  return <div className='error-message' role="alert">{message}</div>
}