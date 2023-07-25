import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import styled from 'styled-components';
import { getRecipeAll, getDietsAll } from '../../redux/actions';
import FilterOptions from '../Filter/FilterOptions.jsx';

const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;




// Definimos nuestro componente funcional CardsContainer
const CardsContainer = (props) => {
   // Obtenemos el dispatch de Redux para disparar acciones
   const dispatch = useDispatch();
   // Utilizamos useSelector para obtener datos del estado de Redux
   const dietsLoaded = useSelector(state => state.dietsLoaded )
   const recipesLoaded = useSelector(state => state.recipesLoaded);
   const recipes = useSelector(state => state.recipes)
   // Utilizamos useState para mantener el estado de la página actual y la cantidad de publicaciones por página
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(9);

   // Utilizamos useEffect para cargar las recetas si aún no se han cargado
   useEffect(() => {
      if (!recipesLoaded) {
         dispatch(getRecipeAll());
      }
   }, [dispatch, recipesLoaded]);

   // Utilizamos useEffect para cargar las dietas si aún no se han cargado
   useEffect(() => {
      if (!dietsLoaded) {
         dispatch(getDietsAll());
      }
   }, [dispatch, dietsLoaded]);

   // Estado local para manejar el orden de clasificación (ascendente o descendente) y el filtro
   const [sortOrder, setSortOrder] = useState('asc'); // Predeterminado en 'Asc' de ascendente
   const [filterValue, setFilterValue] = useState(null)

   // Función para manejar el cambio en el orden de clasificación
   const handleSortChange = (order) => {
      setSortOrder(order);
   }

   // Función para manejar el cambio en el filtro
   const handleFilterChange = (value) => {
      setCurrentPage(1);
      setFilterValue(value);
   };

   // Función para manejar el cambio de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
   }; 
   
   // Lógica para obtener las recetas que se mostrarán en la página actual con el filtro y orden aplicados
   const filterAndSortRecipes = recipes
      .filter((recipe) => (filterValue ? recipe.diets.includes(filterValue) : true))
      .sort((a, b) => {
         if (sortOrder === 'asc') {
            // Orden ascendente por healthScore
            return a.healthScore - b.healthScore; 
         } else if (sortOrder === 'desc') {
            // Orden descendente por healthScore
            return b.healthScore - a.healthScore;
           }else if (sortOrder === 'A-Z'){
            // Orden ascendente por Alfabeto
            return a.title.localeCompare(b.title)
          } else if ((sortOrder === 'Z-A')){
            // Orden descendente por Alfabeto
            return b.title.localeCompare(a.title)
          } else {
            return 0;
          }
      })

      
   // Lógica para obtener las recetas que se mostrarán en la página actual
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = filterAndSortRecipes.slice(indexOfFirstPost, indexOfLastPost);


   return (<div>
      <FilterOptions onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
      <CardsWrapper>
         {currentPosts.map(({ id, title, image, diets }) => (
            <Card key={id}
               id={id}
               title={title}
               image={image}
               diets={diets && diets.length > 0 ? diets.join(', ') : 'N/A'}
            />))}
      </CardsWrapper>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(filterAndSortRecipes.length / postsPerPage)} onPageChange={handlePageChange} />
   </div>
   );
};

export default CardsContainer;