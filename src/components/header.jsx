
export default function Header(){
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="#">Mi Sitio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Conocenos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </header>  
    )
}