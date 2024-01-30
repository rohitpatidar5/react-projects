import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)


  }
  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>

  )
}

export default App
