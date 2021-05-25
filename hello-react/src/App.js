import './App.css';
import Counter from './Component/Count.js'
import MyComponent from "./Component/MyComponent.js";

const App = () => {
  return(
      <>
        <Counter/>
        <MyComponent name ={"React"} favoriteNumber={1}>리액트</MyComponent>
      </>
    );


}

export default App;
