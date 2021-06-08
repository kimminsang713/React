import React from 'react';
import Editor from "../write/editor";
import Responsive from "../commons/responsive";
import Header from "../commons/header";

const WritePage =()=>{
    return (
        <Responsive>
            <Header/>
            <Editor/>
        </Responsive>
    );
};
export default WritePage;