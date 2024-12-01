

import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle } from 'react-feather';
import axios from 'axios';

function CrisisManagement() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch alerts from API
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/feedback/alert/')  // Adjust the URL to your backend API endpoint
      .then((response) => {
        setAlerts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the alerts!', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gestion de Crise</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id} className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg mb-6">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-red-500">{alert.message}</h2>
                  <p className="text-red-700">
                    Feedback Type: {alert.feedback_type} - Feedback ID: {alert.feedback_id}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Actions Recommandées</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Publier une mise à jour sur les mesures prises</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Engager avec les clients concernés</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-yellow-50 px-4 py-2 rounded-lg">
                  <span className="text-yellow-800">Niveau d'Urgence : Moyen</span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-800">
                    {alert.is_traitement ? 'En cours de traitement' : 'Non traité'}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No alerts found.</p>
        )
      )}
    </div>
  );
}

export default CrisisManagement;
