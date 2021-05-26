import logo from './logo.svg';
import { Route , Link } from 'react-router-dom';
import About from'./Page/About.js';
import Home from './Page/Home.js';
import Profile from "./Page/Profile.js";
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
              <li>
                  <Link to="/profile/id">김민상 프로필</Link>
              </li>
              <li>
                  <Link to="/profile/gildong">홍길동 프로필</Link>
              </li>
          </ul>
          <hr/>
          <Route path="/" component={Home} exact={true}/>
          <Route path={['/about','info']} component={About}/>
          <Route path="/profile/:username" component={Profile}/>
      </div>
  );
};

export default App;
