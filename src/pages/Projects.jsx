import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
