function Header() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="images/LogoCEPI.PNG" alt="Logo CEPI" className="logo" />
              CEPI Cégep de Jonquière
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu4</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="images/perfil-empty.png" alt="Perfil image" className="perfil"></img>
        </nav>

        <nav className="filter-section">
          <div className="container-fluid">
            <div className="row align-items-center">
                
                <div className="col-md-6">
                    <label htmlFor="sort-by" className="form-label">Trier par:</label>
                    <select className="form-select" id="sort-by">
                        <option defaultValue>Select</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
    
                
                <div className="col-md-6">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
          </div>
        </nav>
      </header>

      
    );
  }
