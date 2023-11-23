import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';


// Componente ItemDetailContainer
const ItemDetailContainer = () => {
   // Estado local para almacenar el producto
  const [product, setProduct] = useState(null);

  // Obtenemos el ID del item de los parámetros de la URL
  const { itemId } = useParams();

  // Efecto secundario para obtener el detalle del producto desde Firestore
  useEffect(() => {
    const fetchData = async () => {
      // Referencia al documento en Firestore
      const dbFirestore = getFirestore();
      const queryDoc = doc(dbFirestore, 'products', itemId);

      try {
         // Obtener el snapshot del documento
        const docSnapshot = await getDoc(queryDoc);
        if (docSnapshot.exists()) {
          // Si el documento existe, establecer el producto en el estado local
          setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
        } 
      } catch (error) {
        console.error(error);
      }
    };

    // Llamamos a la función para obtener los datos del producto
    fetchData();
  }, [itemId]);

  // Renderizar el componente ItemDetailContainer
  return (
    <div className='ItemDetailContainer w-25 m-auto'>
      {/* Mostrar el componente ItemDetail con los datos del producto si está disponible */}
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;