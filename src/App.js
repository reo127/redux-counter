import "./counter.css"
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from "./state/counterSclice"

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleincrement = ()=> {
    dispatch(increment())
  }

  const handledecrement = () => {
    dispatch(decrement())
  }
  
  return (
    <div className="">
      <div className='parent'>
        <button className='btn' onClick={handleincrement}>+</button>
        <p className='count'>{count}</p>
        <button className='btn' onClick={handledecrement}>-</button>
      </div>
    </div>
  );
}

export default App;