import { ModernHeader } from './ModernHeader'
import { ModernFooter } from './ModernFooter'

export function ModernLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ModernHeader />
      <main className="flex-1">
        {children}
      </main>
      <ModernFooter />
    </div>
  )
}
