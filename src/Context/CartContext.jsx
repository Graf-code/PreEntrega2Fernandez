import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext ({
    cart: [],
    totalQuantity: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    checkoutClicked: false,
    setCheckoutClicked: (value) => {},
});

// Proveedor del contexto
export const CartProvider = ({ children }) => {
        // Estado del carrito y la cantidad total
        const [ cart, setCart] = useState([])
        const [totalQuantity, setTotalQuantity] = useState(0);
        const [checkoutClicked, setCheckoutClicked] = useState(false);

        // Función para calcular la cantidad total del carrito
        useEffect( () => {
            const calculateTotalQuantity = () => {
                const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
                setTotalQuantity(newTotalQuantity);
            };
        
            
            calculateTotalQuantity();
        }, [cart]);

    // Función para agregar un ítem al carrito
    const addItem = (item, quantity) => {

        if(!isInCart(item.id)) {
            setCart((prev) => [...prev, {...item, quantity}]);
            setCheckoutClicked(false);
        } else {
            // console.error('El producto ya fue agregado');
        }
    };

    // Función para eliminar un ítem del carrito
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
        setCheckoutClicked(false);
    };

    // Función para verificar si un ítem ya está en el carrito
    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };


    return (
        <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart, checkoutClicked, setCheckoutClicked }}>
            { children }
        </CartContext.Provider>
    );
};

export default CartProvider

