import { useState } from 'react'
import FirstForm from './Components/FirstForm'
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashbord from './Components/Dashbord';
import Home from './Components/Home';
import Pricing from './Components/Pricing';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
        <Routes>
           <Route path="/" element={<Dashbord />} ></Route>
            <Route path="/home" element={<Home />} ></Route>
             <Route path="/pricing" element={<Pricing />} ></Route>
        </Routes>
    
     <Footer />  
    </>
  )
}

export default App
