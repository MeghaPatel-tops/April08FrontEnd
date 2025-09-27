import { useEffect, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Todo from './components/Todo'
import User from './components/User'
import About from './components/About'
import Prodcut from './components/Prodcut'
import Userprofile from './components/Userprofile'
import { ThemeContext } from './components/TheamContext'
import Counter from './components/Counter'
import Ecom from './components/Ecom'
import ProdData from './components/ProdData'



function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      {/* <ThemeContext value={"dark"} >
      <Userprofile user={{uid:101,name:"Krishna",email:"k2gmail.com",conatct:90009999}}/>
    </ThemeContext>
    <Counter /> */}
    <ProdData />
    </>
  )
}

export default App
