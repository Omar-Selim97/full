import { useNavigate } from 'react-router-dom'
import './Todo.css'
import Bag from './Frame.png'
const Todo = () => {
    const route = useNavigate()
  return (
    <div className='todo'>
      <button className='tod btn bg-transparent '  onClick={()=>{route('/prolog')}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <button className=' tdr btn transperant text-end '  onClick={()=>{route('/start')}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
           </svg>
        </button>
      <div className="clear"></div>
      <div className="bag">
          <img src={Bag} alt="Bag" />
      </div>
      <div className="clear"></div>
      <h2 className='text-light'>What to do ?</h2>
      <div className="ph">
      <div className="text-center">
        <p className="lead fw-bold">
          Fill in the info <br/>
          Choose Categories <br/>
          and let us calculate <br/>
          your packing for you
        </p>
      </div>
         <button onClick={()=>{route('/start')}} className='px-5 btn-danger bn'>
          <span className="text-light fw-bold">
              Next
          </span>
         </button>
      </div>
    </div>
  )
}

export default Todo