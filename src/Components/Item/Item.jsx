import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


// Componente Item
const Item = ({id, name, img, price, stock}) => {
    // Renderizar el componente Item
    return (
        <>
         {/* Contenedor del artículo */}
        <article className="CardItem">
          <header className="Header">   {/* Encabezado con el nombre del producto */}
            <h2 className="ItemHeader">{name}</h2>
          </header>
          <picture>  {/* Imagen del producto */}
            <img src={img} alt={name} className="ItemImg" />
          </picture>
          <section>  {/* Información del producto (precio y stock) */}
            <p className="Info">Precio: ${price}</p>
            <p className="Info">Stock Disponible: {stock}</p>
          </section>
          <footer className="ItemFooter">  {/* Pie de página con enlace al detalle del producto */}
            <Link to={`/item/${id}`} className="Option">
              <Button>Ver Detalle</Button>
            </Link>
          </footer>
        </article>
      </>
    )   
}

export default Item
