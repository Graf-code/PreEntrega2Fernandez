import { useState } from 'react';


// Componente Filter
export const Filter = ({ children, products }) => {
  // Estado local para almacenar el estado del filtro
  const [filterState, setFilterState] = useState('');

  // Función para manejar cambios en el filtro
  const handleFilterChange = (e) => {
    setFilterState(e.target.value);
  };

  // Función para filtrar productos basados en el estado del filtro
  const filterProducts = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filterState.toLowerCase())
    );
  };

   // Renderizar el componente Filter con los datos filtrados y el estado del filtro
  return children({ 
    products: filterProducts(), 
    filterState, 
    handleFilterChange 
  });
};