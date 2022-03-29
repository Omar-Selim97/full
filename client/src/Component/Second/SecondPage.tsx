import React from 'react'
import Trans from './Trans/Trans'
import Activity from './Activity/Activity'
import Accomodation from './Accomodation/Accomodation'
import Care from './Care/Care'
import './scond.css'
import { useNavigate,
  Routes,
  Route,
  Link } from 'react-router-dom'
import { useState } from 'react'
const SecondPage = () => {
 const [hex,setHex]=useState('#EEE')
 const getRandom=():void=>{
  const randomColor="#"+Math.floor(Math.random()*16777215).toString(16)
  setHex(randomColor)
 }
  const route = useNavigate()
  return (
    <div>
       <button className='tod btn bg-transparent '  onClick={()=>{route('/easy')}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <button className=' tdr btn transperant text-end '  onClick={()=>{route('/prepare')}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
           </svg>
        </button>
      <h1 onMouseMove={getRandom} style={{color:hex}} className='my-3'> Choose Your Categories</h1>
      <Link className='btn btn-primary' to="Trans">Trans</Link> {"  "}
      <Link className='btn btn-primary' to="Activity">Activity</Link>{"  "}
      <Link className='btn btn-primary' to="Accomodation">Accomodation</Link> {"  "}
      <Link className='btn btn-primary' to="Care">Care</Link> {"  "}
     
      <Routes>
        <Route path="Trans" element={<Trans />} />
        <Route path="Activity" element={<Activity />} />
        <Route path="Accomodation" element={<Accomodation />} />
        <Route path="Care" element={<Care />} />
      </Routes>
        <Trans/>
        <Activity/>
        <Accomodation/>
        <Care/>
        <button onClick={()=>{route('/')}} className='btn-danger fw-bold px-5 mb-4'>Submit</button>
    </div>
  )
}

export default SecondPage