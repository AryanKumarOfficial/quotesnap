// here all quotes are displayed from the local storage. 

import React, { useState } from 'react'
import QuoteCard from './QuoteCard'
import '../styles/Quotes.css'

const Quotes = () => {
  const [quotes, setQuotes] = useState([])

  React.useEffect(() => {
    const quotes = JSON.parse(localStorage.getItem('quotes'))
    if (quotes) {
      setQuotes(quotes)
    }
  }, [])
  return (
    <section className='parent'>
      {quotes.length > 0 ? quotes?.map((quote, index) => {
        return <div className="container">
          <QuoteCard key={index} quote={quote} />
        </div>

      }) :
        <div className='no-quotes'>
          <h2>No Quotes Found</h2>
          <p>There are no quotes to display. Please add some quotes.</p>
        </div>
      }
      {/* delete all button */}
      {quotes.length > 0 && <button onClick={() => {
        localStorage.removeItem('quotes')
        window.location.reload()
      }} className='quote-button delall'>Delete All</button>}
    </section>
  )
}

export default Quotes