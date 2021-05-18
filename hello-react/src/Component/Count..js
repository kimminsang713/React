import React,{Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state ={
            number : 0
        };
    }
    render(){
        const{ number } =this.state; // state 조회할때는 state로
        return(
          <div>
              <h1>{number}</h1>
              <button onClick={()=>this.setState({number:number+1})}>
                  +1
              </button>
              <button onClick={()=>this.setState({number:number-1})}>
                  -1
              </button>
              <button onclick={()=>this.setState({number: 0})}>
                Reset
              </button>
          </div>
        );
    }
}