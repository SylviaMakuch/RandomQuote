import React from 'react';
import styled from 'styled-components';
import QuoteLogic from './QuoteLogic';

const MainContainer = styled.div`
    width: 80%
    display: flex;
    background: linear-gradient(to left, #ff00d9, #08fffb);
    padding: 3px;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 10%;
`;

const InnerContainer = styled.div`
    background: #000000;
    height: 80%;
    color: #ffffff;
    padding: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Header = styled.div`
    font-family: 'Playfair Display', serif;
    font-weight: 800;   
    letter-spacing: 2.0;
    padding: 20px 0px;
    text-align: center;
    font-size: 60px;
`;

export default function MainBox() {
    return (
        <MainContainer>
            <InnerContainer>
                <Header> Daily Quote</Header>
                <QuoteLogic />
            </InnerContainer>
        </MainContainer>
    )
};