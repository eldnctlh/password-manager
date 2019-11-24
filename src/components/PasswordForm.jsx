import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input.jsx';
import Select from './Select.jsx';
import Button from './Button.jsx';
import { usageOptions } from "../const/const";

let PasswordForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <Field
            name="password"
            component={Input}
            label={'Password'}
            type="text"
        />
        <Field
            name="usage"
            component={Select}
            label={'Usage'}
            options={usageOptions}
        />
        <Button>Add password</Button>
    </form>
}

PasswordForm = reduxForm({
    form: 'password'
})(PasswordForm)


export default PasswordForm;