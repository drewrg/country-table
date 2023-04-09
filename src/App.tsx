import globeLogo from './assets/globe.svg'
import './App.css'
import Table from './components/Table'

const App = () => {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={globeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Countries table</h1>
      <div className="card">
        <Table />
      </div>
    </div>
  )
}

export default App
