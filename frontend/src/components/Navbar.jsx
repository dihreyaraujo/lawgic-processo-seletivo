import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link className='navbar-logo' to="/">Lawgic</Link>
      <div>
        <NavLink className='navbar-links' to="/notificacoes">Notificações</NavLink>
        <NavLink className='navbar-links' to="/notificacoes/nova">Criar</NavLink>
      </div>
    </nav>
  )
}