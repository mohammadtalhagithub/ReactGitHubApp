import React from "react";
import { add, subtract, multiply, divide } from './Math';

function List() {
    return <ul>
        <li>{add(1, 3)}</li>
        <li>{subtract(3, 1)}</li>
        <li>{multiply(3, 2)}</li>
        <li>{divide(9, 3)}</li>
    </ul>;
}

export default List;