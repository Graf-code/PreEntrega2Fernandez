import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"


// Componente ItemDetail
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    // Estado local para la cantidad añadida al carrito
    const [quantityAdded, setQuantityAdded] = useState(0)

    // Contexto del carrito
    const { addItem }  = useContext(CartContext)

    // Manejador para cuando se añade al carrito
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

            // Objeto del item a añadir al carrito
            const item = {
                 img,
                 id, 
                 name, 
                 price
            };

              // Añadir item al carrito
             addItem (item, quantity);
    };

    // Renderizar el componente ItemDetail
    return (
        <article className="card card__detail">
                {/* Cabecera con el nombre del item */}
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
                {/* Imagen del item */}
            <picture>
                <img src={img} alt={name} className="itemImg card__img__detail" />
            </picture>
            {/* Sección con información del item */}
            <section>
                <p className="Info__category">
                    Categoria: {category}
                </p>
                <p className="Info__description">
                    Descripcion: {description}
                </p>
                <p className="Info__price" >
                    Precio: ${price}
                </p>
            </section>
              {/* Pie de la tarjeta con botones para continuar la compra o seguir comprando */}
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <>
                    <Link to='/cart' className='btn btn__finally'>
                        Terminar Compra
                    </Link>
                    <Link to="/" className="btn btn__continue">
                        Seguir Comprando
                     </Link>
                    </>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /> 
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail