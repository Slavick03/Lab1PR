import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function plusClick() {
    setCount(count + 1)
  }

  function minusClick() {
    setCount(count - 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <div className='app'>
      <div className='card'>
        <h1>{count}</h1>
        <div className='buttons'>
          <button onClick={minusClick}> Deduct One </button>
          <button onClick={resetCount}> Reset </button>
          <button onClick={plusClick}> Add One </button>
        </div>
      </div>



    </div>
  )
}

export default App
