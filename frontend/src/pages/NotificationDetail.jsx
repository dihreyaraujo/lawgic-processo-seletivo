import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import FormRenderer from "../components/FormRenderer";
import { getNotificationFormData, getNotificationById, createNotification, updateStatus } from '../services/api';
import '../styles/NotificationDetail.css';

export default function NotificationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hearingDate, setHearingDate] = useState('');
  const [status, setStatus] = useState('');
  const [notifiedName, setNotifiedName] = useState('');
  const [notifiedEmail, setNotifiedEmail] = useState('');
  const [notifiedPhone, setNotifiedPhone] = useState('');
  const [notifiedAddress, setNotifiedAddress] = useState('');

  const setDataInTheForm = (data) => {
    setTitle(data.title);
    setDescription(data.description);
    setHearingDate(data.hearingDate);
    setStatus(data.status);
    setNotifiedName(!data.notifiedName && '');
    setNotifiedEmail(!data.notifiedEmail && '');
    setNotifiedPhone(!data.notifiedPhone && '');
    setNotifiedAddress(!data.notifiedAddress && '');
  };

  useEffect(() => {
    const fetchFormData = async () => {
      const formResponse = await getNotificationFormData();
      setFormData(formResponse);
      const notificationResponse = await getNotificationById(id);
      setDataInTheForm(notificationResponse.items);
    };

    fetchFormData();
  }, []);

  const formValues = {
    title,
    description,
    hearingDate,
    status,
    notifiedName,
    notifiedEmail,
    notifiedPhone,
    notifiedAddress
  };

  const onSubmit = async () => {
    setStatus('VALIDACAO');
      const response = await createNotification({...formValues, status: 'VALIDACAO'});
      setDataInTheForm(response);
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
      case 'notifiedName':
        setNotifiedName(value);
        break;
      case 'notifiedEmail':
        setNotifiedEmail(value);
        break;
      case 'notifiedPhone':
        setNotifiedPhone(value);
        break;
      case 'notifiedAddress':
        setNotifiedAddress(value);
        break;
      default:
        break;
    }
  };

  const onSubmitValidation = async ({target}) => {
    if (target.innerText === 'Sim') {
      setStatus('EM_ANDAMENTO');
      await updateStatus(id, 'EM_ANDAMENTO');
    } else {
      await updateStatus(id, 'CONCLUIDO');
      navigate('/notificacoes');
    }
  };

  return (
    <div className='notification-detail'>
      <h1>Detalhes da Notificação {id}</h1>
      <Loader />
      <ErrorMessage />
      <FormRenderer formData={formData[status]} defaultValues={formValues} setState={handleFieldChange} onSubmit={onSubmit} submitLabel={status === 'VALIDACAO' ? '' : 'Atualizar'} validation={onSubmitValidation} />
    </div>
  )
}
