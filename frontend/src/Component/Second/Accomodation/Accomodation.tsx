import React, { useState } from 'react'
import hotel from './hotel.png'
import Bb from './b&b.png'
import short from './short.png'
import sofa from './sofa.png'
import trent from './trent.png'
import van from './van.png'
const Accomodation = () => {
  const [color,setColor]=useState('transperant');
  type Values = {
    id: number;
    title: string;
    image: string;
    color:string;
  };
  const  myList:Array<Values> = [
    {
      id: 1,
      title: 'hotel',
      image: hotel,
      color:'cornflowerblue',
    },
    {
      id: 2,
      title: 'Bb',
      image:Bb,
      color:'cornflowerblue',
    },
    {
      id: 3,
      title: 'short',
      image: short,
      color:'cornflowerblue',
    },
    
    {
      id: 4,
      title: 'sofa',
      image: sofa,
      color:'cornflowerblue',
    },
    
    {
      id: 5,
      title: 'trent',
      image: trent,
      color:'cornflowerblue',
    },
    
    {
      id: 6,
      title: 'van',
      image: van,
      color:'cornflowerblue',
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img style={{background:color}}  key={item.id}  onClick={()=>{setColor(item.color)}} src={item.image} alt={item.title}   />
    </span>
  })
  return (
   
      <div className="mx-auto my-5 card  col-sm-8 col-md-8 col-lg-6">
          <div className="card-body">
            <h4 className="card-title">
              Accomodation
            </h4>
            {listImage}
          </div>
      </div>
     
    
  )
}

export default Accomodation