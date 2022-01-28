import React from 'react';
import './Coffe.css'
function Coffe({yeah,no ,order}) {
    const Onclick =(e)=>{
        
        if(li.includes(order)){
           return yeah=` voila  votre demende ${li} `
        }else
        {
            return no =`desole ${li} n'existe pas dans notre munu`
        }

    }





  return (

<div className="container" >
    <div className="box left">
        <h1>Client</h1>
        
        <h3 className="paragraph">je veux:</h3>
        <div className="down">
            
        <input type="text" id='myinput' placeholder='  quel est votre demende ' value={order}/>
        <button className="btn1">demender</button>
        
        
        
        </div>
        <p className="paragraph">Servure:</p>
        <p className="demande">{yeah}</p>
        <p className="demande">{no}</p>

        
    </div>
    <div className="box right">
        <h1>Café</h1>
        <h4 className="T-munu">Munu:</h4>
        <ol>
            <li>COFFE</li>
            <li>EXEPRECO</li>
            <li>CAPPUCCINO</li>
            <li>ICED</li>
            
        </ol>

    </div>

</div>
  ) ;
}

export default Coffe;
