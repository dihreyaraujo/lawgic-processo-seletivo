import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormRenderer from '../components/FormRenderer';
import Loader from '../components/Loader';
import { getNotificationFormData, createNotification } from '../services/api';
import '../styles/NotificationCreate.css'

export default function NotificationCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hearingDate, setHearingDate] = useState('');

  useEffect(() => {
    const fetchFormData = async () => {
      const data = await getNotificationFormData();
      setFormData(data);
    };

    fetchFormData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target.closest("form"); 
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const response = await createNotification({ title, description, hearingDate, status: 'EM_ANDAMENTO' });
    if ('id' in response) navigate(`/notificacoes/${response.id}`)
  }

  const handleFieldChange = ({target}) => {
    const { name, value } = target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'hearingDate':
        setHearingDate(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className='notification-create'>
      <h1>Criar Notificação</h1>
      {!formData ? <Loader /> : (
        <FormRenderer formData={formData['CREATE']} onSubmit={onSubmit} submitLabel="Criar" setState={handleFieldChange} />
      )}
    </div>
  )
}
