import BookComponent from './BookComponent'

const CategoryComponent = ({ categoryName, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{categoryName} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((b) => b.shelf === categoryName)
            .map((book) => {
              return (
                <li key={book.id}>
                  <BookComponent book={book} />
                </li>
              )
            })}
        </ol>
      </div>
    </div>
  )
}

export default CategoryComponent
