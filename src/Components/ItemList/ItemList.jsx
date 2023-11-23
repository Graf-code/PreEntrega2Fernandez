import { Filter } from '../Filter/Filter';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';


// Componente ItemList
export const ItemList = ({ products }) => {
  // Función interna que define la estructura del componente filtrado
  const productFiltered = ({ products, filterState, handleFilterChange }) => (
    <>
      <div className="container mt-3">
        <label>Buscar</label>
        <input
          className="form-control"
          type="text"
          value={filterState}
          onChange={handleFilterChange}
        />
      </div>
      <div className="container mt-3">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Item {...product} />
              <div className="card-footer">
                <Link to={`/detail/${product.id}`}>
                  <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // Renderizar el componente Filter con los productos y la estructura filtrada
  return <Filter products={products}>{productFiltered}</Filter>;
};