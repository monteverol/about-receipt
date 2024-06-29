import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/home'
import './App.css'
import About from './about/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
