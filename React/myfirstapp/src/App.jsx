import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Welcome from './components/Welcome'
import { Aside,Model } from './components/Aside'
import Userprofile from './components/Userprofile'
import Counter from './components/Counter'
import Dashbord from './components/Dashbord'
import Calc from './components/Calc'


function App() {
  const [count, setCount] = useState(0)
  const user1 ={uname:'Megha',email:"m@gmail.com",contact:909999676}
  return (
    <>
      <h1>My first app</h1>
       <Aside  />
      {/* <Calc /> */}
      {/* <Dashbord userRole={"guest"} />
      <Home  isLogging={false} isloading={true} /> */}
      {/* 
      <Aside  />
      <Model />
      <Userprofile user={user1} />
      <Welcome  /> */}
  {/* <Counter /> */}
    </>
  )
}

export default App
