import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import LoginForm from '../components/LoginForm.jsx';
import {checkUser, loginUser} from '../duck/actions';
import {connect} from "react-redux";
import styled from 'styled-components';

const Error = styled.p`
    color: red;
    margin-top: 10px;
    font-size: 16px;
`;

class Login extends Component {
    state = {
        isError: false
    }
    submit = async values => {
        const isSuchUser = await checkUser(values);
        if (isSuchUser) {
            await this.props.loginUser(values);
            this.props.history.push('/');
        }
        this.setState({
            isError: true
        })
    }
    render() {
        const  { isError } = this.state;
        return (
            <Fragment>
                <LoginForm onSubmit={this.submit} />
                {
                    isError ? <Error>No such user, please register first</Error> : null
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = { checkUser, loginUser }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));
