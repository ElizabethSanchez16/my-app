import '../styles/globals.css';
import '../styles/components.css';

export default function Comment({ comment }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold">{comment.author}</h4>
        <span className="text-sm text-gray-500">{comment.date}</span>
      </div>
      <p className="text-gray-700">{comment.content}</p>
    </div>
  );
}