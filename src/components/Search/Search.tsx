import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchProps } from '@components/Search/types'
import './styles.scss'

const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <form className="search-form" action="#">
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value || '')
          }}
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon icon={faSearch} />
      </form>
    </div>
  )
}

export default Search
