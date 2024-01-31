
import { useState } from 'react'




function App() {


  const [color, setColor] = useState("olive")



  return (

    <div className=' w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className=' flex flex-wrap justify-center bottom-12 inset-x-0  fixed px-2  '>

        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-3 py-2'>
          <button className='outline-none rounded-full px-4 text-white shadow-lg py-1' style={{ backgroundColor: 'red' }} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none rounded-full px-4 text-white shadow-lg py-1' style={{ backgroundColor: 'green' }} onClick={() => setColor("green")} >Green</button>
          <button className='outline-none rounded-full px-4 text-white shadow-lg py-1' style={{ backgroundColor: 'blue' }} onClick={() => setColor("blue")}>blue</button>
          <button className='outline-none rounded-full px-4 text-white shadow-lg py-1' style={{ backgroundColor: 'orange' }} onClick={() => setColor("orange")}>orange</button>
          <button className='outline-none rounded-full px-4 text-white shadow-lg py-1' style={{ backgroundColor: 'yellow' }} onClick={() => setColor("yellow")} >yellow</button>

        </div>
      </div>


    </div>


  )
}

export default App
