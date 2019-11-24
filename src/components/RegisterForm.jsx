import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input.jsx';
import Button from './Button.jsx';

let RegisterForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <Field
            name="login"
            component={Input}
            label={'Login'}
            type="text"
        />
        <Field
            name="password"
            component={Input}
            label={'Password'}
            type="password"
        />
        <Button>Register</Button>
    </form>
}

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)


export default RegisterForm;