import '../css/App.css'
import { useState, useEffect } from 'react'
import HomePage from './HomePage'
import SearchComponent from './SearchComponent'
import * as ContactsApi from '../utils/BooksAPI'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [books, setBooks] = useState([])

  const updatebooks = (bookId, shelf) => {
    const newBooksArr = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, shelf: `${shelf}` }
      }
      return book
    })
    setBooks(newBooksArr)
  }

  useEffect(() => {
    const getBooks = async () => {
      const res = await ContactsApi.getAll()
      setBooks(res)
    }
    getBooks()
  }, [])

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePage
            books={books}
            updateBooks={(bookId, shelf) => {
              updatebooks(bookId, shelf)
            }}
          />
        }
      />

      <Route
        path="/search"
        element={
          <SearchComponent
            books={books}
            updateBooks={(bookId, shelf) => {
              updatebooks(bookId, shelf)
            }}
          />
        }
      />
    </Routes>
  )
}

export default App
