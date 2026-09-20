import { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MainLayout } from './components/MainLayout'
import { Navbar } from './components/Navbar'
import type { Technology } from './types'

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [stack, setStack] = useState<Technology[]>([])
  const stackRef = useRef<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch('/data.json')
        if (!response.ok) throw new Error('Technology data could not be loaded.')
        const data: Technology[] = await response.json()
        setTechnologies(data)
      } catch {
        setError('Unable to load technologies. Please refresh the page and try again.')
      } finally {
        setLoading(false)
      }
    }
    void loadData()
  }, [])

  const handleAddToStack = (tech: Technology) => {
    if (stackRef.current.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }
    const nextStack = [...stackRef.current, tech]
    stackRef.current = nextStack
    setStack(nextStack)
    toast.success(`${tech.name} added to your stack!`)
  }

  const handleRemoveFromStack = (id: string) => {
    const tech = stackRef.current.find((item) => item.id === id)
    if (!tech) return
    const nextStack = stackRef.current.filter((item) => item.id !== id)
    stackRef.current = nextStack
    setStack(nextStack)
    toast.info(`${tech.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    if (stackRef.current.length === 0) return
    stackRef.current = []
    setStack([])
    toast.success('All technologies removed from your stack.')
  }

  return <><Navbar /><main><Hero /><MainLayout technologies={technologies} stack={stack} loading={loading} error={error} handleAddToStack={handleAddToStack} handleRemoveFromStack={handleRemoveFromStack} handleRemoveAll={handleRemoveAll} /></main><Footer /><ToastContainer position="bottom-right" theme="light" autoClose={2600} /></>
}
