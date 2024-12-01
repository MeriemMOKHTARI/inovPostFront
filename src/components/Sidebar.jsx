import React from 'react';
import { Home, BarChart2, Mail, CreditCard, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="bg-blue-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <img src="/algerie-poste-logo.png" alt="Algérie Poste" className="h-12" />
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800">
              <Home className="h-5 w-5" />
              <span>Tableau de Bord</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800">
              <BarChart2 className="h-5 w-5" />
              <span>Statistiques</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800">
              <Mail className="h-5 w-5" />
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800">
              <CreditCard className="h-5 w-5" />
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800">
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-4">
        <button
          onClick={onLogout}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800"
        >
          <LogOut className="h-5 w-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

