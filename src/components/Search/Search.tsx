import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'

const Search = () => {
  return (
    <div>
      <form className="search-form" action="#">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  )
}

export default Search
