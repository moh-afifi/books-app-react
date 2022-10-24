import BookComponent from './BookComponent'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const SearchComponent = ({ books, searchBooks, updateBooks }) => {
  const [search, setSearch] = useState('')

  const updateSearch = (search) => {
    setSearch(search.trim())
    searchBooks(search.trim())
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={(event) => updateSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length !== 0 &&
            books.map((book) => {
              return (
                <li key={book.id}>
                  <BookComponent book={book} updateBooks={updateBooks} />
                </li>
              )
            })}
        </ol>
      </div>
    </div>
  )
}

export default SearchComponent
