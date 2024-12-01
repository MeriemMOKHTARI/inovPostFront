import { Link, useLocation } from 'react-router-dom';
import { BarChart2, AlertTriangle, MessageSquare, LogOut } from 'react-feather';
import img from "/src/assets/logo-1.png"
function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <img src={img} alt="Algerie Post" className="h-23" />
        </div>
        <nav className="mt-8">
          <Link
            to="/"
            className={`flex items-center px-6 py-3 text-gray-700 ${
              location.pathname === '/' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
            }`}
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            <span>Tableau de Bord</span>
          </Link>
       
          <Link
            to="/feedback-management"
            className={`flex items-center px-6 py-3 text-gray-700 ${
              location.pathname === '/feedback-management' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            <span>Gestion de Feedback</span>
          </Link>
          <Link
            to="/crisis-management"
            className={`flex items-center px-6 py-3 text-gray-700 ${
              location.pathname === '/crisis-management' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
            }`}
          >
            <AlertTriangle className="w-5 h-5 mr-3" />
            <span>Gestion des risques</span>
          </Link>


          <Link
            to="/gestion-users"
            className={`flex items-center px-6 py-3 text-gray-700 ${
              location.pathname === '/gestion-users' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
            }`}
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            <span>Gestion Users</span>
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button className="flex items-center px-6 py-3 text-gray-700 w-full">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default Layout;
