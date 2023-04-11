import React from 'react'
import globeLogo from 'assets/globe.svg'
import { Search } from 'components'
import { HeaderProps } from './types'
import './styles.scss'

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="sticky-header">
      <div className="logo">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={globeLogo} className="logo" alt="Countries logo" />
        </a>
        <h1 className="title">{title}</h1>
      </div>
      <Search />
    </header>
  )
}

export default Header
