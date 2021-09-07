import React, { useState } from 'react';

const SimipleHabit = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <li className="habit">
            <span className="habit__name">Reading</span>
            <span className="habit__count">{count}</span>
            <button className="habit__button habit--increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimipleHabit;
