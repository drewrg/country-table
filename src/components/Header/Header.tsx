import React, { useContext } from 'react'
import globeLogo from 'assets/globe.svg'
import { Search } from 'components'
import SearchContext from 'contexts/searchContext'
import { HeaderProps } from './types'
import './styles.scss'

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useContext(SearchContext)
  return (
    <header className="sticky-header">
      <div className="logo">
        <a href="#" target="_blank" rel="noreferrer">
          <img src={globeLogo} className="logo" alt="Countries logo" />
        </a>
        <h1 className="title">{title}</h1>
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  )
}

export default Header
