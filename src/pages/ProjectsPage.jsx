import  projects  from '../data/Projects.js';
import ProjectCard from '../components/projects/ProjectCard.jsx';

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
