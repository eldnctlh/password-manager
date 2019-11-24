import React, { Component, Fragment } from "react";
import '../styles/styles.less';
import styled from 'styled-components';
import RouterNavigation from './RouterNavigation.jsx';

const Layout = styled.div`
    padding: 20px;
`;

class App extends Component {
    render() {
        return (
            <Layout>
                <RouterNavigation />
            </Layout>
        );
    }
}

export default App;