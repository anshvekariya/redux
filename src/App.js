

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { decrement, decrementByAmount, incrementByAmount } from './app/counterSlice';

function App() {

  let [value,setvalue] = useState('');

  const count = useSelector((state)=>state.counter.value);

  const dispatch = useDispatch()


  return (
    <div className="App">

<h1>
value:{count}

</h1>
    <input type='Number' value={value} onChange={(e)=> setvalue(e.target.value)}></input>
      <br></br>
    <button onClick={()=>dispatch(incrementByAmount(Number(value) || 0))} > ADD</button>

    <button onClick={()=>dispatch(decrementByAmount(Number(value) || 0))} > remove</button>

  
    </div>
  );
}

export default App;
