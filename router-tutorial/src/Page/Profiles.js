import React from 'react';
import {Link , Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () =>{
    return (
      <div>
          <h3>사용자 목록 : </h3>
          <ul>
              <li>
                  <Link to="/profiles/id">김민상</Link>
              </li>
              <li>
                  <Link to="/profiles/gildong">홍길동</Link>
              </li>
          </ul>
          <Route
           path="/profiles"
           exact
           rander={()=><div>사용자를 선택 해 주세요</div>}/>
          <Route path="/profiles/:username" component={Profile}/>
      </div>
    );
};
export default Profiles;