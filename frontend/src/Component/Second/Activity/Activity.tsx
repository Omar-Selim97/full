import React, { useState } from 'react'
import biking from './biking.png'
import club from './club.png'
import hiking from './hiking.png'
import golf from './golf.png'
import photo from './photo.png'
import swimming from './swimming.png'
const Activity = () => {
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
      title: 'swimming',
      image: swimming,
      color:'aqua',
    },
    {
      id: 2,
      title: 'hiking',
      image:hiking,
      color:'blueviolet',
    },
    {
      id: 3,
      title: 'biking',
      image: biking,
      color:'cornflowerblue',
    },
    
    {
      id: 4,
      title: 'club',
      image: club,
      color:'cadetblue',
    },
    
    {
      id: 5,
      title: 'golf',
      image: golf,
      color:'blue',
    },
    
    {
      id: 6,
      title: 'photo',
      image: photo,
      color:'rgb(38, 88, 180)',
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
              Activity
            </h4>
            {listImage}
          </div>
      </div>
  )
}

export default Activity