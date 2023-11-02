import NavBar from './Components/NavBar/NavBar';
import Titulo from './Components/Titulo/Titulo';
import TituloForm from './Components/TituloForm/TItuloForm';
import Card from './Components/Card/Card'
import Formulario from './Components/Formulario/Formulario';
import ProductListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css'

function App() {
  return (
    <>
    <NavBar />
    <Titulo tituloApp="Descubre tu próximo aprendizaje" subTituloApp="Explora una amplia gama de cursos en línea y mejora tus habilidades."/>
    <Titulo tituloApp="Navega por Categorías" subTituloApp="Encuentra cursos en áreas que te apasionan y desarrolla nuevas habilidades."/>
    <Card />
    <TituloForm />
    <Formulario />
    <ProductListContainer greeting='Bienvenidos a Lucode'/>
    </>
  )
}

export default App
