import React,{useState} from "react";
import styled from 'styled-components';

const DivToggleButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5vw;
`
const ToggleButton = styled.button`
    
    border: 2px solid #272d2d;
    border-radius: 1vw 1vw;
    background-color: #272d2d;
    color: #f6f8ff;
    padding: .5vw 2.2vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #50514f;
        color: #f6f8ff;
        border: 2px solid #272d2d;
     }
    `;

const Content = styled.div`
  display: ${props => (props.$isVisible ? 'block' : 'none')};
  padding: 3vw;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 10vw;
  background-color: #f0f0f0;
  margin-top: .5vw;
  border: 1px solid #ccc;
`;



const H2 = styled.h2`
display: flex;
justify-content: center;
margin: 0;
font-family: 'ABeeZee', sans-serif;
padding-top: 1vw;
font-size: 1.2vw;
text-shadow: -1px -1px 0 #f6f8ff, 1px -1px 0 #f6f8ff, -1px 1px 0 #f6f8ff, 1px 1px 0 #f6f8ff;
`
const Div = styled.div`
display: flex;
justify-content: space-evenly;
height: 5vw;
`
const BtnLeft = styled.button`
    border: 2px solid #272d2d;
    border-radius: 1vw 0 0 1vw;
    background-color: #272d2d;
    color: #f6f8ff;
    padding: .5vw 2.2vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #50514f;
        color: #f6f8ff;
        border: 2px solid #272d2d;
     }
    `
const BtnRight = styled.button`
    border: 2px solid #272d2d;
    border-radius: 0 1vw 1vw 0;
    background-color: #272d2d;
    color: #f6f8ff;
    padding: .5vw 2.2vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #50514f;
        color: #f6f8ff;
        border: 2px solid #272d2d;
     }
    `

const BtnCenter = styled.button`
    border: 2px solid #272d2d;
    background-color: #272d2d;
    color: #f6f8ff;
    padding: .5vw 2.2vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #50514f;
        color: #f6f8ff;
        border: 2px solid #272d2d;
     }
    `
const DivFilter = styled.div`
display: grid;
justify-items: center;
`
const DivFil1 = styled.div`
padding: 0.1vw;
`


const FilterOptions = ({ onSortChange, onFilterChange }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
     };

    return (
        <div>
            <DivToggleButton>
      <ToggleButton onClick={toggleVisibility}>Filtros</ToggleButton>
            </DivToggleButton>
      <Content $isVisible={isVisible}>
        <Div>
            <div>
                <H2>Health Score</H2>
                <BtnLeft onClick={() => onSortChange('asc')}>Ascending</BtnLeft>
                <BtnRight onClick={() => onSortChange('desc')}>Descending</BtnRight>
            </div>


            <div>
                <H2>Alfabética</H2>
                <BtnLeft onClick={() => onSortChange('A-Z')}>A-Z</BtnLeft>
                <BtnRight onClick={() => onSortChange('Z-A')}>Z-A</BtnRight>
            </div>

            <DivFilter>
                <DivFil1>
                    <H2>Tipo de dietas</H2>
                    <BtnLeft onClick={() => onFilterChange('gluten free')}>Gluten Free</BtnLeft>
                    <BtnCenter onClick={() => onFilterChange('dairy free')}>Dairy Free</BtnCenter>
                    <BtnRight onClick={() => onFilterChange('lacto ovo vegetarian')}>Lacto Ovo Vegetarian</BtnRight>
                </DivFil1>
                <DivFil1>
                    <BtnLeft onClick={() => onFilterChange('vegan')}>Vegan</BtnLeft>
                    <BtnCenter onClick={() => onFilterChange('paleolithic')}>Paleolithic</BtnCenter>
                    <BtnCenter onClick={() => onFilterChange('primal')}>Primal</BtnCenter>
                    <BtnRight onClick={() => onFilterChange('whole 30')}>Whole 30</BtnRight>
                </DivFil1>
            </DivFilter>
        </Div>
        </Content>
    </div>
    );
};

export default FilterOptions;