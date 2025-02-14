import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import HTMLPage from './pages/html/HTMLPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/html" element={<HTMLPage />} />
          {/* Add other routes as they are implemented */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
