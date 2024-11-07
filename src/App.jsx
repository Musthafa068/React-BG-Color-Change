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
    
  }


  return (
    <>

    <div style={{backgroundColor:colorchange,minHeight:"100vh"}} className='text-center'>
      <h1>Change background color</h1>
      <input  onChange={(e)=>setColor(e.target.value)} className='form-control w-25 mx-auto mt-5' type="text" placeholder='Enter a color name'/>
      <button onClick={handleColor} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info'>Click</button>
      <button onClick={handleReset} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info ms-3'>Reset</button>
    </div>
     
    </>
  )
}

export default App









// import { useState } from 'react'
// import './App.css'

// function App() {
//   // const [primary] = useState("blue")
//   // const [dark] = useState("black")

//   const [colorchange,setColorchange]= useState('')

//   const changecolor=(color)=>{
//     setColorchange(color)
    
//   }

  


//   return (
//     <>

//     <div style={{backgroundColor:colorchange,minHeight:"100vh"}} className='text-center'>
//       <h1>Change background color </h1>
      
//       <button onClick={()=>changecolor("blue")} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info mx-2'>primary</button>

//       <button onClick={()=>changecolor("black")} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info mx-2'>dark</button>

//       <button onClick={()=>changecolor("navy")} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info mx-2'>info</button>

//       <button onClick={()=>changecolor("green")} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info mx-2'>success</button>

//       <button onClick={()=>changecolor("red")} style={{width:"100px"}} className='bg bg-border rounded mt-3 bg-info mx-2'>danger</button>

//     </div>
     
//     </>
//   )
// }

// export default App