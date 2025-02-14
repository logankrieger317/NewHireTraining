import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import HTMLPage from './pages/html/HTMLPage';
import CSSPage from './pages/css/CSSPage';
import JavaScriptPage from './pages/javascript/JavaScriptPage';
import ReactPage from './pages/react/ReactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/html/*" element={<HTMLPage />} />
          <Route path="/css/*" element={<CSSPage />} />
          <Route path="/javascript" element={<JavaScriptPage />} />
          <Route path="/react" element={<ReactPage />} />
          {/* Add other routes as they are implemented */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
