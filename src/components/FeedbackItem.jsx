import { MessageSquare, Cpu } from 'react-feather';

function FeedbackItem({ type, message, response, date, sentiment }) {
  const sentimentColors = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutre: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {type === 'qr' ? (
            <Cpu className="w-5 h-5 mr-2 text-blue-500" />
          ) : (
            <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
          )}
          <span className="font-medium">{message}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${sentimentColors[sentiment]}`}>
          {sentiment}
        </span>
      </div>
      <div className="ml-7">
        <p className="text-gray-600 text-sm">Réponse: {response}</p>
        <p className="text-gray-400 text-xs mt-2">{date}</p>
      </div>
    </div>
  );
}

export default FeedbackItem;

