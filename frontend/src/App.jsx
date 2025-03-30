import './App.css'
import Hero from './components/Hero';
import Navbar from './components/CustomNavbar';
import './index.css';
import { useState } from 'react';
import RightSide from './components/RightSide';
import CustomNavbar from './components/CustomNavbar';
import Dashboard from './dashboard/dashboard/Dashboard'

function App() {
const [right,setright] = useState('')
  return (
    <div>
      {/* <CustomNavbar/>
    <div className='flex gap-20 justify-center pt-5 p-20'>

      <Hero setright={setright}/>
      <RightSide rightside={right} />
    </div> */}
    <Dashboard/>
    </div>
    
  )
}

export default App
