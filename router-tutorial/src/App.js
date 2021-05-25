import logo from './logo.svg';
import { Route , Link } from 'react-router-dom';
import About from'./Page/About.js';
import Home from './Page/Home.js';

import './App.css';

const App = () =>{
  return(
      <div>
          
          <ul>
              <li>
                  <Link to="/">홈</Link>
              </li>
              <li>
                  <Link to="/about">소개</Link>
              </li>
          </ul>
          <hr/>
          <Route path="/" component={Home} exact={true}/>
          <Route path={['/about','info']} component={About}/>
      </div>
  );
};

export default App;
