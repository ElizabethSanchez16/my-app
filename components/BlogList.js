'use client';

import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { getAllFromDB } from '../lib/db';
import '../styles/globals.css';
import '../styles/components.css';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) throw new Error('Server error');
        
        const serverBlogs = await response.json();
        setBlogs(serverBlogs);
      } catch (error) {
        console.log('Using offline data');
        const offlineBlogs = await getAllFromDB('blogs');
        setBlogs(offlineBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center py-8">Chargement en cours...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
 
/*const [blogs, setBlogs] = useState([]);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  fetchBlogs();
}, []);

'use client';

import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { getAllFromDB } from '../lib/db';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) throw new Error('Server error');
        
        const serverBlogs = await response.json();
        setBlogs(serverBlogs);
      } catch (error) {
        console.log('Using offline data');
        const offlineBlogs = await getAllFromDB('blogs');
        setBlogs(offlineBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center py-8">Chargement en cours...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}*/