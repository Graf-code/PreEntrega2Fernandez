import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CartWidget } from './Components/CartWidget/CartWidget';
import NavBar from './Components/NavBar/NavBar';
import Titulo from './Components/Titulo/Titulo';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import './Components/NavBar/NavBar.css'
import './Components/ItemListContainer/ItemListContainer.css'
import './Components/ItemDetail/ItemDetail.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Titulo className='titulo__app' tituloApp="Navega por Categorías" subTituloApp="Encuentra cursos en áreas que te apasionan y desarrolla nuevas habilidades." />
         <Titulo className='titulo__app' tituloApp="Descubre tu próximo aprendizaje" subTituloApp="Explora una amplia gama de cursos en línea y mejora tus habilidades." />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/category/:itemId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartWidget />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App