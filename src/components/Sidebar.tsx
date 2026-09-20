import { FiX } from 'react-icons/fi'
import type { Technology } from '../types'

interface SidebarProps {
  stack: Technology[]
  handleRemoveFromStack: (id: string) => void
  handleRemoveAll: () => void
}

export function Sidebar({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) {
  const countLabel = stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`

  return (
    <aside className="stack-panel">
      <div><h3>Your Stack</h3><p>{countLabel}</p></div>
      {stack.length === 0 ? <div className="empty">Your stack is empty.</div> : <div className="stack-list">{stack.map((tech) => <div className="stack-item" key={tech.id}><img src={tech.icon} alt="" /><div><b>{tech.name}</b><small>{tech.category}</small></div><button onClick={() => handleRemoveFromStack(tech.id)} aria-label={`Remove ${tech.name}`}><FiX /></button></div>)}</div>}
      {stack.length > 0 && <button className="remove-all" onClick={handleRemoveAll}>Remove All</button>}
    </aside>
  )
}
