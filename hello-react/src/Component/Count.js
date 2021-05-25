import React,{useState} from 'react';
 // 함수형 
const Counter = () =>{

    const [number,setNumber] = useState(0);
    const onClickPlus = () => setNumber(number + 1);
    const onClickMinus = () => setNumber(number - 1);

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickMinus}>-1</button>
        </div>
    );
};
// 클래스형
// class Counter extends Component{
//     constructor(props) {
//         super(props);
//         this.state ={
//             number : 0
//         };
//     }
//     render(){
//         const{ number } =this.state; // state 조회할때는 state로
//         return(
//           <div>
//               <h1>{number}</h1>
//               <button onClick={()=>this.setState({number:number+1})}>
//                   +1
//               </button>
//               <button onClick={()=>this.setState({number:number-1})}>
//                   -1
//               </button>
//               <button onclick={()=>this.setState({number:number})}>
//                 Reset
//               </button>
//           </div>
//         );
//     }
// }
export default Counter;