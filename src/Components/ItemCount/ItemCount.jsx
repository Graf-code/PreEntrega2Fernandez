import { useState } from "react";

// Componente ItemCount
export const ItemCount = ({stock, initial, onAdd})=> {
    // Estado local para la cantidad
    const [quantity, setQuantity] = useState(initial)

    // Función para incrementar la cantidad
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    // Función para decrementar la cantidad
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    
    // Renderizar el componente ItemCount
    return(
    <>
           {/* Contenedor principal */}
        <div>
            
            <div className="controls">  {/* Controles de cantidad */}
                <button className="btn btn-outline-danger" onClick={decrement}>-</button>
                    <h4>{quantity}</h4>
                <button className="btn btn-outline-success" onClick={increment}>+</button>
            </div>
            <div>
                  {/* Botón para agregar al carrito */}
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </>
    )
}