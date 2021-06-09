import React from 'react';
import Editor from "../write/editor";
import Responsive from "../commons/responsive";
import Header from "../commons/header";
import WriteActionButtons from "../write/writeActionButton";

const WritePage =()=>{
    return (
        <Responsive>
            <Editor/>
            <WriteActionButtons/>
        </Responsive>
    );
};
export default WritePage;