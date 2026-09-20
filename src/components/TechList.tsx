import type { Technology } from '../types'
import { TechCard } from './TechCard'

interface TechListProps {
  technologies: Technology[]
  stack: Technology[]
  handleAddToStack: (tech: Technology) => void
}

export function TechList({ technologies, stack, handleAddToStack }: TechListProps) {
  return <div className="grid">{technologies.map((tech) => <TechCard key={tech.id} tech={tech} isAdded={stack.some((item) => item.id === tech.id)} handleAddToStack={handleAddToStack} />)}</div>
}
