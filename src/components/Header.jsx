import React, { Component, Fragment } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {connect} from "react-redux";
import {initFetch, logOut} from "../duck/actions";

const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 50px;
`;

const Item = styled.div`
    font-size: 18px;
    padding: 10px;
    margin-left: 20px;
    color: #3300ff;
    text-decoration: none;
    cursor: pointer;
    a {
        color: #3300ff;
        text-decoration: none;
    }
`;

class Header extends Component {
    async componentDidMount() {
        await this.props.initFetch()
        if (this.props.authUser) this.props.history.push('/')
    }
    render() {
        return (
            <HeaderWrapper>
                <Item>
                    <Link to="/login">Login</Link>
                </Item>
                <Item>
                    <Link to="/register">Register</Link>
                </Item>
                <Item>
                    <Link to="/">Dashboard</Link>
                </Item>
                <Item>
                    <p onClick={this.props.logOut}>Log Out</p>
                </Item>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.appReducer.authUser
    }
}

const mapDispatchToProps = { logOut, initFetch }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Header));