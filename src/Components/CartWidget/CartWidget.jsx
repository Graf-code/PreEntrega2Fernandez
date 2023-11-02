import { IoCart } from "react-icons/io5";
import { ItemCount } from "../ItemCount/ItemCount";

export const CartWidget = ({ itemCount }) => {
    return (
        <div>
            {ItemCount > 0 && <span className="cart__counter">{itemCount}</span>}
            <IoCart />
        </div>
    );
}












// import { IoCart } from "react-icons/io5";

// export const CartWidget = () => {
//     return (
//         <div>
//             3 <IoCart />
//         </div>
//     )
// }

// export default CartWidget - Manera tradicional de exportar