import { useEffect, useState } from "react";
import { getProducts } from "../asynMock/asyncMock";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    // const { itemId } = useParams();

    useEffect(() => {
        setTimeout(() => {
            getProducts() 
                .then((data) => {
                    if (category) {
                        setProducts(data.filter((product) => product.category === category));
                        // setProducts(data.filter((products) => products.category === itemId));
                    } else {
                        setProducts(data);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }, 1000);
    }, [category]);
    return (
        <>
          <Row xs={1} md={4} className="g-2 m-auto card__with">
            {loading ? (
              <h2 className="sec__carga">Cargando...</h2>
            ) : (
              products.map((product) => (
                <Col key={product.name}>
                  <div className="card__cursos">
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        Categoría: {product.category}
                        <br />
                        Precio: ${product.price}
                      </p>
                      <Link to={`/item/${product.id}`}>
                        <button className="btn btn-light w-100">Detalle</button>
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