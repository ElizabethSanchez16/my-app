'use client';

import { useState } from 'react';
import { saveToDB } from '../lib/db';
import '../styles/globals.css';
import '../styles/components.css';

export default function AddComment({ blogId }) {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newComment = {
      blogId,
      content: comment,
      author: 'Utilisateur Anonyme',
      date: new Date().toISOString().split('T')[0],
      id: Date.now().toString()
    };

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) throw new Error('Server error');

      await saveToDB('comments', newComment);
      
      setSuccess(true);
      setComment('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
      await saveToDB('comments', newComment);
      setSuccess(true);
      setComment('');
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Ajouter un commentaire</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Votre commentaire..."
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </button>
        {success && (
          <p className="mt-2 text-green-600">Commentaire ajouté avec succès!</p>
        )}
      </form>
    </div>
  );
}