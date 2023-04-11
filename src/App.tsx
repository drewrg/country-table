import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Table, Header } from 'components'
import SearchContext, { SearchContextType } from 'contexts/searchContext'
import useSearchValue from 'hooks/useSearchValue'
import 'App.scss'

const App = () => {
  const [data, setData] = useState([])

  const searchContextValue = useSearchValue()

  const value = useMemo<SearchContextType>(
    () => searchContextValue,
    [searchContextValue],
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://restcountries.com/v3.1/all?fields=flag,name,capital,region,subregion,languages,currencies,independent,area',
      )
      setData(response.data)
    }
    fetchData().catch((error) => console.error(error))
  }, [])

  return (
    <SearchContext.Provider value={value}>
      <div className="App">
        <Header title="World Countries Desk" />

        <div className="card">
          <Table data={data} />
        </div>
      </div>
    </SearchContext.Provider>
  )
}

export default App
