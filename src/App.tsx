import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HTMLPage from './pages/html/HTMLPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/html" element={<HTMLPage />} />
      </Routes>
    </Router>
  )
}

export default App
