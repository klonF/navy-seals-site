import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="glass header">
      <h1 className="logo">NAVY SEALS</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/achievements">Достижения</Link></li>
          <li><Link to="/gallery">Галерея</Link></li>

        </ul>
      </nav>
    </header>
  )
}
