import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import Detail from './components/detail'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000)
    return () => clearTimeout(timeout);
  }, [])
  return (
    <>
      {loading ? <Loader /> :

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/detail/:guid/*' element={<Detail />}/>
        </Routes>
      }
    </>
  )
}

export default App
