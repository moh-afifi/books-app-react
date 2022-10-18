import CategoryComponent from './CategoryComponent'
import { Link } from 'react-router-dom'
const HomePage = ({ books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CategoryComponent categoryName={'currentlyReading'} books={books} />
          <CategoryComponent categoryName={'wantToRead'} books={books} />
          <CategoryComponent categoryName={'read'} books={books} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default HomePage
