import Item from "../Item/Item";
import { Filter } from "../Filter/Filter";
import { Link } from "react-router-dom";


export const ItemList = ({ products }) => {
  const productFiltered = ({ products, filterState, handleFilterChange }) => (
    <>
      <div className="">
        <label>Buscar</label>
        <input
          className="form-control"
          type="text"
          value={filterState}
          onChange={handleFilterChange}
        />
      </div>
      <br />

      {products.map((product) => (
        <div className="card w-50" key={product.name}>
          <img src={product.imageUrl} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <p>Nombre: {product.name}</p>
            <p>Category: {product.category}</p>
            <p>Precio: {product.price}</p>
          </div>
          <div className="card-footer">
            <Link to='/detail'>
            <button className="btn btn-outline-dark w-100">detalle</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <Filter products={products}>
      {productFiltered}
    </Filter>
  );
};
