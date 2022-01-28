import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Section from './compenent/Section/Section'
import Banck from './compenent/Banck-exo/Banck'
import Shoping from './compenent/Shoping-card/Shoping'
import Coffe from './compenent/Coffe/Coffe'
// import Counter from './compenent/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Section/> */}
      {/* <Banck/> */}
      {/* <Counter/> */}
      <Shoping/>
      {/* <Coffe /> */}

      
    </div>
  )
}

export default App
