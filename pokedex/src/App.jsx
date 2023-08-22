import { useState } from 'react'
import './App.css'
// import Pokedex from './Components/Pokedex/pokedex'
import CustomRoutes from './routes/CustomeRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokedex'>
      <h1>
          <Link to="/">
        Pokedex
        </Link>
      </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App
