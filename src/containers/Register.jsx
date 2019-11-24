import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { registerUser } from '../duck/actions';
import RegisterForm from '../components/RegisterForm.jsx';

class Register extends Component {
    submit = async values => {
        await this.props.registerUser(values);
        this.props.history.push('/');
    }
    render() {
        return (
            <RegisterForm onSubmit={this.submit} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.appReducer.authUser
    }
}

const mapDispatchToProps = { registerUser }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Register));