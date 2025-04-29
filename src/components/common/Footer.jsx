function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/seuusuario" target="_blank" className="hover:text-indigo-500 transition">
          GitHub
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" className="hover:text-indigo-500 transition">
          LinkedIn
        </a>
        <a href="mailto:seuemail@email.com" className="hover:text-indigo-500 transition">
          Email
        </a>
      </div>
      <p>© {new Date().getFullYear()} Guilherme Passos. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
