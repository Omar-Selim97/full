import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const route = useNavigate();

  const login = () => {
    axios.post("http://localhost:4000/login", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res:any ) => {
      if (res.data === "success") {
       window.location.href = "/profile"
     }
    }, () => {
      console.log("Failure");
    })
  }

  return (
    <div className='log'>
          <button
        className="tod btn bg-transparent "
        onClick={() => {
          route("/");
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
      <h1 className='py-3'>Login</h1>
      <div className="email">
      <input className='my-3' type="text" placeholder='username' onChange={e => setUsername(e.target.value)}/>
        </div>
     <div className="pass">
     <input className='my-3' type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
       </div>
      <button className='btn btn-danger' onClick={login}>Login</button>
    </div>
  )
}
