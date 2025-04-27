import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <Link to="/" className="text-xl font-bold">Guilherme Passos</Link>
      <nav className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle/>
      </nav>
    </header>
  )
}

export default Header
