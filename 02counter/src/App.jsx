import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    //counter = counter + 1; //when we use this line we have to use counter as let
    setCounter(counter+1)

    // document.querySelector('SPAN').innerHTML = counter;  previously we have to use DOM


  }
  const removeValue = () => {
    //counter = counter - 1
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter Value: <span>{counter}</span></h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
    

  )
}

export default App
