import React from 'react';
import styled from 'styled-components';
import QuoteLogic from './QuoteLogic';

const MainContainer = styled.div`
    display: flex;
    height: 60vh;
    background: linear-gradient(to left, #ff00d9, #08fffb);
    padding: 3px;
    margin: 10%;
    display: grid;
        @media screen and (max-width: 840px) {
            height: 30%;
        }
`;
const InnerContainer = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 3em;
    margin: 0.5%;
`;

const Header = styled.div`
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    font-size: 80px;
    letter-spacing: 2.0;
    padding: 20px 0px;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 40px ;
        text-align: center;
    }
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