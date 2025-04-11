function BlogPage() {
    // Obtener el ID del blog de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 1;
  
    return (
      <div className="app">
        <Header />
        <main>
          <BlogDetails blogId={blogId} />
          <CommentList blogId={blogId} />
          <AddComment blogId={blogId} />
        </main>
        <Footer />
      </div>
    );
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<BlogPage />);
  