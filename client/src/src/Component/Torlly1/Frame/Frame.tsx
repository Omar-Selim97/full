import React, { useState } from 'react'
import p1 from './Frame 1.png'
import p2 from './Frame 2.png'
import p3 from './Frame 3.png'
import p4 from './Frame 4.png'
import p5 from './Frame 5.png'
import p6 from './Frame 6.png'
import p7 from './Frame 7.png'
import p8 from './Frame 8.png'
import './Frame.css'

const Frame = () => {
  const [trol,setTrol]=useState(-1);

    type Values = {
        id: number;
        title: string;
        image: string;
        color:string;
      };
      const  myList:Array<Values> = [
        {
          id: 1,
          title: 'USD$',
          image: p1,
          color:'#ddd',
        },
        {
          id: 2,
          title: 'C15',
          image:p2,
          color:'#ddd',
        },
        {
          id: 3,
          title: 'clock',
          image: p3,
          color:'#ddd',
        },
        
        {
          id: 4,
          title: 'cloudy',
          image: p4,
          color:'#ddd',
        },
        
        {
          id: 5,
          title: '120v',
          image: p5,
          color:'#ddd',
        },
        
        {
          id: 6,
          title: 'subway',
          image: p6,
          color:'#ddd',
        },
        {
            id: 7,
            title: 'corna red',
            image: p7,
            color:'#ddd',
          },
          {
            id: 8,
            title: 'Tax+8',
            image: p8,
            color:'#ddd',
          },
      ]
      const listImage=myList.map((item,i) => {
        return <span key={i}>
            <img  key={item.id} style={{borderColor: trol === i ? item.color : 'transparent', borderWidth: 3}} onClick={()=>setTrol(i)} src={item.image} alt={item.title}   />
        </span>
      })
      return (
        <div className="mx-auto card col-lg-12">
              <div className="card-body">
                {listImage}
              </div>
          </div>
      )
}

export default Frame