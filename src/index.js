import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./containers/App.jsx";
import { store } from './duck/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);