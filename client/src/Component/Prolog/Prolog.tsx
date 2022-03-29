import React from 'react'
import Bag from './Frame.png'
import Heading from '../Heading/Heading'
import './Prolog.css'
import { useNavigate } from 'react-router-dom'
const Prolog = () => {
    const route = useNavigate()

  return (
    <div className='pg'>
        <div className="f">
        <button className='tod btn bg-transparent '  onClick={()=>{route('/entery')}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
         </button>
        </div>
       <div className="img mt-5">
       <img  src={Bag} alt="Bag" />
       </div>
        <div className="wrapper ">
        <Heading text="EasiestTravel" arc={-100} radius={-300} />
        </div>
        <h4>Easiest Travel</h4>
        <div className="txt">
            <h2>Hi Traveller</h2>
            <p className="lead fw-bold">
                Now it's easier <br/>
                than ever to pack <br/>
                for your next travel
            </p>
            <div className="bk mt-5">
                <button onClick={()=>{route('/todo')}} className=" btn btn-danger px-5">
                    New Travel
                </button>
            </div>
        </div>

    </div>
  )
}

export default Prolog