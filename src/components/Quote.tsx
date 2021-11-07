import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';

function Quote() {
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
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {
                    quotes.map((quote: any, index) => {
                        return <div key={index}>{quote.quote}</div>
                    })
                }
            </>
        );
    }
}
export default Quote;