import React from 'react';
import { useState } from "react";
import DatePicker from 'sassy-datepicker';
import leisure from './images/1.jpeg'
import study from './images/2.jpeg'
import grieving from './images/3.jpeg'
import roadTrip from './images/4.jpeg'
import trolly from './images/5.jpeg'
import business from './images/6.jpeg'
import suitcase from './images/7.jpeg'
import briefcase from './images/8.jpeg'
import handbage from './images/9.jpeg'
import multy from './images/10.jpeg'
import backpack from './images/11.jpeg'
import family from './images/12.jpg'

import '../../App.css';
import './Easy.css'
import { useNavigate } from 'react-router-dom';

function Easy() {
  const [color,setColor]=useState('');
  const [toggle,setToggle] =useState(false);
  const toggleIt =()=>{
    setToggle(!toggle)
  }

  const [input, setInput] = useState("");
  const [howInput, setHow] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");
  const [submittedTimes, setHowTimes] = useState("");
  const route = useNavigate()
  const onChange = (date:any) => {
    console.log(date.toString());
  };
type Values = {
  id: number;
  title: string;
  image: string;
  color:string;
};
const myList2:Array<Values> =[
  {
    id: 1,
    title: 'Suitcase',
    image: suitcase,
    color:'cornflowerblue',
  },
  {
    id: 2,
    title: 'Briefcase',
    image: briefcase,
    color:'cornflowerblue',
  },{
    id: 3,
    title: 'Handbage',
    image: handbage,
    color:'cornflowerblue',
  },
  {
    id: 4,
    title: 'Multy',
    image: multy,
    color:'green',
  },
  {
    id: 5,
    title: 'Backpack',
    image: backpack,
    color:'gray',
  },
  {
    id: 6,
    title: 'Family',
    image: family,
    color:'aqua',
  },
]
  const myList:Array<Values> = [
    {
      id: 1,
      title: 'Leisure',
      image: leisure,
      color:'cornflowerblue',
    },
    {
      id: 2,
      title: 'Study',
      image:study,
      color:'cornflowerblue',
    },
    {
      id: 3,
      title: 'Grieving',
      image: grieving,
      color:'cornflowerblue',
    },
    
    {
      id: 4,
      title: 'RoadTrip',
      image: roadTrip,
      color:'cornflowerblue',
    },
    
    {
      id: 5,
      title: 'Trolly',
      image: trolly,
      color:'cornflowerblue',
    },
    
    {
      id: 6,
      title: 'Business',
      image: business,
      color:'cornflowerblue',
    },
    
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img  key={item.id}  style={{borderColor:color}}     onClick={()=>setColor(item.color)} src={item.image} alt={item.title}   />
    </span>
  })
  const listImage2=myList2.map((item,i) => {
    return <span key={i}>
        <img  key={item.id} style={{borderColor:color}}     onClick={()=>setColor(item.color)} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="App easyAp text-center ">
       <button className='tod btn bg-transparent '  onClick={()=>{route('/homePage')}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <button className=' tdr btn transperant text-end '  onClick={()=>{route('/category')}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
           </svg>
        </button>
        
      <p className='mb-2'></p>
     <h1 className={toggle?'head-color':'head-toggle'} onMouseOver={toggleIt}>Fill Travel Info   </h1>
      
    <div className="format d-block mt-5">
    <form onSubmit={(e) => e.preventDefault()}>
          <p className="h5">Where </p>
          <p className='m-5'>
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
           type="text" 
           className="form-control"
            id="exampleFormControlInput1" 
            placeholder="type here"/>
          </p>
          <p className="h5">When </p>
        <DatePicker className='mx-auto my-3' onChange={onChange} />
        <p className="h5">How Many </p>
          <p className='m-5'>
          <input 
          value={howInput}
          onChange={(e) => setHow(e.target.value)}
          type="text" className="form-control" id="exampleFormControlInput1" placeholder="type here"/>
          </p>
          <button className='btn-primary' onClick={()=>setSubmittedInput(input)}>add info</button>
          
          <h2>{submittedInput}</h2>
    </form>
    </div>
        
        
      <main className='d-block mb-5'>
        <h4 className='text-info'>Travel Purpose</h4>
        {listImage }
        <br/>
        <br/>
        <h4>Choose Luggage</h4>
        {listImage2}
        <button className="btn px-5 " onClick={()=>setHowTimes(howInput)}>Wallet {submittedTimes}</button>
        <br/>
        <br/>
        <button onClick={()=>{route('/prepare')}} className="btn btn-danger px-5">Processed</button>
      </main>
    </div>
  );
}

export default Easy;
