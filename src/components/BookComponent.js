import * as ContactsApi from '../utils/BooksAPI'
const BookComponent = ({ book, updateBooks }) => {
  const onSelect = async (shelf) => {
    updateBooks(book.id, shelf, book)
    await ContactsApi.update(book, shelf)
  }

  const onChange = (e) => {
    onSelect(e.target.value)
  }

  const currentlyReading =
    book.shelf === 'currentlyReading'
      ? '✓ Currently Reading'
      : 'Currently Reading'
  const wantToRead =
    book.shelf === 'wantToRead' ? '✓ Want To Read' : 'Want To Read'
  const read = book.shelf === 'read' ? '✓ Read' : 'Read'
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
            <option value="Move to...">Move to...</option>
            <option value="currentlyReading">{currentlyReading}</option>
            <option value="wantToRead">{wantToRead}</option>
            <option value="read">{read}</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.publisher}</div>
    </div>
  )
}

export default BookComponent
