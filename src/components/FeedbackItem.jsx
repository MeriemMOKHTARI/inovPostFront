import { MessageSquare, Cpu, Share2 } from 'lucide-react';

function FeedbackItem({ type, content, response, created_at, sentiment }) {
  const sentimentColors = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800'
  };

  const icons = {
    qr: Cpu,
    form: MessageSquare,
    social: Share2
  };

  const Icon = icons[type] || MessageSquare;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-2 text-blue-500" />
          <span className="font-medium">{content}</span>
        </div>
        {sentiment && (
          <span className={`px-3 py-1 rounded-full text-sm ${sentimentColors[sentiment] || sentimentColors.neutral}`}>
            {sentiment}
          </span>
        )}
      </div>
      <div className="ml-7">
        {response && <p className="text-gray-600 text-sm">Réponse: {response}</p>}
        <p className="text-gray-400 text-xs mt-2">{new Date(created_at).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default FeedbackItem;

