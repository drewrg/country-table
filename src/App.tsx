import { useEffect, useState } from 'react'
import axios from 'axios'
import globeLogo from './assets/globe.svg'
import './App.css'
import Table from './components/Table'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://restcountries.com/v3.1/all?fields=flag,name,capital,region,subregion,languages,currencies,independent,area',
      )
      setData(response.data.slice(0, 10))
    }
    fetchData().catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={globeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Countries table</h1>
      <div className="card">
        <Table data={data} />
      </div>
    </div>
  )
}

export default App
