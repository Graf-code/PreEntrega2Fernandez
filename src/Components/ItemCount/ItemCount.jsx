import { useState } from "react";

export const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button btn btn-danger" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button btn btn-success" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button btn btn-outline-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}