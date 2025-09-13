import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Todo from './components/Todo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <Hero />
       <h2>Inline css Example</h2>
       <h1 style={{backgroundColor:'gray',color:'white',textAlign:'center'}}>Welcome to app</h1>
       <h2>CSS Stylesheets (.css files)</h2>
       <Home /> */}
       <Todo />
    </>
  )
}

export default App
