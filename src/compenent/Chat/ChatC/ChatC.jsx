import {Component} from 'react'
import './ChatC.css'


class ChatC extends Component {
    constructor(props) {
        super(props);
    }
    onChange = (event) => {
        this.props.parentCallback(event.target.msg.value);
        event.preventDefault();
    }
    state = {}
    render() {
        return (<div className="box-chat">
            <h1 className="Name"> {
                this.props.name
            }</h1>
            <div className="messege">

                <textarea type="text" name="msg" id="msg" placeholder="     Messege" cols="50" rows="2"></textarea>
                <button className="btn3" type='submit'
                    on={
                        this.onChange
                }>Send</button>
            </div>
            <br/>
            <h1 className="T1">
                Messege
            </h1>
            <p type="submit" value="submit"></p>
        </div>);
    }
}

export default ChatC;
