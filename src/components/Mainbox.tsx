import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';

const MainContainer = styled.div`
    max-width: 50em;
    padding: 1rem;
    background: linear-gradient(to left, #ff00d9, #08fffb);
    padding: 3px;
    
`;
const InnerContainer = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 4em;
    margin: 0.5%;
`;

const Header = styled.div`
    font-family: 'Lora', serif;;
    font-size: 90px;
    line-height: 2.0;
    letter-spacing: 2.0;
    padding:50px 0px;
    text-align: center;
    @media screen and (max-width: 1150px) {
        font-size: 50px;
        text-align: center;
    }
`;

export default function MainBox() {
    return(
        <MainContainer>
            <InnerContainer>
            <Header> The API says...</Header>
            <Quote />
            </InnerContainer>
        </MainContainer>
    )
};