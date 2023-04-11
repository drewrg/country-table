import { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Header } from 'components'
import 'App.scss'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://restcountries.com/v3.1/all?fields=flag,name,capital,region,subregion,languages,currencies,independent,area',
      )
      setData(response.data)
    }
    fetchData().catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <Header title="World Countries Desk" />

      <div className="card">
        <Table data={data} />
      </div>
    </div>
  )
}

export default App
