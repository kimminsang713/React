import React from 'react';
import styled ,{css} from 'styled-components';
import Responsive from "./responsive";
import WritePage from '../pages/writePage';
import {Route, Link} from "react-router-dom";

const HeaderBlock = styled.div`
    positive :fixed;
    width:100%;
    background:white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
    `;

const Wrapper = styled(Responsive)`
    a{
       text-decoration:none;
       color: black;
    }
    height:4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .logo{
       font-size:1.125rem;
       font-weight:800;
       letter-spacing:2px;
    
    }
    .right{
        display:flex;
        align-items:center;
    }`;

const Spacer = styled.div` height : 4rem;`;


const Header = () =>{
    return (
        <>
          <HeaderBlock>
              <Wrapper>
                  <div className="logo" ><Link to="/">VLOG</Link></div>
                  <div className="right">
                      <Link to="/write">글쓰기</Link>
                  </div>

                  <Route path="/write" component={WritePage}/>
              </Wrapper>
          </HeaderBlock>
          <Spacer/>
        </>

    );
};

export default Header;