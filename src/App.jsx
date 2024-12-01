import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard.jsx';
import FeedbackManagement from './pages/feedback-management.jsx';
import CrisisManagement from './pages/CrisisManagement';
import GestionUser from './pages/GestionUsers.jsx';

function App() {
  console.log('App component rendering');
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedback-management" element={<FeedbackManagement />} />
        <Route path="/crisis-management" element={<CrisisManagement />} />
        <Route path="/gestion-users" element={<GestionUser />} />
         
        
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;