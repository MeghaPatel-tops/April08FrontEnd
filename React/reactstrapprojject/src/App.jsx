import { useState } from 'react'
import FormComp from './assets/Component/FormComp';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <FormComp />
     </>
  )
}

export default App
