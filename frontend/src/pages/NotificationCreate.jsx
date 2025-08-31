import { useEffect, useState } from 'react';
import FormRenderer from '../components/FormRenderer';
import Loader from '../components/Loader';
import { getNotificationFormData } from '../api';
import '../styles/NotificationCreate.css'

export default function NotificationCreate() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchFormData = async () => {
      const data = await getNotificationFormData();
      setFormData(data);
    };

    fetchFormData();
  }, []);

  if (!formData) {
    return <Loader />;
  }

  return (
    <div className='notification-create'>
      <h1>Criar Notificação</h1>
      <FormRenderer formData={formData} status="CREATE" />
      <button type="submit">Criar</button>
    </div>
  )
}
