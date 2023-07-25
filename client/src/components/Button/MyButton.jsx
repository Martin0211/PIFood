import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const MyButtonStyled = styled.button`
  border: 2px solid white;
  background-color: transparent;
  color: #f6f8ff;
  padding: 1.5vw 6vw;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f6f8ff;
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