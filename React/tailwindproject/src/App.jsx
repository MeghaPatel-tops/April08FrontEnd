import { useContext, useState } from 'react'

import './App.css'
import GrandPa from './assets/Components/GrandPa'
import { themeContext } from './assets/Components/themeContext'
import Counterapp from './assets/Components/Counterapp'

function App() {
  const {theme,setTheme} = useContext(themeContext);
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        backgroundColor: theme ==="light" ? 'white':'black',
        color:theme =="light"? 'black':'white'
      }}>
        <h1>App HEading</h1>
         <GrandPa />
         <Counterapp />
      </div>
     
    </>
  )
}

export default App
