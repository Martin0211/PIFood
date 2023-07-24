import React from 'react';
import styled from 'styled-components';
import MyButton from '../../components/Button/MyButton'

const Div = styled.div`
margin-right: 50vw;
`
const DivConten2Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 6vw;
margin-left: 15vw;

`
const DeH1 = styled.h1`
display: flex;
justify-content: center;
align-items: center;
margin-top: 0;
font-family: 'Indie Flower', cursive;

`

const FondoDiv = styled.div`
background-image: url(https://th.bing.com/th/id/R.a6dca6f211cdb13c6bfc9c1fe91a34c5?rik=ltbAp7fVp%2fofbA&pid=ImgRaw&r=0);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
background-position: right bottom;
overflow: hidden;
margin: 0;
height: 100vh;
`
const TituloH1 = styled.h1`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10vw;
margin-bottom: 0;
font-size: 8vw;
font-family: 'Lilita One', cursive;
color: #f6f8ff;
overflow: hidden;
text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;

`
const NombreH1 = styled.h1`
font-size: 5vw;
font-family: 'Indie Flower', cursive;
color: #a846a0;
text-shadow: -1px -1px 0 #272d2d, 1px -1px 0 #272d2d, -1px 1px 0 #272d2d, 1px 1px 0 #272d2d;

`

const StyledMyButton = styled.div`
margin-left: 18vw;
`


const Landing = () => {
    return (
        <FondoDiv>
            <Div>
                <div>
                    <TituloH1>PI de Food</TituloH1>
                </div>
                <DivConten2Div>
                    
                        <DeH1>de</DeH1><NombreH1>Martin Blanco</NombreH1>
                    
                </DivConten2Div>
                <StyledMyButton>
                    <MyButton text="Entrar" route="/home" />
                </StyledMyButton>
            </Div>
        </FondoDiv>
    )
}

export default Landing;