import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Gallery from './pages/Gallery'
import './styles.css';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/gallery' element={<Gallery />} />
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
