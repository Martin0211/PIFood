import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgCard = styled.img`
  width: 10vw;
  height: 10vw;
`

const Card = (props) => {
    return (
        <div>
            <Link to={`/detail/${props.id}`}>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <ImgCard src={props?.image} alt="imagen no encontrada" />
            </div>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <h3>{props.diets}</h3>
            </div>
            </Link>
        </div>
    )
}

export default Card;