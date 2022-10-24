import CategoryComponent from './CategoryComponent'
import { Link } from 'react-router-dom'
const HomePage = ({ books, updateBooks, searchBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CategoryComponent
            categoryName={'Currently Reading'}
            queryParam={'currentlyReading'}
            books={books}
            updateBooks={updateBooks}
          />
          <CategoryComponent
            categoryName={'Want To Read'}
            queryParam={'wantToRead'}
            books={books}
            updateBooks={updateBooks}
          />
          <CategoryComponent
            categoryName={'Read'}
            queryParam={'read'}
            books={books}
            updateBooks={updateBooks}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" onClick={() => searchBooks('')}>
          Add a book
        </Link>
      </div>
    </div>
  )
}

export default HomePage
