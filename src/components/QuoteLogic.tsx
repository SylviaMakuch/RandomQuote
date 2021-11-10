import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import loading from './loading.svg';

const QuoteBox = styled.div`
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 25px;
    line-height: 1.5;
    letter-spacing: 1.5;
    padding: 30px 0px;
    text-align: center;
        @media screen and (max-width: 900px) {
            font-family: 'Lato', sans-serif;
            padding: 10%;
            font-size: 30px;
            line-height: 2.0;
        } 
    `

const AuthorName =styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1.5;
    padding: 15px 0px;
    text-align: center;
    font-style: italic;
`
const Diver =styled.div`
    display:flex;
    justify-content: center;
    `

function QuoteLogic() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quotes, setQuotes] = useState([]);

    const fetchQuote = () => {
        fetch("https://quotes.rest/qod")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setQuotes(result.contents.quotes);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    if (error) {
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <Diver><img src={loading} alt='Loading...'/> </Diver>;
    } else {
        return (
            
            <>
                {
                    quotes.map((quote: any, index) => {
                        return <QuoteBox key={index}>{quote.quote} 
                        <AuthorName className="author_name">~ {quote.author}</AuthorName>
                        </QuoteBox>
                    })
                }
            </>
        );
    }
}   
export default QuoteLogic;