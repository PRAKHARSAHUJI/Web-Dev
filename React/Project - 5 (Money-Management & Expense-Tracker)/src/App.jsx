import './App.css'
import { FaArrowRight } from "react-icons/fa";
import Homepage from './components/Homepage';
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

    </>
  )
}

export default App
