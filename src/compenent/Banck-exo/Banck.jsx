import React from 'react';
import {useState} from 'react';
import Box from './box';
import './Banck.css'


function Banck() {
    const [sold, setSold] = useState(1000);
    // const[ v, setV]= useState(0)
    // const[ t, setT]= useState(0)
    // const[ m, setM]= useState(0)


    const sendMsg = (msg) => {
        // setV(msg);
        // console.log(msg);
        setSold(sold + parseInt(msg))

    }
    const increase = (msg) => {
        // setV(msg);
        // console.log(msg);
        setSold(sold - parseInt(msg))

    }


    return (
        <div className='Form-banc'>
            <div className="Titel">
                <h1>
                    Bienvenu dans l'espace
                    <br/>
                    client de votre bacnk
                </h1>
            </div>
            <div className="cridit">
                Votre solde est :{sold}
                $</div>
            <div className="servise">
                <h1>
                    Nos services</h1>
            </div>
            <div className="boxs">


                <Box name="Rechargemet votre compte"
                    sendMsg={sendMsg}/>
                <Box name="Virement"
                    sendMsg={increase}/>
                <Box name="Recharge Telephone"
                    sendMsg={increase}/>


            </div>


            {/* <div className="boxs" ></div> */} </div>
    )
}

export default Banck;
