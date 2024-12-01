import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FeedbackItem from '../components/FeedbackItem';

const initialSentimentData = [
  { name: 'Jan', all: { positif: 300, neutre: 200, negatif: 250 }, qr: { positif: 100, neutre: 80, negatif: 70 }, form: { positif: 150, neutre: 100, negatif: 130 }, social: { positif: 50, neutre: 20, negatif: 50 } },
  { name: 'Feb', all: { positif: 200, neutre: 180, negatif: 220 }, qr: { positif: 80, neutre: 70, negatif: 90 }, form: { positif: 100, neutre: 90, negatif: 110 }, social: { positif: 20, neutre: 20, negatif: 20 } },
  { name: 'Mar', all: { positif: 280, neutre: 190, negatif: 180 }, qr: { positif: 120, neutre: 80, negatif: 60 }, form: { positif: 130, neutre: 90, negatif: 100 }, social: { positif: 30, neutre: 20, negatif: 20 } },
  { name: 'Apr', all: { positif: 250, neutre: 220, negatif: 170 }, qr: { positif: 90, neutre: 100, negatif: 50 }, form: { positif: 120, neutre: 100, negatif: 100 }, social: { positif: 40, neutre: 20, negatif: 20 } },
  { name: 'May', all: { positif: 320, neutre: 200, negatif: 250 }, qr: { positif: 130, neutre: 90, negatif: 100 }, form: { positif: 150, neutre: 90, negatif: 120 }, social: { positif: 40, neutre: 20, negatif: 30 } },
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
  {
    type: 'social',
    message: 'Excellente expérience avec le nouveau service en ligne',
    response: 'Nous sommes ravis que vous appréciez notre nouveau service !',
    date: '30 July 2023',
    sentiment: 'positive'
  }
];

const filterChartData = (data, filter) => {
  return data.map(item => ({
    name: item.name,
    ...item[filter]
  }));
};

function SourceDropdown({ onSelect, currentValue }) {
  const [isOpen, setIsOpen] = useState(false);

  const sources = [
    { value: 'all', label: 'Toute les sources' },
    { value: 'qr', label: 'Code QR' },
    { value: 'form', label: 'Formulaire' },
    { value: 'social', label: 'Web Scraping' }
  ];

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        {sources.find(source => source.value === currentValue)?.label || 'Toute les sources'}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {sources.map((source) => (
              <button
                key={source.value}
                onClick={() => {
                  onSelect(source.value);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {source.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Dashboard() {
  const [feedbackFilter, setFeedbackFilter] = useState('all');
  const [chartFilter, setChartFilter] = useState('all');
  const [filteredChartData, setFilteredChartData] = useState(initialSentimentData);

  useEffect(() => {
    setFilteredChartData(filterChartData(initialSentimentData, chartFilter));
  }, [chartFilter]);

  const filteredFeedback = feedbackItems.filter(item =>
    feedbackFilter === 'all' || item.type === feedbackFilter
  );

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
          <SourceDropdown onSelect={setFeedbackFilter} currentValue={feedbackFilter} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Derniers Retours Clients</h2>
        <div className="space-y-4">
          {filteredFeedback.map((item, index) => (
            <FeedbackItem key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Analyse des Sentiments</h2>
          <div className="relative z-50">
            <SourceDropdown onSelect={setChartFilter} currentValue={chartFilter} />
          </div>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredChartData}>
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

