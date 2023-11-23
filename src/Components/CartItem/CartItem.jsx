import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


// Componente CartItem
const CartItem = ({ id, img, name, quantity, price }) => {
  // Obtener función para remover un item del carrito desde el contexto
  const { removeItem } = useContext(CartContext);
  
  // Función para manejar la eliminación de un item del carrito
  const handleRemoveItem = () => {
    removeItem(id);
  };

  // Renderizar el componente CartItem
  return (
    <div className="col-md-2 mb-4 d-flex m-auto">
      <div className="card__item__final">
        <picture className="picture__card">
            {/* Mostrar imagen si está disponible */}
          {img && <img className="picture__card__svg" src={img} alt={name} />}
        </picture>
         {/* Mostrar nombre, cantidad, precio unitario y subtotal del item */}
        <h5 className="cart__item__p">{name}</h5>
        <p className="cart__item__p">Cantidad: {quantity}</p>
        <p className="cart__item__p">Precio unitario: ${price}</p>
        <p className="cart__item__p">Subtotal: ${quantity * price}</p>
         {/* Botón para eliminar el item del carrito */}
          <button onClick={handleRemoveItem} className="btn btn-delete">
            Eliminar
          </button>
      </div>
    </div>
  );
}
export default CartItem;
