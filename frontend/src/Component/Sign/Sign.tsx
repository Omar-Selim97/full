import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Sign.css'
import SignPhoto from './sign.png'
const Sign = () => {
    const route = useNavigate();

  return (
    <div className="sign">
         <button
        className="tod btn bg-transparent "
        onClick={() => {
          route("/article");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
      <button
        className=" tdr btn transperant text-end "
        onClick={() => {
          route("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
        <h1 className='mb-3'>Sign up to save list</h1>
       <div className="imgS">
       <img src={SignPhoto} alt="" />
       </div>
        <button className='btn btn-light google'>Sign up with google</button>
        <div>
            <p>Or</p>
        </div>
        <div className="email">
        <input type="email" placeholder='Email' />
        </div>
        <div className="pass">
        <input type="password" placeholder='Password' />
        </div>
        <button className='btn btn-danger'>Sign Up</button>
    </div>
  )
}

export default Sign