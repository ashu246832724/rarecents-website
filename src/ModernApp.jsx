import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/modern.css'
import { ModernLayout } from './components/ModernLayout'
import { ModernHome } from './pages/ModernHome'
import { ModernAbout } from './pages/ModernAbout'
import { ModernServices } from './pages/ModernServices'
import { ModernLeadership } from './pages/ModernLeadership'
import { ModernClients } from './pages/ModernClients'
import { ModernContact } from './pages/ModernContact'

function ModernApp() {
  return (
    <BrowserRouter>
      <ModernLayout>
        <Routes>
          <Route path="/" element={<ModernHome />} />
          <Route path="/about" element={<ModernAbout />} />
          <Route path="/services" element={<ModernServices />} />
          <Route path="/leadership" element={<ModernLeadership />} />
          <Route path="/clients" element={<ModernClients />} />
          <Route path="/contact" element={<ModernContact />} />
        </Routes>
      </ModernLayout>
    </BrowserRouter>
  )
}

export default ModernApp
