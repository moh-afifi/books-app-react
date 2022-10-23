import BookComponent from './BookComponent'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const SearchComponent = ({ books, updateBooks }) => {
  const updateSearch = (search) => {
    setSearch(search.trim())
  }

  const [search, setSearch] = useState('')

  const showingBooks =
    search === ''
      ? books
      : books.filter((b) =>
          b.title.toLowerCase().trim().includes(search.trim()),
        )

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
          {showingBooks.map((book) => {
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
