import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from '../../redux/actions';

const H6Parrafo = styled.h6`
font-size: 1vw;
`
const H1Titulo = styled.h1`
font-size: 2vw;
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
        <div>
            {details && details.map(({ id, title, image, summary, healthScore, instructions, diets }) => (
                <div key={id}>
                    <div>
                        <H1Titulo>{id}</H1Titulo>
                        <H1Titulo>Nombre: {title}</H1Titulo>
                        <H6Parrafo>{cleanHTML(summary)}</H6Parrafo>
                        <h1>health score: {healthScore}</h1>
                        <H6Parrafo>Paso a paso: {cleanHTML(instructions)}</H6Parrafo>
                        <h4>Tipos de dieta: {diets && diets.length > 0 ? diets.join(', ') : 'N/A'}</h4>
                    </div>
                    <img src={image} alt="" />
                </div>))}
            <button onClick={() => navigate(-1)}>Regresar</button>
        </div>

    )
};

export default Detail;