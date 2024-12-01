import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, MessageSquare } from 'lucide-react';

const initialMonthlyData = {
  all: [
    { month: 'Jan', positive: 450, neutral: 380, negative: 300 },
    { month: 'Feb', positive: 440, neutral: 380, negative: 280 },
    { month: 'Mar', positive: 440, neutral: 380, negative: 360 },
    { month: 'Apr', positive: 280, neutral: 380, negative: 340 },
    { month: 'May', positive: 440, neutral: 200, negative: 290 },
    { month: 'Jun', positive: 450, neutral: 380, negative: 280 },
    { month: 'Jul', positive: 430, neutral: 380, negative: 280 },
    { month: 'Aug', positive: 440, neutral: 380, negative: 280 },
  ],
  qr: [
    { month: 'Jan', positive: 200, neutral: 150, negative: 100 },
    { month: 'Feb', positive: 220, neutral: 160, negative: 120 },
    { month: 'Mar', positive: 210, neutral: 170, negative: 130 },
    { month: 'Apr', positive: 180, neutral: 140, negative: 110 },
    { month: 'May', positive: 230, neutral: 180, negative: 140 },
    { month: 'Jun', positive: 240, neutral: 190, negative: 150 },
    { month: 'Jul', positive: 250, neutral: 200, negative: 160 },
    { month: 'Aug', positive: 260, neutral: 210, negative: 170 },
  ],
  form: [
    { month: 'Jan', positive: 150, neutral: 130, negative: 100 },
    { month: 'Feb', positive: 140, neutral: 120, negative: 90 },
    { month: 'Mar', positive: 160, neutral: 140, negative: 110 },
    { month: 'Apr', positive: 130, neutral: 110, negative: 80 },
    { month: 'May', positive: 170, neutral: 150, negative: 120 },
    { month: 'Jun', positive: 180, neutral: 160, negative: 130 },
    { month: 'Jul', positive: 190, neutral: 170, negative: 140 },
    { month: 'Aug', positive: 200, neutral: 180, negative: 150 },
  ],
  social: [
    { month: 'Jan', positive: 100, neutral: 80, negative: 60 },
    { month: 'Feb', positive: 110, neutral: 90, negative: 70 },
    { month: 'Mar', positive: 120, neutral: 100, negative: 80 },
    { month: 'Apr', positive: 90, neutral: 70, negative: 50 },
    { month: 'May', positive: 130, neutral: 110, negative: 90 },
    { month: 'Jun', positive: 140, neutral: 120, negative: 100 },
    { month: 'Jul', positive: 150, neutral: 130, negative: 110 },
    { month: 'Aug', positive: 160, neutral: 140, negative: 120 },
  ],
};

const initialSentimentData = {
  all: [
    { month: 'Jan', positif: 320, neutre: 200, negatif: 240 },
    { month: 'Feb', positif: 280, neutre: 190, negatif: 220 },
    { month: 'Mar', positif: 290, neutre: 195, negatif: 180 },
    { month: 'Apr', positif: 260, neutre: 220, negatif: 170 },
    { month: 'May', positif: 330, neutre: 200, negatif: 250 },
  ],
  qr: [
    { month: 'Jan', positif: 150, neutre: 100, negatif: 120 },
    { month: 'Feb', positif: 140, neutre: 95, negatif: 110 },
    { month: 'Mar', positif: 145, neutre: 98, negatif: 90 },
    { month: 'Apr', positif: 130, neutre: 110, negatif: 85 },
    { month: 'May', positif: 165, neutre: 100, negatif: 125 },
  ],
  form: [
    { month: 'Jan', positif: 100, neutre: 60, negatif: 80 },
    { month: 'Feb', positif: 90, neutre: 55, negatif: 70 },
    { month: 'Mar', positif: 95, neutre: 58, negatif: 60 },
    { month: 'Apr', positif: 85, neutre: 65, negatif: 55 },
    { month: 'May', positif: 105, neutre: 60, negatif: 75 },
  ],
  social: [
    { month: 'Jan', positif: 70, neutre: 40, negatif: 40 },
    { month: 'Feb', positif: 50, neutre: 40, negatif: 40 },
    { month: 'Mar', positif: 50, neutre: 39, negatif: 30 },
    { month: 'Apr', positif: 45, neutre: 45, negatif: 30 },
    { month: 'May', positif: 60, neutre: 40, negatif: 50 },
  ],
};

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function FilterSelect({ value, onChange, className = "" }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border rounded p-2 text-sm ${className}`}
    >
      <option value="all">All</option>
      <option value="qr">QR Code</option>
      <option value="form">Form</option>
      <option value="social">Social Media</option>
    </select>
  );
}

function Dashboard() {
  const [monthlyFilter, setMonthlyFilter] = useState('all');
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [monthlyData, setMonthlyData] = useState(initialMonthlyData.all);
  const [sentimentData, setSentimentData] = useState(initialSentimentData.all);

  useEffect(() => {
    setMonthlyData(initialMonthlyData[monthlyFilter]);
  }, [monthlyFilter]);

  useEffect(() => {
    setSentimentData(initialSentimentData[sentimentFilter]);
  }, [sentimentFilter]);

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tableau de Bord</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Analyse Mensuelle</h2>
              <FilterSelect
                value={monthlyFilter}
                onChange={(e) => setMonthlyFilter(e.target.value)}
              />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={monthlyData}
                barSize={12}
                barGap={2}
                margin={{ top: 20, right: 120, bottom: 20, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                  domain={[0, 500]}
                  ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Tooltip />
                <Legend 
                  align="right" 
                  verticalAlign="middle"
                  layout="vertical"
                  wrapperStyle={{ paddingLeft: "30px" }}
                />
                <Bar dataKey="negative" name="Negative" fill="#212121" radius={[2, 2, 0, 0]} />
                <Bar dataKey="neutral" name="Neutre" fill="#9E9E9E" radius={[2, 2, 0, 0]} />
                <Bar dataKey="positive" name="Positifs" fill="#2196F3" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Feed-backs ce mois</p>
                <h3 className="text-2xl font-bold">34520</h3>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Alerte Détectée</p>
                <h3 className="text-2xl font-bold">29</h3>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Taux de Réponse</p>
                <h3 className="text-2xl font-bold">95%</h3>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Analyse des Sentiments</h2>
          <FilterSelect
            value={sentimentFilter}
            onChange={(e) => setSentimentFilter(e.target.value)}
          />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666' }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="positif" stroke="#4CAF50" name="Positif" dot={false} />
            <Line type="monotone" dataKey="neutre" stroke="#9E9E9E" name="Neutre" dot={false} />
            <Line type="monotone" dataKey="negatif" stroke="#f44336" name="Négatif" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

export default Dashboard;

