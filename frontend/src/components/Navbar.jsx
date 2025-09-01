import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import MacTrafficLights from './StyleWindow';
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/"><img className='navbar-logo' src={logo} alt="Lawgic" /></Link>
      <div>
        <MacTrafficLights />
      </div>
    </nav>
  )
}