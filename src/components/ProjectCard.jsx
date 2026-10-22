import Icon from './Icon'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card reveal ${project.featured ? 'featured' : ''}`}>
      <div className="project-card-topline">
        <span>{project.index} / 03</span>
        {project.featured && <span className="featured-label"><i /> projeto em destaque</span>}
      </div>

      <ProjectVisual type={project.visual} title={project.title} />

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <p className="project-eyebrow">{project.eyebrow}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-number" aria-hidden="true">{project.index}</span>
        </div>
        <p>{project.description}</p>
        <p className="project-contribution"><strong>Participação:</strong> {project.contribution}</p>
        <ul className="tag-list" aria-label="Tecnologias e características confirmadas">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          {project.liveUrl && (
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver projeto <Icon name="external" size={17} />
            </a>
          )}
          {project.githubUrl && (
            <a className="text-link secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} /> GitHub
            </a>
          )}
          {project.unavailableLink && (
            <span className="unavailable-link" title={project.unavailableLink.url}>
              <i aria-hidden="true" /> {project.unavailableLink.label}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
