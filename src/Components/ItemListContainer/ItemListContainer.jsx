import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Link, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// Componente ItemListContainer
function ItemListContainer() {
  // Estados para almacenar productos y controlar el estado de carga
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, itemId } = useParams();

  // Efecto para cargar los productos al montar el componente o cuando cambie la categoría
  useEffect(() => {
    const fetchProducts = async () => {
      const dbFirestore = getFirestore();
      const productsCollection = collection(dbFirestore, 'products');
      let filterQuery;

      if (category) {
        // Si hay una categoría, aplicamos el filtro
        filterQuery = query(productsCollection, where('category', '==', category));
      } else {
        // Si no hay categoría, traemos todos los productos
        filterQuery = productsCollection;
      }

      try {
        const snapshot = await getDocs(filterQuery);
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching products:', error);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [category]);
  
    // Renderizar los productos en tarjetas usando Bootstrap
    return (
        <>
          <Row xs={1} md={3} className="row g-2 m-auto card__with">
            {loading ? (
              <div className="spinner">
                <Spinner animation="grow" variant="primary" size="lg" style={{ width: '10rem', height: '10rem' }}>
                  <span>Cargando...</span>
                </Spinner>
              </div>
            ) : (
              products.map((product) => (
                <Col key={product.id}>
                  <div className="card__item__list">
                    <img src={product.img} className="card__img__top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        Categoría: {product.category}
                        <br />
                        Precio: ${product.price}
                      </p>
                      <Link to={`/item/${product.id}`}>
                        <button className="btn btn-success w-100"> Ver Detalle</button>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))
            )}
          </Row>
        </>
      );
}      
export default ItemListContainer