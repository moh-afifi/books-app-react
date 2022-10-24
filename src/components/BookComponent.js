import * as ContactsApi from '../utils/BooksAPI'
import { useState } from 'react'

const BookComponent = ({ book, updateBooks }) => {
  const onSelect = async (shelf) => {
    updateBooks(book.id, shelf, book)
    await ContactsApi.update(book, shelf)
  }

  const onChange = (e) => {
    onSelect(e.target.value)
  }

  const moveTo = 'Move to...'
  const currentlyReading =
    book.shelf === 'currentlyReading'
      ? '✓ Currently Reading'
      : 'Currently Reading'
  const wantToRead =
    book.shelf === 'wantToRead' ? '✓ Want To Read' : 'Want To Read'
  const read = book.shelf === 'read' ? '✓ Read' : 'Read'
  const none =
    book.shelf !== 'currentlyReading' &&
    book.shelf !== 'wantToRead' &&
    book.shelf !== 'read'
      ? '✓ none'
      : 'none'

  const optionsList = [
    { value: 'Move to...', option: moveTo },
    { value: 'currentlyReading', option: currentlyReading },
    { value: 'wantToRead', option: wantToRead },
    { value: 'read', option: read },
    { value: 'none', option: none },
  ]

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.thumbnail ?? ''})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={onChange}>
            {optionsList.map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.option}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title ?? ''}</div>
      <div className="book-authors">{book.publisher ?? ''}</div>
    </div>
  )
}

export default BookComponent
