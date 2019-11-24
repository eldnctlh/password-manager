import React, { useState  } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';
import {usageOptions} from "../const/const";

const PasswordWrapper = styled.div`
    margin-top: 10px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 20px;
`;

const Content = styled.input`
    border: thin solid #ccc;
    padding: 10px;
    padding-right: 0px;
    font-size: 16px;
    width: 100%;
`;

const ContentText = styled.div`
    border: thin solid #ccc;
    padding: 10px;
    padding-right: 0px;
    font-size: 16px;
    width: 100%;
    background: #eee;
`;

const Select = styled.select`
    border: thin solid #ccc;
    padding: 10px;
    padding-right: 0px;
    font-size: 16px;
    width: 100%;
    &:disabled {
        background: #eee;
    }
`;

const InfoText = styled.div`
    color: #ffee00;
    font-size: 10px;
    margin-top: 5px;
`;

const Label = styled.p`
    font-size: 16px;
    margin: 10px 0px;
`;

const Buttons = styled.p`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
`;

let PasswordListItem = props => {
    const { password } = props;
    const [visible, toggleVisible] = useState(false);
    const [isDisabled, toggleEdit] = useState(true);
    const [passwordValue, onChangePassword] = useState(password.password);
    const [usageValue, onChangeUsage] = useState(password.usage);

    const onEdit = () => {
        props.editPassword({password: passwordValue, usage: usageValue}, props.index)
        toggleEdit(true);
        toggleVisible(false);
    }

    return (
        <PasswordWrapper>
            <Label>Password</Label>
            {
                isDisabled ?
                    <ContentText
                        onClick={() => toggleVisible(!visible)}
                    >
                        {visible ? passwordValue : Array(passwordValue.length).fill('*').join('')}
                    </ContentText> :
                    <Content
                        onChange={e => onChangePassword(e.target.value)}
                        value={passwordValue}
                    />
            }
            <InfoText>Click to reveal a password</InfoText>
            <Label>Usage</Label>
            <Select
                onChange={e => onChangeUsage(e.target.value)}
                value={usageValue}
                disabled={isDisabled}
            >
                {usageOptions.map(e => <option key={e}>{e}</option>)}
            </Select>
            <Buttons>
                {
                    isDisabled ?
                        <Button onClick={() => toggleEdit(!isDisabled)}>Edit</Button>
                        :
                        <Button onClick={onEdit}>Save</Button>
                }
                <Button
                    onClick={() => props.deletePassword(props.index)}
                >
                    Delete
                </Button>
            </Buttons>
        </PasswordWrapper>
    )
}

export default PasswordListItem;