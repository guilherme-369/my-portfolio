import { motion } from 'framer-motion';

function ProjectCard({ title, description, techStack, githubLink, liveLink }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 50 }}        // inicia invisível e deslocado
      animate={{ opacity: 1, y: 0 }}          // anima para aparecer normalmente
      transition={{ duration: 0.5, ease: 'easeOut' }} // tempo de animação
      whileHover={{ scale: 1.05 }}            // ao passar o mouse, aumenta de tamanho
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="text-sm bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 rounded-full px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {githubLink && (
          <a href={githubLink} target="_blank" className="text-indigo-500 hover:underline">
            GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" className="text-indigo-500 hover:underline">
            Live Site
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
