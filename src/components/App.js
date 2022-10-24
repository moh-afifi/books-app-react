import '../css/App.css'
import { useState, useEffect } from 'react'
import HomePage from './HomePage'
import SearchComponent from './SearchComponent'
import * as BooksApi from '../utils/BooksAPI'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [books, setBooks] = useState([])
  const [booksList, setBooksList] = useState([])

  const updatebooks = (bookId, shelf, newBook) => {
    let newBooksArr = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, shelf: `${shelf}` }
      }
      return book
    })

    var exists =
      books.filter(function (o) {
        return o.id === bookId
      }).length > 0

    if (!exists) {
      newBooksArr.push({ ...newBook, shelf: `${shelf}` })
    }

    setBooks(newBooksArr)
  }

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll()
      setBooks(res)
    }

    getBooks()
  }, [])

  const searchBooks = async (query) => {
    if (query.trim() !== '') {
      let res
      try {
        res = await BooksApi.search(`${query}`, 20)
        res.forEach((book) => {
          books.forEach((x) => {
            if (x.id === book.id) {
              book.shelf = x.shelf
            }
          })
        })

        setBooksList(res)
      } catch (e) {
        setBooksList([])
      }
    } else {
      setBooksList([])
    }
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePage
            books={books}
            searchBooks={searchBooks}
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
            books={booksList}
            searchBooks={searchBooks}
            updateBooks={(bookId, shelf, newBook) => {
              updatebooks(bookId, shelf, newBook)
            }}
          />
        }
      />
    </Routes>
  )
}

export default App
