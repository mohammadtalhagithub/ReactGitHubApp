import React from "react";
import './header.css';

function Header(props) {
    return (
        <div className="row main-heading">
            <h1>{props.text}</h1>
        </div>
    );
}

export default Header;