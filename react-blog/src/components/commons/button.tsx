import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    border:none;
    border-radius: 4px;
    font-size:1rem;
    font-weight:bold;
    padding:0.25rem 1rem;
    color:white;
    outline:none;
    cursor:pointer;
    
    background:black;
    &:hover{
      background : whitesmoke;
      color:black;
    }
    
    `;

    const Button = (props:any) => <StyledButton {...props}></StyledButton>

    export default Button;