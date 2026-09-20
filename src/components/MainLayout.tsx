import type { Technology } from '../types'
import { Sidebar } from './Sidebar'
import { TechList } from './TechList'

interface MainLayoutProps {
  technologies: Technology[]
  stack: Technology[]
  loading: boolean
  error: string | null
  handleAddToStack: (tech: Technology) => void
  handleRemoveFromStack: (id: string) => void
  handleRemoveAll: () => void
}

export function MainLayout(props: MainLayoutProps) {
  const { technologies, stack, loading, error, handleAddToStack, handleRemoveFromStack, handleRemoveAll } = props
  return (
    <section className="explore" id="technologies">
      <div className="section-title"><p className="eyebrow">CURATE YOUR TOOLKIT</p><h2>Explore the <span>Technologies</span></h2><p>Pick the tools you love and build your ideal stack.</p></div>
      {loading ? <div className="loading"><span /> Loading technologies...</div> : error ? <div className="load-error">{error}</div> : <div className="content"><TechList technologies={technologies} stack={stack} handleAddToStack={handleAddToStack} /><Sidebar stack={stack} handleRemoveFromStack={handleRemoveFromStack} handleRemoveAll={handleRemoveAll} /></div>}
    </section>
  )
}
