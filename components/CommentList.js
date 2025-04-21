'use client';

import { useEffect, useState } from 'react';
import Comment from './Comment';
import { getAllFromDB } from '../lib/db';
import '../styles/globals.css';
import '../styles/components.css';

export default function CommentList({ blogId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?blogId=${blogId}`);
        if (!response.ok) throw new Error('Server error');
        
        const serverComments = await response.json();
        setComments(serverComments);
      } catch (error) {
        console.log('Using offline comments');
        const offlineComments = await getAllFromDB('comments');
        const blogComments = offlineComments.filter(c => c.blogId === blogId);
        setComments(blogComments);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [blogId]);

  if (loading) return <div className="text-center py-4">Chargement des commentaires...</div>;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Commentaires ({comments.length})</h3>
      {comments.length > 0 ? (
        comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <p className="text-gray-500">Aucun commentaire pour le moment</p>
      )}
    </div>
  );
}