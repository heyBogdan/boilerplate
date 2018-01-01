import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Root from "./components/Root/Root";
import "./style.scss";

const store = createStore(() => {});

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

