import React from "react";
import { useState } from "react";
import Element from "./element";
import { Data } from "./Data";
// import { useState } from 'react';
import "./Shoping.css";

function Shoping() {
  const [cridit, setCridit] = useState(10000);

    // const decrse = ({price}) => {
    //   setCridit(cridit -(price));
    // };

  const [Buy, setBuy] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const Plusone = (price, Buy) => {
    
    setBuy(Buy+1)
    setTotalPrice(price)
    let p=price*Buy
    setTotalPrice(p)
     console.log(totalPrice);

  };
  return (
    <div>
      <div className="up">
        <div className="right">
          <h1>Ecommerce sites web</h1>
        </div>
        <div className="left">
          <div className="Solde">
            <h3>Solde</h3>
            <p className="solde-p">{cridit} $</p>
          </div>
          <div className="panier">
            <h3>PANIER</h3>
            <p className="number-p">{Buy}</p>
          </div>
          <div className="btn">
            <button  className="confirm">confermer la commande</button>
          </div>
        </div>
      </div>
      <div className="down">
        {Data.map((ele,index) => (
          <Element key={index} name={ele.name} 
          price={ele.price} 
          calculeTotalPrice={Plusone}
          quantity={Buy}
          />
        ))}
      </div>
    </div>
  );
}

export default Shoping;
