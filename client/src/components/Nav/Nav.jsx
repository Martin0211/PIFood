import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SerchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const DivNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #23ce6b;
    height: 5vw;
    overflow: hidden;
    `

const Div = styled.div`
    display: flex;`

const DivButton = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8vw;
    `

const StyledLink = styled(NavLink)`
    font-family: 'ubuntu', sans-serif;
    font-weight: 300;
    color: #50514f;
    font-size: 1.5vw;
    padding: 2vw;
    text-decoration: none;

    &.${props => props.activeclassname} {
        border-top: .2vw solid #a846a0;
        color: #a846a0;
        font-size:1.8vw; 
        font-weight: 500; 
        padding-top: .5VW;
        transition: .8s;
        margin-top: 1vw;
    }
`


const StyledLogOut = styled(NavLink)`
    font-family: 'ubuntu', cursive;
    font-weight: 300;
    color: red;
    font-size: 2vw;
    padding: 2vw;
    text-decoration: none;
    padding-left: 12vw;
    padding-right: 5vw;
`




export default function Nav(props) {

    return (
        <DivNav>
            {/* <Logo /> */}
            <ul>
                <Div>
                    <DivButton>
                        <StyledLink activeclassname="active" to='/home'>
                            Home
                        </StyledLink>
                        <StyledLink activeclassname="active" to="/create">
                            Create
                        </StyledLink>
                        <StyledLink activeclassname="active" to="/abaut">
                            Abaut
                        </StyledLink>
                    </DivButton>
                    <SearchBar searchName={props.searchName} />
                    <StyledLogOut activeclassname="active" to="/">
                        LogOut
                    </StyledLogOut>
                </Div>
            </ul>

        </DivNav>
    )
}; 