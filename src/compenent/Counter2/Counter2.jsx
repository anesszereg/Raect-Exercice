import {useState} from 'react';
import '../Counter/Counter.css'

function Counter2() {

    const [state,setCounter2]= useState(0);

    
    
    
  return (<div>
      <div className="form-two">
                <h1>{state}</h1>
                <div className="btn">
                    <button className="btn2" onClick={() => setCounter2(state +1)}>+</button>
                    <button className="btn1" onClick={() => setCounter2(state -1)} >-</button>
                </div>
            </div>
  </div>)
}

export default Counter2;
