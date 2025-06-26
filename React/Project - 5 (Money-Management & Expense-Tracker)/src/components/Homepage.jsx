import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function Homepage() {

  const navigate = useNavigate();
  return (
    <>
          <h1 className='text-7xl  font-bold  text-white text-center'>EXPENSE-TRACKER</h1>
          <p className='text-6xl p-6 font-semibold text-gold text-center'>
            Track Your Money - Your Money Matters
          </p>
    
          {/* <div className="flex justify-center items-center  pt-20">
            <img src="./public/Screen.png" alt="left phone" className="w-[250px]" />
            <img src="./public/Silver.png" alt="center phone" className="h-[350px] z-10" />
            <img src="./public/Large.png" alt="right phone" className="w-[250px] h-[350px]" />
            </div> */}
    
          <div className='flex justify-center'>
            <img src="./public/App3.png" alt="" className=' h-[600px] w-[500px] rounded-2xl' />
          </div>
    
    
    
    
          <div className='flex justify-center pt-10'>
            <button 
              onClick={() => navigate('/dashboard')}
              className='text-xl sm:text-3xl lg:text-5xl font-bold bg-gold text-black w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 sm:p-4 rounded-full  flex justify-center items-center gap-4 sm:gap-6 lg:gap-10 hover:bg-black hover:text-gold transition'>
              DashBoard
              <FaArrowRight className="text-2xl sm:text-3xl lg:text-4xl bg-white text-black p-2 rounded-3xl" />
              
            </button>
          </div>
    
          <p className='text-6xl pt-8 font-semibold text-white selected-red text-center'>
            Crafted with ❤️ by {' '}
            <a
              href="https://www.linkedin.com/in/prakharsahu9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lightBlue"
            >
              Prakhar
            </a>
          </p>
    
    
        </>
  )
}

export default Homepage