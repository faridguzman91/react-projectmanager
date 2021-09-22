import React from 'react';
import styled from 'styled-components'

const headerWrapper = styled.div`
background-color: blue;
height: 100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Title = styled.h1`
height: 64px;
pointer-events: none;
`;

const Header = () => (
    <headerWrapper>
        <Title> project manager bord </Title>
    </headerWrapper>
) 

export default Header;