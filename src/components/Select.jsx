import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    display: block;
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    width: 200px;
`;
const Wrapper = styled.div`
    margin-top: 10px;
`;
const Label = styled.label`
    font-size: 18px;
    margin-bottom: 3px;
`;

function Select(props) {
    const { input, meta, ...rest } = props;
    return(
        <Wrapper>
            <Label
                htmlFor={props.name}
            >
                {props.label}
            </Label>
            <StyledSelect
                id={props.name}
                {...input}
                {...rest}
                value={rest.value}
                onChange={input.onChange}
            >
                {
                    props.options.map(e => <option key={e}>{e}</option>)
                }
            </StyledSelect>
        </Wrapper>
   )
}

export default Select;