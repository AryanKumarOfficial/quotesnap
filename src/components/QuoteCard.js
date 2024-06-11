import React from 'react'
import '../styles/QuoteCard.css'
const QuoteCard = ({ quote, fetchQuote }) => {
    const handleSave = (e) => {
        let quotes = [];
        if (localStorage.getItem('quotes')) {
            let localQuotes = JSON.parse(localStorage.getItem('quotes'));
            localQuotes.push(quote);
            localStorage.setItem('quotes', JSON.stringify(localQuotes));
        }
        else {
            quotes.push(quote);
            localStorage.setItem('quotes', JSON.stringify(quotes));
        }
    }

    const handleDel = (e) => { 
        let localQuotes = JSON.parse(localStorage.getItem('quotes'));
        let index = localQuotes.indexOf(quote);
        localQuotes.splice(index, 1);
        localStorage.setItem('quotes', JSON.stringify(localQuotes));
        window.location.reload();
    }

    return (
        <section className='card'>
            <div className='quote-card'>
                <h2 className='quote-text'>
                    {quote}
                </h2>
                {fetchQuote && <div className="action">
                    <button onClick={handleSave} className='quote-button'>Save</button>
                    <button onClick={fetchQuote} className='quote-button'>Next</button>
                </div>}
                {!fetchQuote && <div className="action">
                    <button onClick={handleDel} className='quote-button del'>Delete</button>
                </div>}
            </div>
        </section>
    )
}

export default QuoteCard