import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from "react-router";
import PasswordForm from '../components/passwordForm.jsx';
import PasswordList from '../components/passwordList.jsx';
import { addPassword, deletePassword, editPassword } from "../duck/actions";

class Dashboard extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkIsAuth()
    }

    checkIsAuth() {
        if (!this.props.authUser) {
            this.props.history.push('/login')
        }

    }

    componentDidMount() {
        this.checkIsAuth()
    }

    submit = async values => {
        this.props.addPassword(values);
    }

    render() {
        return (
            <div>
                <PasswordForm onSubmit={this.submit} />
                <PasswordList
                    passwords={this.props.passwords}
                    deletePassword={this.props.deletePassword}
                    editPassword={this.props.editPassword}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authUser: state.appReducer.authUser,
        passwords: state.appReducer.passwords
    }
}

const mapDispatchToProps = { addPassword, deletePassword, editPassword }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dashboard));