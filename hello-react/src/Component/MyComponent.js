import React,{Component}  from 'react';
import PropTypes from 'prop-types';
const MyComponent = ({name,favoriteNumber,children}) =>{
// const {name , children} =props;
    return(
         <div>
            안녕하세요 저는 {name} 입니다.<br/>
             chlid 값은 {children}<br/>
             제가 좋아하는 숫자는 {favoriteNumber} 입니다.
         </div>
        )
}

MyComponent.defaultProps = {
    name : '기본 이름'
};
MyComponent.proTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent