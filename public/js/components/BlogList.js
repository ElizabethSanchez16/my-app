function BlogList() {
    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      // Simulando carga de datos (reemplaza con tu API real)
      setTimeout(() => {
        const mockBlogs = [
          { id: 1, title: 'Premier article', excerpt: 'Résumé du premier article...', date: '2023-01-01' },
          { id: 2, title: 'Deuxième article', excerpt: 'Résumé du deuxième article...', date: '2023-01-02' }
        ];
        setBlogs(mockBlogs);
        setLoading(false);
      }, 1000);
    }, []);
  
    if (loading) return <div>Chargement des articles...</div>;
  
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <BlogCard 
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            id={blog.id}
            date={blog.date}
          />
        ))}
      </div>
    );
  }

  