import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';

import NavBar from './Components/NavBar/NavBar';
import Titulo from './Components/Titulo/Titulo';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';

import './Components/NavBar/NavBar.css';
import './Components/ItemListContainer/ItemListContainer.css';
import './Components/ItemDetail/ItemDetail.css';
import './Components/ItemDetailContainer/ItemDetailContainer.css';
import './Components/ItemCount/ItemCount.css';
import './Components/Cart/Cart.css';
import './Components/CartWidget/CartWidget.css';
import './Components/CartItem/CartItem.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Titulo
                    className="titulo__app"
                    tituloApp="Navega por Categorías"
                    subTituloApp="Encuentra cursos en áreas que te apasionan y desarrolla nuevas habilidades."
                  />
                  <Titulo
                    className="titulo__app"
                    tituloApp="Descubre tu próximo aprendizaje"
                    subTituloApp="Explora una amplia gama de cursos en línea y mejora tus habilidades."
                  />
                  <ItemListContainer greeting={'Bienvenidos'} />
                </>
              }
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/category/:itemId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;