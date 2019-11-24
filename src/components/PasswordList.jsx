import React from 'react';
import styled from 'styled-components';
import PasswordListItem from "./PasswordListItem.jsx";

const PasswordsList = styled.div`
    margin-top: 30px;
    width: 300px;
`;

let PasswordList = props => {
    return (
        <PasswordsList>
            {
                props.passwords.map((password, index) => (
                    <PasswordListItem
                        deletePassword={props.deletePassword}
                        editPassword={props.editPassword}
                        password={password}
                        index={index}
                        key={`${Math.random()}_${password.password}`}
                    />
                ))
            }
        </PasswordsList>
    )
}

export default PasswordList;