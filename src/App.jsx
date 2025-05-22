import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("")
  const [colorchange,setColorchange]= useState('')

  const handleColor=()=>{
    // console.log("button click");
    setColorchange(color)
    
  }

  const handleReset=()=>{

    const whites="white"
    // console.log("button click");
    setColorchange(whites)
    setColor("")
    
  }


  return (
    <>

    <div style={{backgroundColor:colorchange,minHeight:"100vh"}} className='text-center'>
      <h1>Change background color</h1>
      <input value={color}  onChange={(e)=>setColor(e.target.value)} className='form-control w-25 mx-auto mt-5'  type="text" placeholder='Enter a color name'/>
      <button onClick={handleColor} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info'>Click</button>
      <button onClick={handleReset} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info ms-3'>Reset</button>
    </div>
     
    </>
  )
}

export default App







