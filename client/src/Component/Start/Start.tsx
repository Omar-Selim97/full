import React from 'react'
import './Start.css'
import { useNavigate } from 'react-router-dom'
import Bag from './Frame.png'
const Start = () => {
    const route = useNavigate()

  return (
    <div className='start'>
          <button className='tod btn bg-transparent '  onClick={()=>{route('/todo')}}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                 </svg>
         </button>
         <div className="clear"></div>
        <div className="bag mt-5">
            <img src={Bag} alt="Bag" />
        </div>
        <div className="clear"></div>
        <h2 className='text-light'>Get a Pack List</h2>
        <div className="ph">
      <div className="text-center">
        <p className="lead fw-bold">
        Plus see a destination<br/>
        info to plan your visit.<br/>
        A packing compass is<br/>
        automaticaly created<br/>
        so you can be sure<br/>
        you have done all needs<br/>
        to be done! so its time! <br/>

        </p>
      </div>
         <button onClick={()=>{route('/homePage')}} className='px-5 btn-danger bn'>
          <span className="text-light fw-bold">
              Next
          </span>
         </button>
      </div>
    </div>
  )
}

export default Start