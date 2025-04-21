import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export async function GET() {
  const db = JSON.parse(await fs.readFile(dbPath, 'utf-8'));
  return Response.json(db.blogs);
}

export async function POST(request) {
  const db = JSON.parse(await fs.readFile(dbPath, 'utf-8'));
  const newBlog = await request.json();
  
  newBlog.id = Date.now().toString();
  newBlog.date = new Date().toISOString().split('T')[0];
  db.blogs.push(newBlog);
  
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
  return Response.json(newBlog, { status: 201 });
}

/*import { NextResponse } from 'next/server';
import { getAllFromDB } from '../../../../lib/db';

let blogs = [
  // Datos de ejemplo igual que en el archivo anterior
];

export async function GET(request, { params }) {
  const blog = blogs.find(b => b.id === params.id);
  
  if (!blog) {
    const offlineBlogs = await getAllFromDB('blogs');
    const offlineBlog = offlineBlogs.find(b => b.id === params.id);
    
    if (offlineBlog) {
      return NextResponse.json(offlineBlog);
    }
    
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(blog);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const index = blogs.findIndex(b => b.id === params.id);
  
  if (index === -1) {
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }
  
  blogs[index] = { ...blogs[index], ...data };
  return NextResponse.json(blogs[index]);
}

export async function DELETE(request, { params }) {
  blogs = blogs.filter(b => b.id !== params.id);
  return NextResponse.json(
    { success: true },
    { status: 200 }
  );
}*/