import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input.jsx';
import Button from './Button.jsx';

let LoginForm = props => {
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
        <Button>Login</Button>
    </form>
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export default LoginForm;