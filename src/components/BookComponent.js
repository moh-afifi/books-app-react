import * as ContactsApi from '../utils/BooksAPI'
import { useState } from 'react'
const BookComponent = ({ book }) => {
  const onSelect = async (book, shelf) => {
    const res = await ContactsApi.update(book, shelf)
    console.log(res)
  }

  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
    onSelect(book, value)
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={onChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors[0]}</div>
    </div>
  )
}

export default BookComponent
