import logo from './logo.svg';
import './App.css';
import Counter from './Component/Count.js'
import MyComponent from "./Component/MyComponent";

const App = () => {
  return(
      <>
        <Counter/>
        <MyComponent name ={"React"} favoriteNumber={1}>리액트</MyComponent>
      </>
    );


}


export default App;
