import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getNotifications } from '../services/api';
import formatDate from '../utils/formatDate';
import '../styles/NotificationList.css';

export default function NotificationsList() {
  const [dataInTheForm, setDataInTheForm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

  useEffect(() => {
    const fetchFormData = async () => {
      const notificationResponse = await getNotifications();
      setDataInTheForm(notificationResponse.items);
    };

    fetchFormData();
  }, []);

  const statusConvert = (status) => {
    switch (status) {
      case 'VALIDACAO': return 'Validação';
      case 'CONCLUIDO': return 'Concluído';
      case 'EM_ANDAMENTO': return 'Em Andamento';
      default: return status;
    }
  };

  // Paginação
  const totalPages = dataInTheForm ? Math.ceil(dataInTheForm.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = dataInTheForm?.slice(startIndex, startIndex + itemsPerPage);

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
          paginatedData?.map(notification => (
            <tr key={notification.id}>
              <td>{notification.title}</td>
              <td>
                {notification.description.slice(0, 32)}
                {notification.description.length > 32 ? '...' : ''}
              </td>
              <td>{formatDate(notification.hearingDate)}</td>
              <td>{notification.notifiedName || '-'}</td>
              <td className={`status ${notification.status.toLowerCase()}`}>
                {statusConvert(notification.status)}
              </td>
              <td>
                <Link to={`/notificacoes/${notification.id}`} className='link-detail'>
                  Ver Detalhes
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );

  const pagination = (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            className={currentPage === pageNum ? "active" : ""}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="notifications-list">
      <div className='header-list-notification'>
        <h1>Lista de Notificações</h1>
        <Link to="/notificacoes/nova">+ Nova Notificação</Link>
      </div>
      { dataInTheForm === null ? (
        <Loader />
      ) : dataInTheForm.length === 0 ? (
        <p className='notification-notfound'>Nenhuma notificação encontrada.</p>
      ) : dataInTheForm.message ? (
        <ErrorMessage message={dataInTheForm.message} />
      ) : (
        <div>
          <div className='notification-list'>{tabelaData}</div>
          {pagination}
        </div>
      )}
    </div>
  );
}
