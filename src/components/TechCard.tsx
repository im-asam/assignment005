import type { Technology } from '../types'

interface TechCardProps {
  tech: Technology
  isAdded: boolean
  handleAddToStack: (tech: Technology) => void
}

export function TechCard({ tech, isAdded, handleAddToStack }: TechCardProps) {
  return (
    <article className="tech-card">
      <div className="card-top"><img src={tech.icon} alt={`${tech.name} logo`} /><span className="badge">{tech.badge}</span></div>
      <h3>{tech.name}</h3>
      <p>{tech.description}</p>
      <div className="meta"><span className="chip">{tech.category}</span><span>{tech.difficulty}</span><span className="rating">★ {tech.rating}</span></div>
      <button className="stack-button" disabled={isAdded} onClick={() => handleAddToStack(tech)}>{isAdded ? '✓ Added to Stack' : 'Add to Stack'}</button>
    </article>
  )
}
