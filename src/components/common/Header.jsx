import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="fixed w-full px-6 py-4 flex justify-between items-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-md z-50">
      <div className="font-bold text-xl">
        <a href="#home">Guilherme</a>
      </div>
      <nav className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-indigo-500 transition">About</a>
        <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
        <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;
