function ProjectCard({ title, description, tech, repoLink, liveLink }) {
    return (
      <div className="border rounded-lg p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm mb-4"><strong>Technologies:</strong> {tech}</p>
        <div className="flex gap-4">
          <a href={repoLink} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
          {liveLink && <a href={liveLink} target="_blank" className="text-blue-500 hover:underline">Live</a>}
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  