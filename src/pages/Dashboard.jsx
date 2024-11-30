import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FeedbackItem from '../components/FeedbackItem';

const sentimentData = [
  { name: 'Jan', positif: 300, neutre: 200, negatif: 250 },
  { name: 'Feb', positif: 200, neutre: 180, negatif: 220 },
  { name: 'Mar', positif: 280, neutre: 190, negatif: 180 },
  { name: 'Apr', positif: 250, neutre: 220, negatif: 170 },
  { name: 'May', positif: 320, neutre: 200, negatif: 250 },
];

const feedbackItems = [
  {
    type: 'qr',
    message: 'Service rapide et efficace au guichet 3',
    response: 'Merci pour votre retour positif !',
    date: '29 July 2023',
    sentiment: 'positive'
  },
  {
    type: 'form',
    message: 'Temps d\'attente trop long pour le retrait',
    response: 'Nous travaillons à améliorer nos délais',
    date: '29 July 2023',
    sentiment: 'negative'
  },
  // Add more feedback items as needed
];

function Dashboard() {
  const [sourceFilter, setSourceFilter] = useState('all');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bienvenue à Algerie post</h1>
        <div className="flex items-center">
          <input
            type="date"
            className="px-4 py-2 border rounded-lg mr-4"
            defaultValue="2023-07-29"
          />
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-lg ${
                sourceFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
              onClick={() => setSourceFilter('all')}
            >
              Toute les sources
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                sourceFilter === 'qr' ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
              onClick={() => setSourceFilter('qr')}
            >
              Code QR
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Derniers Retours Clients</h2>
        <div className="space-y-4">
          {feedbackItems
            .filter(item => sourceFilter === 'all' || item.type === sourceFilter)
            .map((item, index) => (
              <FeedbackItem key={index} {...item} />
            ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Analyse des Sentiments</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Code QR
          </button>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="positif" stroke="#10B981" />
              <Line type="monotone" dataKey="neutre" stroke="#6B7280" />
              <Line type="monotone" dataKey="negatif" stroke="#EF4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

