import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { writeBatch, collection, query, getDocs, where, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../../firebase/config';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './Checkout.css';

// Componente Checkout
const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Obtener datos del carrito y funciones relacionadas desde el contexto
  const { cart, total, clearCart } = useContext(CartContext);
  // Calcular el monto total de la compra
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Función para crear una nueva orden
  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {  // Crear objeto de orden con la información del comprador, ítems del carrito, total y fecha
      const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: totalAmount,
        date: Timestamp.fromDate(new Date())
      };
      
      // Iniciar una transacción batch para actualizar productos y agregar la orden a Firestore
      const batch = writeBatch(db);

      // Verificar stock y ajustar el batch
      const outOfStockProducts = await checkStockAndAdjustBatch(cart, batch);

      // Si no hay productos fuera de stock, confirmar la transacción batch y agregar la orden a Firestore
      if (outOfStockProducts.length === 0) {
        await batch.commit();

        const orderAdded = await addOrderToFirestore(objOrder);
        
        // Establecer el ID de la orden y limpiar el carrito
        setOrderId(orderAdded.id);
        clearCart();
      }

    } finally {
      setLoading(false); // Finalizar la carga, independientemente de si tuvo éxito o no
    }
  };

  // Función para verificar stock y ajustar el batch
  const checkStockAndAdjustBatch = async (cart, batch) => {
    const outOfStock = [];  // Array para almacenar productos fuera de stock

     // Obtener IDs de productos en el carrito
    const ids = cart.map(prod => prod.id);
     // Referencia a la colección de productos en Firestore
    const productsRef = collection(db, 'products');

    // Obtener documentos de productos desde Firestore según los IDs del carrito
    const productsAddedFromFirestore = await getDocs(
      query(productsRef, where('id', 'in', ids))
    );

    // Extraer documentos de productos
    const { docs } = productsAddedFromFirestore;

    // Verificar stock y ajustar el batch para cada producto en el carrito
    if (docs && docs.length > 0) {
      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        // Encontrar el producto en el carrito
        const productAddedToCart = cart.find(prod => prod.id === dataDoc.id);
        const prodQuantity = productAddedToCart?.quantity;

        // Actualiza stock en el batch si hay suficiente stock
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {   // Agrega producto a la lista de fuera de stock
          outOfStock.push({ id: dataDoc.id, ...dataDoc });
        }
      });
    }

      //Devuelve la lista de productos fuera de stock
    return outOfStock;
  };

  
  // Función para agregar una orden a Firestore
  const addOrderToFirestore = async (objOrder) => {
    const orderRef = collection(db, 'orders');
    return await addDoc(orderRef, objOrder);
  };

  // Renderizar el componente Checkout
  return (
    <div>
      {loading ? (
        <h2 className="order__id">Se está generando su orden...</h2>
      ) : (
        <>
          {orderId ? (
            <h3 className="check__order">El id de su orden es: {orderId}</h3>
          ) : (
            <div>
              <h4 className="checkout__form">Checkout para finalizar compra</h4>
              <CheckoutForm onConfirm={createOrder} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;