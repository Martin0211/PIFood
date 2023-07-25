import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgCard = styled.img`
  width: 28vw;
  height: 28vw;
`
const DivPrincipal = styled.div`
    position: static;
    width: 28vw;
    height: 45vw;
    background-color:  #ffffff6e;
    margin: 1em;
    border-radius: 2vw;
    box-shadow:
      inset 0 -3em 3em rgba(0,0,0,0.12),
      0.3em 0.3em 1em rgba(0,0,0,0.8);
    transform: scale(0.85);
    transition: all .3s;

    &:hover {
        transform: scale(1);
    } 
`
const LinkCard = styled(Link)`
    text-decoration: none;
    color: black;
`
const NameCard = styled.h2`
    color: #23ce6b;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 2.5vw;
    white-space: nowrap;
    margin: 2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: -1px -1px 0 #f6f8ff, 1px -1px 0 #f6f8ff, -1px 1px 0 #f6f8ff, 1px 1px 0 #f6f8ff;
`
const DietsH3 = styled.h3`
    margin: 1vw 0vw 3vw 0vw;
    font-family: 'ABeeZee', sans-serif;
    font-size: 2vw;
    font-weight: 100;
    text-align: center;
`

const Card = (props) => {
    return (
        <DivPrincipal>
            <LinkCard to={`/detail/${props.id}`}>
                <div>
                    <NameCard>{props.title}</NameCard>
                </div>
                <div>
                    <ImgCard src={props?.image} alt="imagen no encontrada" />
                </div>
                <div>
                    <DietsH3>{props.diets}</DietsH3>
                </div>
            </LinkCard>
        </DivPrincipal>
    )
}

export default Card;