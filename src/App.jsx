import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Services } from './pages/Services.jsx'
import { Leadership } from './pages/Leadership.jsx'
import { Clients } from './pages/Clients.jsx'
import { Contact } from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
