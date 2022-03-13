import React, { useState } from 'react'
import baby from './baby.png'
import medical from './medical.png'
import merchandise from './merchandise.png'
import pets from './pets.png'
import valuables from './valuables.png'
import toddlers from './toddlers.png'
const Care = () => {
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
      title: 'baby',
      image: baby,
      color:'aqua',
    },
    {
      id: 2,
      title: 'medical',
      image:medical,
      color:'blue',
    },
    {
      id: 3,
      title: 'merchandise',
      image: merchandise,
      color:'green',
    },
    
    {
      id: 4,
      title: 'pets',
      image: pets,
      color:'aqua',
    },
    
    {
      id: 5,
      title: 'valuables',
      image: valuables,
      color:'aqua',
    },
    
    {
      id: 6,
      title: 'toddlers',
      image: toddlers,
      color:'aqua',
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img  style={{background:color}}  key={item.id}  onClick={()=>{setColor(item.color)}} src={item.image} alt={item.title} />
    </span>
  })
  return (
    <div className="mx-auto my-5 card col-xs-12  col-sm-8 col-md-8 col-lg-6">
    <div className="card-body">
      <h4 className="card-title">
        Special Care
      </h4>
      {listImage}
    </div>
</div>
  )
}

export default Care