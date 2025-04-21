import Link from 'next/link';
import '../styles/globals.css';
import '../styles/components.css';

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-500 text-sm mb-3">Publié le {blog.date} par {blog.author}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{blog.content}</p>
        <Link 
          href={`/blog/${blog.id}`} 
          className="text-blue-600 hover:text-blue-800 font-medium inline-block mt-2"
        >
          Lire la suite →
        </Link>
      </div>
    </div>
  );
}