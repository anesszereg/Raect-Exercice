import './counter.css'
import {Component} from 'react'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count : 0
        }
    }
    
    PlusOne = () =>{
        console.log("r");
        this.setState({count: this.state.count +1})
    }
    MoinOne = () =>{
        this.setState({count: this.state.count -1})
        
        
        
    }
    // state = {  }
    
    render() { 
        return (
            <div className="form-two">
                <h1>{this.state.count}</h1>
                <div className="btn">
                    <button className="btn2" onClick={this.PlusOne}>+</button>
                    <button className="btn1" onClick={this.MoinOne} >-</button>
                </div>
            </div>
          );
    }
}
 
export default Counter;