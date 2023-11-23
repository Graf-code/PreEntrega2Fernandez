import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import cartLogo from '/assets/cart.svg'

// Componente CartWidget
const CartWidget = () => {
   // Obtener la cantidad total de productos en el carrito desde el contexto
    const { totalQuantity }  = useContext(CartContext);
   
   // Renderizar el componente CartWidget
    return (
               <>
                  {/* Enlace al carrito */}
                  <Link to='/cart' className="btn cartwidget">
                     {/* Icono del carrito */}
                     <img className='car__buy' src={cartLogo} alt='cart-widget' />
                     {/* Mostrar la cantidad total si hay productos en el carrito */}
                     {totalQuantity > 0 && <span className="cart__quantity">{totalQuantity}</span>}
                  </Link>
               </>
         );
}

export default CartWidget;












