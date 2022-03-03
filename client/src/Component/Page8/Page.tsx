import React from 'react'
import  { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './Page.css'
const Page = () => {
  const history = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      history('/entery')
    }, 5000)
  }, [history])
  return (
    <div className='backg'>
        
    </div>
  )
}

export default Page

