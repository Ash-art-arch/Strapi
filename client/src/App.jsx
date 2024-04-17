/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import Users from './Components/Users'

function App() {
  const [data,setData] = useState([])
  const [Name,setName]=useState("")
  const [Email,setEmail]=useState("")
  const [no,setNo]=useState("")
  useEffect(() => {
    fetch("http://localhost:1337/api/people")
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      console.log(data)
    })
},[])
const handleSubmit=async (e)=>{
// e.preventDefault()

const response = await fetch("http://localhost:1337/api/people", {

  method: "POST",
  headers: {
    'content-type': "application/json",
  },
  body: JSON.stringify({
    data: {
      Name,
      Email,
      Phone_No:no
    },
  })
})

const data = await response.json()
console.log('data=>' ,data);

}
  return (
  
   <div className='w-screen min-h-screen bg-slate-300 overflowx-hidden'>
      <div className='w-full h-[4rem] bg-slate-500 p-4 mb-4'>
        <h1 className='text-white text-2xl'>Simple Strapy </h1>
      </div>
      <div>
        <h2 className='p-4 text-center text-xl'>
        Enter Data
        
        </h2> 
            <form  className='flex justify-center flex-col items-center gap-5' onSubmit={(e)=>(handleSubmit(e))}>
              <input type="text" placeholder='Enter Your Name' className='w-[20rem] p-2 border-black border' onChange={(e)=>setName(e.target.value)}/>
              <input type="email" placeholder='Enter Your Email' className='w-[20rem] p-2 border-black border' onChange={(e)=>setEmail(e.target.value)}/>
              <input type="number" placeholder='Enter Your Phone No' className='w-[20rem] p-2 border-black border' onChange={(e)=>setNo(e.target.value)}/>
              <button className='w-[10rem] p-2 bg-slate-500 text-white'>Submit</button>
            </form>
      </div>
      <div>
    <h1 className='text-xl font-bold p-4 border-b border-black flex justify-center items-center mb-4' >User List</h1>
       
       { data.data &&data.data.map((users)=>{
          return(<Users key={users.id} name={users.attributes.Name} email={users.attributes.Email} no={users.attributes.Phone_No} />)
       })}
    
      </div>

       </div>
  
  )
}

export default App
