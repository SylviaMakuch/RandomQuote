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
        @media screen and (min-height: 940px) {
            height: 40%;
        }
`;
const InnerContainer = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 4vh;
    margin: 0.5%;
    @media screen and (max-width: 500px) {
        padding: 15%;
    }
`;

const Header = styled.div`
    font-family: 'Playfair Display', serif;
    font-weight: 800;   
    font-size: 8.5vh;
    letter-spacing: 2.0;
    padding: 20px 0px;
    text-align: center;

    @media screen and (min-height: 940px) {
            font-size: 270% ;
        }
    
    @media screen and (max-width: 600px) {
        font-size: 260% ;
        text-align: center;

    @media screen and (max-width: 300px) {
        font-size: 225% ;
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