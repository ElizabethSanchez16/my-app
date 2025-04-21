'use client';

import { useEffect, useState } from 'react';
import BlogDetails from '../../../components/BlogDetails';
import CommentList from '../../../components/CommentList';
import AddComment from '../../../components/AddComment';

export default function BlogPage({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.id}`);
        if (!response.ok) throw new Error('Blog not found');
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) return <div className="text-center py-8">Chargement en cours...</div>;
  if (!blog) return <div className="text-center py-8">Article non trouvé</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <BlogDetails blog={blog} />
      <CommentList blogId={params.id} />
      <AddComment blogId={params.id} />
    </div>
  );
}