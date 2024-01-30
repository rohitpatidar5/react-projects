import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-[200px] p-4'>tailwind css</h1>
      <Card username= "rohit" btntext = 'firstButton'></Card>
      <Card username= "patidar"  btntext = 'secondButton'></Card>

    </>
  )
}

export default App
