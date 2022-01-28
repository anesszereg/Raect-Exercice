import React from 'react';
import {useState} from 'react'



function ChatF() {
    const[ msg , useMsg]= useState('')

    const handleValue =(e)=> {
        setMsg
    }

    return (

        <div className="box-chat">
            <form onSubmit={
                this.handlSubmit
            }>
                <h1>{
                    this.props.name
                }</h1>
                <div className="messege">
                    <input id="msg" type="text" placeholder="right somthing here "
                        onChange={
                            this.handleValue
                        }
                        value={
                            this.state.msg
                        }/>
                    <input type="submit" value="Send"/>
                </div>
                <h1 className="T1">
                    Messege
                </h1>

                <h2> {
                    this.props.chatMessage
                } </h2>

            </form>


        </div>


    )
}

export default ChatF;
