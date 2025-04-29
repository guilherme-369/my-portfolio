function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="text-indigo-500 text-lg">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold my-4">Guilherme Passos.</h1>
      <h2 className="text-4xl md:text-6xl font-semibold text-gray-600 dark:text-gray-400 mb-6">
        I build impactful digital solutions.
      </h2>
      <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        I'm a software developer passionate about creating beautiful, functional, and accessible digital experiences.
      </p>
      <div className="mt-8">
        <a href="#projects" className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition">
          View Projects
        </a>
      </div>
    </div>
  );
}

export default Home;
