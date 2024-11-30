import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CrisisManagement from './pages/CrisisManagement';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crisis-management" element={<CrisisManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

