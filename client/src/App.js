
import Nav from './components/Nav/Nav'
import { Home, Abaut, Landing, Detail, Form } from './view'
import { useDispatch } from 'react-redux';
import { getRecipeByName } from './redux/actions';
import { useLocation, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
      display: block;
      margin: 0;
      padding: 0;
      overflow: ${props => (props.showOverflow ? 'auto' : 'hidden')};
  }
`;

function App(props) {
  // Obtener la ubicación actual de la página
  const location = useLocation();

  // Obtener la función "dispatch" para enviar acciones a Redux
  const dispatch = useDispatch();

  // Función para realizar la búsqueda por nombre y enviar la acción a Redux
  const searchName = (recipes) => {
    dispatch(getRecipeByName(recipes));
  };



  return (
    <>
    <GlobalStyles showOverflow={location.pathname === '/home'} /> 
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"></link>
      <link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Indie+Flower&family=Lilita+One&family=Quicksand:wght@500;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>

{/* font-family: 'ABeeZee', sans-serif;
font-family: 'Indie Flower', cursive;
font-family: 'Lilita One', cursive;
font-family: 'Quicksand', sans-serif;
font-family: 'Ubuntu', sans-serif; */}

      <div>
        {location.pathname === '/' ? null : <Nav searchName={searchName}  />}
      </div>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home searchName={searchName}  />} />
        <Route path="/abaut" element={<Abaut />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>

    </div>
    </>
  );
}

export default App;
