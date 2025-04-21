import { NextResponse } from 'next/server';
import { saveToDB } from '../../../lib/db';

let blogs = [
  {
    id: '1',
    title: 'Premier article',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
    date: '2023-10-01',
    author: 'Jean Dupont'
  },
  {
    id: '2',
    title: 'Deuxième article',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '2023-10-02',
    author: 'Marie Curie'
  }
];

export async function GET() {
  return NextResponse.json(blogs);
}

export async function POST(request) {
  const data = await request.json();
  const newBlog = {
    ...data,
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0]
  };
  
  blogs.push(newBlog);
  await saveToDB('blogs', newBlog);
  
  return NextResponse.json(newBlog, { status: 201 });
}