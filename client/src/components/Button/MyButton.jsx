import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const MyButtonStyled = styled.button`
  border: 2px solid white;
  background-color: transparent;
  color: white;
  padding: 1.5vw 6vw;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: white;
    color: black;
  }
`

const MyButton = ({ text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <MyButtonStyled onClick={handleClick}>{text}</MyButtonStyled>
  )
}

export default MyButton;