import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./components/HomePage"

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomePage />;
    }
}

const appDiv = document.getElementById("app");
render(<App name="CatchU" />, appDiv);
