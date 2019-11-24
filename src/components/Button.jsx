import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: block;
    margin-top: 10px;
    padding: 10px;
    background: #00cccc;
    border: none;
    color: white;
    font-size: 18px;
`;

function Button(props) {
    return(
        <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    )
}

export default Button;