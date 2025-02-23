import { useState } from 'react'

import './App.css'
import Header from './Component/Header'
import Salaryslip from './Salaryslip/Salaryslip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Salaryslip/>
    </>
  )
}

export default App
