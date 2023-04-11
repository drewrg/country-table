import { useState } from 'react'
import { SearchContextType } from 'contexts/searchContext'

const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  return [searchValue, setSearchValue] as SearchContextType
}

export default useSearchValue
