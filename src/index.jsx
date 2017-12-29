import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./style.scss";

const Hello = props => (<h1>Hello world from {props.author}</h1>);


Hello.defaultProps = {
    author: "Bogdan",
};

Hello.propTypes = {
    author: PropTypes.string,
};

ReactDOM.render(<Hello author="Bogdan" />, document.getElementById("root"));

