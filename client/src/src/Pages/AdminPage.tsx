import React, { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import { myContext } from './Context';
import { UserInterface } from '../Interfaces/Interfaces';
import './Admin.css'
export default function AdminPage() {
  const ctx = useContext(myContext);
  const [data, setData] = useState<UserInterface[]>();
  const [selectedUser, setSelectedUser] = useState<string>();
  useEffect(() => {
    Axios.get("http://localhost:4000/getallusers", {
      withCredentials: true
    }).then((res:any  ) => {
      setData(res.data.filter((item : UserInterface) => {
        return item.username !== ctx.username
      }))
    })
  }, [ctx]);
  if (!data) {
    return null;
  }
  

  const deleteUser = () => {
    let userid : string;
    data.forEach((item: UserInterface) => {
      
      if (item.username === selectedUser) {
        userid = item.id;
      }
    })
    
    Axios.post("http://localhost:4000/deleteuser", {
      id: userid!
    }, {
      withCredentials: true
    });
  }

  return (
    <div className='adminP  '>
      <div className="container text-center row align-content-center justify-content-center">
      <h1>Admin Page, Only Admin's Can See This!</h1>
      <select className='my-3 d-block ' onChange={e => setSelectedUser(e.target.value)} name="deleteuser" id="deleteuser">
      <option id="Select a user">Select A User</option>
        {
          data.map((item : UserInterface) => {
            return (
              <option key={item.username} id={item.username}>{item.username}</option>
            )
          })
        }
      </select>
      <button className='btn btn-danger sec d-block ' onClick={deleteUser}>Delete User</button>
      </div>
    </div>
  )
}
