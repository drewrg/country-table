import React from 'react'

export type SearchContextType = [string, () => void]

const SearchContext = React.createContext<SearchContextType>(['', () => {}])

export default SearchContext
