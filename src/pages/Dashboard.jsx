import { useState, useEffect } from 'react';
import { fetchFeedbacks } from '../utils/api';
import FeedbackItem from '../components/FeedbackItem';

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sourceFilter, setSourceFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFeedbacks() {
      setIsLoading(true);
      try {
        const data = await fetchFeedbacks(sourceFilter);
        setFeedbacks(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch feedbacks. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    loadFeedbacks();
  }, [sourceFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Feedback Dashboard</h1>
      <div className="mb-4">
        <label htmlFor="sourceFilter" className="mr-2">Filter by source:</label>
        <select
          id="sourceFilter"
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="all">All</option>
          <option value="qr">QR Code</option>
          <option value="form">Form</option>
          <option value="social">Social Media</option>
        </select>
      </div>
      {isLoading && <p>Loading feedbacks...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && (
        <div>
          {feedbacks.length === 0 ? (
            <p>No feedbacks found.</p>
          ) : (
            feedbacks.map((feedback, index) => (
              <FeedbackItem
                key={feedback.id || index}
                type={feedback.type}
                content={feedback.content || feedback.message}
                response={feedback.response}
                created_at={feedback.created_at}
                sentiment={feedback.sentiment}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;


