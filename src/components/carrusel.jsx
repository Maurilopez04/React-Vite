import {ProductCard} from "./card-producto";
import productData from '../assets/productos.json'
function Carrusel() {
  return (
    <div className="container mt-5">
      <h2>Productos Destacados</h2>
      <div className="row justify-content-center align-items-center">
    {productData.map((producto, index )=>(
        <ProductCard 
    
        key={index}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen} />
    )
      
      )}  </div>
    </div>
  );
}

export default Carrusel;
