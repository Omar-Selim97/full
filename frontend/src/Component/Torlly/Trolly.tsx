import React from 'react'
import './Trolly.css'
import Frame from './Frame/Frame'
import List from './list.png'
import Text from './todo.gif'
import { useNavigate } from 'react-router-dom'

const Trolly = () => {
    const route = useNavigate()

    const today = new Date().toLocaleDateString()
  return (
    <div className='trolly'>
            <button className='tod btn bg-transparent '  onClick={()=>{route('/prepare')}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <button className=' tdr btn transperant text-end '  onClick={()=>{route('/plan')}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
           </svg>
        </button>
        <h1 className='my-3'>NYC , {today} , Trolly</h1> 
        <Frame/>
        <div className=" card col-lg-12 mb-3">
              <div className="card-body">
                <img src={List} alt='List' />
              </div>
          </div>
          <div className="group">
          <div className="estenial">
                <p>
                    <button className="btn btn-primary fw-bold px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Esential
                        <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </span>
                    </button>
                </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body">
            <ul className='list-group fw-bold'>
                <li className='list-group-item'>Passport</li>
                <li className='list-group-item'>Mobile</li>
                <li className='list-group-item'>Wallet</li>
                <li className='list-group-item'>Coins</li>
            </ul>
        </div>
        </div>

 </div>
    <div className="clothes">
        <p>
            <button className="btn btn-primary fw-bold px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
               <span> Clothes</span>
                <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </span>
            </button>
        </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body">
            <ul className='list-group fw-bold'>
                <li className='list-group-item'>Shirts</li>
                <li className='list-group-item'>Pants</li>
                <li className='list-group-item'>Underware</li>
                <li className='list-group-item'>Siwmware</li>
            </ul>
        </div>
        </div>

    </div>
    <div className="Care">
        <p>
            <button className="btn btn-primary fw-bold px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Care !
                <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </span>
            </button>
        </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body">
            <ul className='list-group fw-bold'>
                <li className='list-group-item'>Coditioner</li>
                <li className='list-group-item'>Shampo</li>
                <li className='list-group-item'>Soap</li>
                <li className='list-group-item'>Toath</li>
            </ul>
        </div>
        </div>

    </div>
    <div className="Accessiores">
        <p>
            <button className="btn btn-primary fw-bold px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Accessiores
            <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </span>
            </button>
        </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body">
            <ul className='list-group fw-bold'>
                <li className='list-group-item'>Shoes</li>
                <li className='list-group-item'>Phones Chargers</li>
                <li className='list-group-item'>Earphones</li>
                <li className='list-group-item'>Cat cage</li>
            </ul>
        </div>
        </div>

    </div>
        <div className="types">
            <p>
                <button className="btn btn-primary fw-bold px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add Categorey
                <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                    </svg>
                </span>
                </button>
            </p>
        </div>
        <div className=" card col-lg-12 mb-3">
              <div className="card-body">
                  <span>Create a Todo list :</span>
                <img src={Text} alt='List' />
              </div>
          </div>
        <div className="create">
            <button className='btn btn-danger'>Create
                <span className="cr">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                 <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                 </svg>
                </span>
            </button>
        </div>
</div>

         
</div> 
  )
}

export default Trolly