import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from '../../redux/actions';

const H6Parrafo = styled.h6`
font-size: .95vw;
`
const H1Titulo = styled.h1`
font-family: 'Quicksand', sans-serif;
font-size: 2vw;
`

const Div = styled.div`
display: flex;
padding: 5vw;
padding-bottom: 0;
height: 30vw;
`

const MyButtonStyled = styled.button`
    border: 1.5px solid #272d2d;
    background-color: #272d2d13;
    color: #272d2d;
    padding: 1vw 4vw;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #a846a0;
      color: #f6f8ff;
    }
  `

const DivInfo = styled.div`
    font-family: 'ubuntu', sans-serif;
    font-weight: 300;
    color: #50514f;
    font-size: 1vw;
    margin-left: 3vw;
    padding-right: 2vw;
    height: 50vw;
`
const Img = styled.img`
width: 30vw;
height: 30vw;
`
const DivPrincipal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed; 
left: 0;
right: 0; 
background-image: url(https://img.freepik.com/free-photo/flat-lay-different-ingredients-composition-with-copy-space_23-2148541885.jpg?w=826&t=st=1690329206~exp=1690329806~hmac=d518aa8e310127ffba26231c744c2173021948614dbb7db92103f47b242a7a8a);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
background-position: right bottom;
margin: 0;
height: 100vw;
`



const Detail = (props) => {

    const dispatch = useDispatch();
    const { detailId } = useParams();

    useEffect(() => {
        dispatch(getRecipeById(detailId))
    }, [dispatch, detailId]);

    const navigate = useNavigate();

    const details = useSelector(state => state.details)

    const cleanHTML = (html) => {
        return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
      };
    return (
        <DivPrincipal>
            {details && details.map(({ id, title, image, summary, healthScore, instructions, diets }) => (
                <Div key={id}>
                    <DivInfo>
                        <H1Titulo>{title}</H1Titulo>
                        <H6Parrafo>{cleanHTML(summary)}</H6Parrafo>
                        <H1Titulo>health score: {healthScore}</H1Titulo>
                        <H6Parrafo>Paso a paso: {cleanHTML(instructions)}</H6Parrafo>
                        <h4>Tipos de dieta: {diets && diets.length > 0 ? diets.join(', ') : 'N/A'}</h4>
                    </DivInfo>
                    <div>
                    <Img src={image} alt="" />
                    </div>
                </Div>))}
            <MyButtonStyled onClick={() => navigate(-1)}>Regresar</MyButtonStyled>
        </DivPrincipal>

    )
};

export default Detail;