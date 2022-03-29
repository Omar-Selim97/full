import React from 'react'
import Better from './better.gif'
import './Entery.css'
import Heading from '../Heading/Heading'
import { useNavigate } from 'react-router-dom'

const Entery = () => {
  const route = useNavigate()

  return (
    <div className="entery ">
        <div className="bt">
        <button className='btn transperant text-end '  onClick={()=>{route('/prolog')}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
           </svg>
        </button>
        </div>

        <div className='mg'>
        <img src={Better} alt="Entery pic" />
        </div>
        <div className="gl">
        <div className="wrapper mt-5">
        <Heading text="EasiestTravel" arc={-100} radius={-300} />
        </div>
        <h4>Easiest Travel</h4> 
        </div>
        
    </div>
  )
}

export default Entery