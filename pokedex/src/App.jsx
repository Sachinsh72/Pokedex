import { useState } from 'react'
// import Pokedex from './Components/Pokedex/pokedex'
import CustomRoutes from './routes/CustomeRoutes'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokedex flex-col items-center'>
      <h1 className='text-center text-5xl tracking-widest font-bold text-blue-600'>
          <Link to="/">
        Pokedex
        </Link>
      </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App
