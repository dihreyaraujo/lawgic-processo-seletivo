import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getNotifications } from '../services/api';
import formatDate from '../utils/formatDate';
import '../styles/NotificationList.css';

export default function NotificationsList() {
  const [dataInTheForm, setDataInTheForm] = useState(null);

  useEffect(() => {
    const fetchFormData = async () => {
      const notificationResponse = await getNotifications();
      console.log(notificationResponse);
      setDataInTheForm(notificationResponse.items);
    };

    fetchFormData();
  }, []);

  const tabelaData = (
    <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Data da Audiência</th>
            <th>Notificado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            dataInTheForm?.map(notification => (
              <tr key={notification.id}>
                <td>{notification.title}</td>
                <td>{notification.description.slice(0,32)}{notification.description.length > 32 ? '...' : ''}</td>
                <td>{formatDate(notification.hearingDate)}</td>
                <td>{notification.notifiedName || '-'}</td>
                <td className={`status ${notification.status.toLowerCase()}`}>{notification.status}</td>
                <td><Link to={`/notificacoes/${notification.id}`} className='link-detail'>Ver Detalhes</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
  )

  return (
    <div className="notifications-list">
      <div className='header-list-notification'>
        <h1>Lista de Notificações</h1>
        <Link to="/notificacoes/nova">+ Nova Notificação</Link>
      </div>
      { dataInTheForm === null ? <Loader /> : dataInTheForm.length === 0 ? <p>Nenhuma notificação encontrada.</p> : dataInTheForm.errorMessage ? <ErrorMessage message={dataInTheForm.errorMessage} /> : <div className='notification-list'>{tabelaData}</div> }
    </div>
  );
}
