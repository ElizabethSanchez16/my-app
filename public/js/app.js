function App() {
    return (
      <div className="app">
        <Header />
        <main>
          <BlogList />
        </main>
        <Footer />
      </div>
    );
  }
  
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);