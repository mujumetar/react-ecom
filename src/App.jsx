import { useState, useEffect } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import { Products } from './components/Products'

function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])


  function Fetchapi() {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => setData(res),
        console.log(data))
  }

  useEffect(() => {
    Fetchapi()
  }, [count])

  return (


    <>
      <div className="container-fluid">
        <Navbar />
        
        <div className="container">
          <Products data={data}/>
        </div>
      </div >
    </>
  )
}

export default App
