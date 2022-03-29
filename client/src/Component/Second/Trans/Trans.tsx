import React, { useState } from 'react'
import Bus from './Bus.png'
import car from './car.png'
import metro from './metro.png'
import plane from './plane.png'
import ship from './ship.png'
import taxi from './taxi.png'
const Trans = () => {
  const [trans,setTrans]=useState(-1);

  type Values = {
    id: number;
    title: string;
    image: string;
    color:string;
  };
  const  myList:Array<Values> = [
    {
      id: 1,
      title: 'Bus',
      image: Bus,
      color:' rgb(72, 154, 202)',
    },
    {
      id: 2,
      title: 'car',
      image:car,
      color:'rgb(27, 115, 167)',
    },
    {
      id: 3,
      title: 'metro',
      image: metro,
      color:'rgb(0, 162, 255)',
    },
    
    {
      id: 4,
      title: 'plane',
      image: plane,
      color:'aqua',
    },
    
    {
      id: 5,
      title: 'taxi',
      image: taxi,
      color:'blue',
    },
    
    {
      id: 6,
      title: 'ship',
      image: ship,
      color:'cornflowerblue',
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img className='lisImg' key={item.id}  style={{borderColor: trans === i ? item.color : 'transparent', borderWidth: 3}}     onClick={()=>setTrans(i)} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="mx-auto my-5 trans card col-xs-8  col-sm-8 col-md-8 col-lg-6">
    <div className="card-body">
      <h4 className="card-title">
        Transport
      </h4>
      {listImage}
    </div>
</div>
  )
}

export default Trans