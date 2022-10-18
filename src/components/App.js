import '../css/App.css'
import { useState, useEffect } from 'react'
import HomePage from './HomePage'
import SearchComponent from './SearchComponent'
import * as ContactsApi from '../utils/BooksAPI'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const res = await ContactsApi.getAll()

      setBooks(res)
    }
    getBooks()
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<HomePage books={books} />} />

      <Route path="/search" element={<SearchComponent books={books} />} />
    </Routes>
  )
}

export default App
