import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SearchGroup = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 1.3vw; 

`

const Input = styled.input`
   width: 25vw;
   height: 3vw;
   padding: 0 1rem;
   color: #f6f8ff;
   font-size: 1.5vw;
   font-family: 'Quicksand', sans-serif;
   font-weight: 100;
   font-style: italic;
   border: 2px solid #f6f8ff;
   border-right: none;
   border-radius: .5vw 0 0 .5vw;
   background-color: transparent;
   outline: none;

   ::placeholder {
      color: black;
      font-style: italic;
      font-size: 1vw;
   }

   &:hover {
      border: 2px solid #a846a0;
      border-right: none;
   }


`

const Button = styled.button`
   width: 12vw;
   height: 3vw;
    
   border: 2px solid #f6f8ff;
   border-radius: 0 .5vw .5vw 0;
   background-color: #50514f;
   color: #f6f8ff;
   font-family: 'ubuntu', sans-serif;
   font-weight: 300;
   font-size: 1.5vw;
   cursor: pointer;
   transition: background-color .3s ease-in-out;
 
 
   &:hover {
      background-color: #f6f8ff;
      color: #50514f;
   }
`

const SearchBar = (props) => {
   const { searchName, onPageChange } = props;
   const [recipes, setRecipes] = useState("");

   const handleInputChange = (event) => {
      const { value } = event.target;
      setRecipes(value);
   }

   const handleClick = () => {
      searchName(recipes);
      setRecipes("");

   }


   return (
      <SearchGroup>
         <Input type='search' value={recipes} onChange={handleInputChange} placeholder="Search recipes..." />
         <Button onClick={handleClick}>Agregar</Button>
      </SearchGroup>
   );

}
export default SearchBar;