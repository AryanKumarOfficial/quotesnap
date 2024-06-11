import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import QuoteCard from './QuoteCard'
import axios from 'axios'

const Home = () => {
  const [quote, setQuote] = useState('I love the smell of turpentine in the morning.')

  const fetchQuote = async () => {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    setQuote(response?.data[0])
  }
  useEffect(() => {
    fetchQuote()
  }, [])
  return (
    <main>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} />
    </main>
  )
}

export default Home