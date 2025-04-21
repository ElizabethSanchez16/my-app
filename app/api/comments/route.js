import { NextResponse } from 'next/server';
import { saveToDB, getAllFromDB } from '../../../lib/db';

let comments = [
  {
    id: '1',
    blogId: '1',
    author: 'Utilisateur Anonyme',
    content: 'Excellent article!',
    date: '2023-10-03'
  }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get('blogId');
  
  if (blogId) {
    const blogComments = comments.filter(c => c.blogId === blogId);
    return NextResponse.json(blogComments);
  }
  
  return NextResponse.json(comments);
}

export async function POST(request) {
  const data = await request.json();
  const newComment = {
    ...data,
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0]
  };
  
  comments.push(newComment);
  await saveToDB('comments', newComment);
  
  return NextResponse.json(newComment, { status: 201 });
}