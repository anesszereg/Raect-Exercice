import React from 'react';
import './element.css'
import {useState} from 'react'

function element({name,price,calculeTotalPrice,quantity}) {
 
  const handleChange = ()=>{
    calculeTotalPrice(price ,quantity)
  }
  
  return(
 <div className='element-form'>
     <h2 className="titel-element">{name}</h2>
     <p className="price">{price} $</p>
     <button className="add"  type="submit"   onClick={handleChange}>Ajouter au Panier</button>

  </div>)
}

export default element;
