import React from 'react';
import './box.css'
import {useState} from 'react';
function box({name ,sendMsg}) {
    const [ msg , setMsg] =useState(0)

    const handleValue = (e)=>{
        setMsg(e.target.value)
    }
    const handleChange = (e)=>{
        sendMsg(msg)
        
    }
    
    
  return (
      <div className="container">

  <div className="box-form" >
      <h1 className='H1'>{name}
      </h1>

      <input id='montant' type="Number"  placeholder='Montant' value={msg} onChange={handleValue} />
      <button id='R1' type="submit" value="Recharger" onClick={handleChange}> Recharger</button>

  </div>
      </div>)
}

export default box;
