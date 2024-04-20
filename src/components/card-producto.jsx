
export function ProductCard({ nombre, descripcion, precio, imagen }) {

  return (
    <div className="card col-md-3">
      <img src={imagen} className="card-img-top mt-1" alt={nombre} />
      <div className="card-body h-100 pt-auto">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-price">${precio}</p>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
}


