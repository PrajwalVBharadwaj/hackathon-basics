import React from "react";
import NetworkComponent from "./component/network";
import ChartComponent from "./component/chart";
import Dropdown from "./component/dropdown";
import "./App.css";

function App() {
    return (
        <>
            <h1>Example for asynchronous network call</h1>
            <NetworkComponent />
            <h1>Example for data visualization</h1>
            <ChartComponent />
            <h1>Example for reading dropdown data from JSON</h1>
            <Dropdown />
        </>
    );
}

export default App;
