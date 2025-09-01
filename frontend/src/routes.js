import { Routes, Route, Navigate } from 'react-router-dom'
import NotificationsList from './pages/NotificationsList'
import NotificationCreate from './pages/NotificationCreate'
import NotificationDetail from './pages/NotificationDetail'

export default function RoutesRoot() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/notificacoes" replace />} />
      <Route path="/notificacoes" element={<NotificationsList />} />
      <Route path="/notificacoes/nova" element={<NotificationCreate />} />
      <Route path="/notificacoes/:id" element={<NotificationDetail />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}