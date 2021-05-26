import React from 'react';
import qs from 'qs';
const About = ({location}) =>{
    const query = qs.parse(location.search , {
        ignoreQueryPrefix: true // 문자열 맨앞에 ? 를 생략
    });
    const showDetail = query.detail === 'true'; // 쿼리 피싱값은 문자열
 
    return(
        <div>
            <h1>소개</h1>
            <p>실습 예제 프로젝트</p>
            {showDetail && <p>detail 값을 true 로 설정함</p>}
        </div>
    );
};
export default About;