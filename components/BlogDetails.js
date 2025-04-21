import '../styles/globals.css';
import '../styles/components.css';

export default function BlogDetails({ blog }) {
  return (
    <article className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">Publié le {blog.date} par {blog.author}</p>
      <div className="prose max-w-none">
        {blog.content.split('\n').map((paragraph, i) => (
          <p key={i} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

/*function BlogDetails({ blogId }) {
    const [blog, setBlog] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      // Simular carga de datos del blog
      setTimeout(() => {
        const mockBlog = {
          id: blogId,
          title: `Article ${blogId}`,
          content: "Contenu détaillé de l'article...",
          date: '2023-01-01',
          author: "Exemple d'auteur"
        };
        setBlog(mockBlog);
        setLoading(false);
      }, 800);
    }, [blogId]);
  
    if (loading) return <div>Chargement des articles...</div>;
  
    return (
      <article className="blog-details">
        <h1>{blog.title}</h1>
        <p className="meta">Écrit par {blog.author} le {blog.date}</p>
        <div className="content">{blog.content}</div>
      </article>
    );
  }*/