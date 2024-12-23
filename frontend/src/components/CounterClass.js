import React from "react"; 

//class base approch
class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment= this.increment.bind(this)
        this.decrement= this.decrement.bind(this)
        this.state ={
            number:0
        }
    }
    increment(){
        this.setState({
            number: this.state.number + 1
        })
    }
    decrement(){
        this.setState({
            number: this.state.number -1
        })
    }
    render(){
        return(
            <dev>
                <h3>Class Component</h3>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </dev>
        )
    }
}

export default CounterClass;