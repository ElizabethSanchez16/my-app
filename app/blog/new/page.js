'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveToDB } from '../../../lib/db';

export default function NewBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newBlog = {
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      author: 'Auteur'
    };

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) throw new Error('Failed to create');
      
      await saveToDB('blogs', await response.json());
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
      newBlog.id = Date.now().toString();
      await saveToDB('blogs', newBlog);
      alert('Article sauvegardé en mode hors ligne');
      router.push('/');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Nouvel article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">Titre</label>
          <input
            id="title"
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1 font-medium">Contenu</label>
          <textarea
            id="content"
            rows={10}
            className="w-full p-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Publication...' : 'Publier'}
        </button>
      </form>
    </div>
  );
}